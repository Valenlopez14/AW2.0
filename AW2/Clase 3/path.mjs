import {sep,join,parse} from 'node:path'


const ruta = join('a','b','productos.json')
const rutaDesglo = parse(ruta)
console.log(rutaDesglo.base)
console.log(ruta)
console.log(sep)