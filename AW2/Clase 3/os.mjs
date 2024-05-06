import os from 'node:os'

console.log(os.cpus())
console.log(os.version())
//memoria libre
console.log(os.freemem() / 1024 / 1024 / 1024)

//console.log("La memoria utilizada es de " + ((os.totalmem() - os.freemem()) / 1024 / 1024 / 1024).toFixed(0))



const decimal = ()=>{

    return Math.round((os.totalmem() - os.freemem()) / 1024 / 1024 / 1024)
}

console.log("La memoria utilizada es de " + decimal())