import { readFile,mkdir } from 'node:fs';


//const fs = require('node:fs')


fs.mkdir
readFile('producto.txt', (err, data) => {
    if (err) throw err;
    console.log(data.toString());
});

mkdir('carpeta1/carpeta2', { recursive: true }, (err) => {
    if (err) throw err;
    console.log('Directorios creados exitosamente.');
});