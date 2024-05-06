//Crear un servidor importar http path fs
import http from 'node:http'
import path from 'node:path'
import fsp from 'node:fs/promises'

let puerto = 3000;

const servidor = http.createServer((peticion, respuesta) => {
    if (peticion.method === 'POST' && peticion.url === '/formulario') {
        let datos = '';

        peticion.on('data', (pedacitos) => {
            datos += pedacitos;
        });

        peticion.on('error', (error) => {
            respuesta.statusCode = 500;
            respuesta.end(error.message);
        });

        peticion.on('end', () => {
            respuesta.statusCode = 200;
            respuesta.end(datos);
            
        });
    } else {
        respuesta.statusCode = 404;
        respuesta.end("No encontrado");
    }
});

servidor.listen(puerto, () => {
    console.log(`Se ha creado el servidor en la ruta http://localhost:${puerto}/formulario`);
});