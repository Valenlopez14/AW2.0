import http from 'node:http'
import path, { join } from 'node:path'
import fsp from 'node:fs/promises'
import { readFile } from 'node:fs';


//Configuraciones
let puerto = 3000;
let productosV1;
//Funciones
const leenArchivoJSON = async()=>{
    try{
        //Ruta donde se encuentra el archivo json que vamos a utilizar
        const ruta = path.join('api','v1','productos.json')
        const datos = await fsp.readFile(ruta, 'utf-8')
        console.log(datos)
        productosV1 = JSON.parse(datos)
        console.log(productosV1)
    }
    catch(error){

    }
}
leenArchivoJSON();

const servidor = http.createServer((peticion, respuesta)=>{
    
    respuesta.end(ruta)
    const metodo = peticion.method;
    const rutapeticion = peticion.url

    //IMPLEMENTAMOS LAS RUTAS GET
    if(metodo === 'GET' )
    {
        const url = new URL('http://' + rutapeticion, peticion.headers.host)
        console.log(peticion.headers.host)
        if(rutapeticion === '/productos')
        {
            respuesta.setHeader('Content-Type', 'aplicattion/json')
            respuesta.statusCode = 200;
            respuesta.end(JSON.stringify(productosV1))
        }
        else{
            respuesta.statusCode = 404;
            respuesta.end('Contenido no encontrado')
        }
    }
})

servidor.listen(puerto, () => {
    console.log(`Se ha creado el servidor en la ruta http://localhost:${puerto}`);
});