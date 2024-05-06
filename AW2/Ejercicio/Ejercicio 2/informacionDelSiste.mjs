import os from 'node:os'

//Buscamos la informacion del sitsema 
//Lo paso a cadena
const procesador = JSON.stringify(os.cpus())
const memoriaTotal = os.totalmem()/1024/1024/1024
const memoriaLibre = os.freemem()/1024/1024/1024
const memoriaUsada = memoriaTotal - memoriaLibre
const interfazRedes = JSON.stringify(os.networkInterfaces())
const fechaActual = new Date(Date.now())
const inicioActividad = new Date(Date.now()- os.uptime() * 1000)
const servidorActivo = os.uptime()/60/60

let datos = ''
datos += '------------------------'
//Salto de linea
datos += os.EOL
datos += `Inicio de Actividad ${inicioActividad}`
datos += os.EOL
datos += `Fecha Actual ${fechaActual}`
datos += os.EOL
datos += `El servidor estuvo activo ${servidorActivo.toFixed(2)} horas`
datos += os.EOL
datos += `Procesador ${os.EOL}${procesador}`
datos += os.EOL
datos += `Memoria Total ${memoriaTotal}`
datos += os.EOL
datos += `Memoria Libre ${memoriaLibre}`
datos += os.EOL
datos += `Memoria Usada ${memoriaUsada}`
datos += os.EOL
datos += `Intefaces de redes ${interfazRedes}`

export default datos;