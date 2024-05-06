//Crear un servidor importar http path fs
import http from 'node:http'
import path from 'node:path'
import fsp from 'node:fs/promises'

let puerto = 3000
let cors = 'cors'
let localhost3000 = 'localhost-3000'


async function GestionJson(peticion, respuesta) {
    try {
       
        const ruta = path.join(cors,localhost3000, 'datos.json');
        
        const archivo = await fsp.readFile(ruta);

        //cabecera q permite ser consultado de otro lado
        respuesta.setHeader('Access-Control-Allow-Origin','*')
        respuesta.setHeader('Cache-Control', 'max-age=3600');
        respuesta.setHeader('Content-Type', 'application/json;charset=utf-8');
        respuesta.statusCode = 200;

       
        respuesta.end(archivo.toString());
    } catch (error) {
        
        respuesta.setHeader('Content-Type', 'text/plain; charset=utf-8');
        respuesta.statusCode = 404;
        respuesta.end('Error con el JSON');
    }
}

const servidor = http.createServer((peticion,respuesta) => {
    if(peticion.method === 'GET'){
        if(peticion.url === '/datos'){
           
            GestionJson(peticion,respuesta)
        }
    }
    else{
        respuesta.statusCode = 404;
        console.error("Erro con el metodo ")
    }

})



servidor.listen(puerto,()=>{
 console.log(`Se a creado el servidor en la ruta http://localhost:${puerto}/datos`)
})