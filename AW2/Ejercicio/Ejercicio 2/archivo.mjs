
import fs from 'node:fs/promises'
import datos from './informacionDelSiste.mjs'

//const datos = 'Estos son algunos datos para escribir en el archivo.';
const nombreArchivo = './Ejercicio/miarchivo.txt';


//asincrona
async function  escribirarchivo(){
    let fd
    try {
    //abrirlo en modo escritura
    fd = await fs.open(nombreArchivo, 'w');
    //Este procedimiento lo abre y lo cierra
    await fs.writeFile(fd, datos);
    console.log('Datos escritos en el archivo exitosamente.');
    
    } 
    catch (err) {
    console.error('Error:', err);
}
}

escribirarchivo()


