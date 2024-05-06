import fs from 'node:fs/promises'
import datos from './informacionDelSistema.mjs'
import http from 'node:http'

const fechaActual = new Date()

const nombreArchivo = () => {
    const hora = fechaActual.getHours();
    const minutos = fechaActual.getMinutes();
    const dia = fechaActual.getDate();
    const mes = fechaActual.getMonth() + 1;
    const año = fechaActual.getFullYear();
    return `./log-(${dia} - ${mes} - ${año} - ${hora}h - ${minutos}m).txt`
}

let archivo; // Declaramos la variable archivo fuera del servidor

const servidor = http.createServer((peticion,respuesta) => {

    const ruta = peticion.url
    if( ruta === '/log'){
        async function escribirArchivo(){
            let fd
            archivo = nombreArchivo(); // Asignamos el valor a la variable archivo
            try {
                // Abrir el archivo en modo escritura
                fd = await fs.open(archivo, 'a')
                // Este procedimiento lo abre y lo cierra
                await fs.writeFile(fd, datos)
                //Capturamos el horario
                await fd.close()
                respuesta.end('Archivo .Log escrito exitosamente')
            } catch (err) {
                respuesta.end('Error al generar el archivo', err)
            }
        }
        escribirArchivo()
    }
    else if ( ruta !== '/log'){
        respuesta.end("Ingrese /log en la url para generar el archivo")
    }
        
})

const tiempoInicio = new Date(); // Movemos la declaración de tiempoInicio aquí

//Al apretar ctrl + c en la terminal hace lo siguiente
process.on('SIGINT', async () =>{
    try {
        let tiempoCierre = new Date()
        //Conseguimos el tiempo q se cerro el archivo
        await fs.appendFile(archivo, `Servidor cerrado el ${tiempoCierre.toLocaleString()}\n`);
        const inicio = tiempoInicio
        const cierre = tiempoCierre
        const resultado = cierre - inicio
        //Conseguimos el tiempo que se mantuvo abierto 
        await fs.appendFile(archivo, `El servidor se mantuvo abierto: ${resultado / 1000} segundos`)
        //Proceso finalizado exitosamente 
        process.exit(0);
    } catch (error) {
        console.log('Error')
        //Proceso finalizado por un error 
        process.exit(1);
    }
});

servidor.listen(3400)