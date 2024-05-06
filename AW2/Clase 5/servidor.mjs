import http from 'node:http'
import path from 'node:path'
import fsp from 'node:fs/promises'


const publica = 'publica'
const jsonRuta = 'datos'
const puerto = 3000

//Diccionario
const mime =  {
    '.jpg': 'image/jpeg; charset=utf-8',
    '.img' : 'image/jpeg; charset=utf-8',
    '.png' : 'image/png; charset=utf-8',
    '.js' : 'application/javascript',
    '.json' : 'application/json; charset=utf-8',
    '.css' : 'text/css; charset=utf-8'
}

async function index(peticion,respuesta){

    try{
        const ruta = path.join(publica,'index.html')
        const archivo = await fsp.readFile(ruta)
        // respuesta.setHeader('Content-Type', 'text/html; charset=utf-8')
        // respuesta.setHeader('Cache-Control', 'max-age=3600')
        // respuesta.statusCode = 200;
        respuesta.end(archivo)
    }
    catch (err){
        respuesta.setHeader('Content-Type', 'text/plain; charset=utf-8')
        respuesta.statusCode = 500;
        respuesta.end("Error loco")
    }
}

const servidor = http.createServer((peticion,respuesta) => {
    if(peticion.method === "GET"){

        if(peticion.url === 'index.html' || peticion.url === "/"){
            index(peticion,respuesta)
        }
        else if (peticion.url === '/productos'){
            json(peticion,respuesta)
        }   
        else {
            recursos(peticion,respuesta)
        }
    }else if(peticion.method === "POST") {
        if(peticion.url === '/formulario'){
            //llegando
            let datos = ''
            peticion.on('data',(pedacitos)=>{
                datos += pedacitos;    
            })
            //error
            peticion.on('error',() =>{
                respuesta.statusCode = 404
                respuesta.end("Erro en el formulario")
            })
            //end
            peticion.on('end',() => {
                respuesta.end(datos)
            })
        }
    }
    else{
        console.log("Error")
    }

})

async function recursos(peticion,respuesta) {
    try{
        const ruta = path.join(publica,peticion.url)
        const extension = path.extname(ruta)
        const diccionarioMime = mime[extension]
        const archivo = await fsp.readFile(ruta)
        // respuesta.setHeader('Content-Type', diccionarioMime)
        // respuesta.setHeader('Cache-Control', 'max-age=3600')
        // respuesta.statusCode = 200;
        
        respuesta.writeHead(200,{
            'Context-Type':diccionarioMime,
            'Control-Cache': 'max-age=3600'
        })
        respuesta.end(archivo)
    }
    catch(err){
        respuesta.statusCode = 404;
        respuesta.end("no encontrado")
    }
}

async function json(peticion,respuesta) {
    try{
        const ruta = path.join(jsonRuta,'producto.json')
        const archivo = await fsp.readFile(ruta)
        respuesta.setHeader('Cache-Control', 'max-age=3600')
        respuesta.setHeader('Content-Type', 'application/json;charset =utf-8')
        respuesta.statusCode = 200
        respuesta.end(archivo)

    }catch{
        respuesta.statusCode = 404
        respuesta.setHeader('Content-Type', 'text/plain; charset=utf-8')
        respuesta.end('error')
    }
}

servidor.listen( puerto,() =>{
console.log(`El servidor se abrio en http://localhost:${puerto}`);
})