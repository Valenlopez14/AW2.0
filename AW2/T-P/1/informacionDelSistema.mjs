import os from 'node:os'

//Buscamos la informacion del sitsema 
//Lo paso a cadena
const procesador = JSON.stringify(os.cpus())
const memoriaTotal = os.totalmem()/1024/1024/1024
const memoriaLibre = os.freemem()/1024/1024/1024
const memoriaUsada = memoriaTotal - memoriaLibre
const interfazRedes = JSON.stringify(os.networkInterfaces())
const fechaActual = new Date(Date.now())


let datos = ''
datos += '------------------------'
//Salto de linea

datos += os.EOL
datos += `El servidor se abrio:  ${fechaActual}`
datos += os.EOL
datos += `Procesador:  ${os.EOL}${procesador}`
datos += os.EOL
datos += `Memoria Total:  ${memoriaTotal.toFixed(2)}`
datos += os.EOL
datos += `Memoria Libre:  ${memoriaLibre.toFixed(2)}`
datos += os.EOL
datos += `Memoria Usada:  ${memoriaUsada.toFixed(2)}`
datos += os.EOL
datos += `Intefaces de redes:  ${interfazRedes}`
datos += os.EOL

export default datos;