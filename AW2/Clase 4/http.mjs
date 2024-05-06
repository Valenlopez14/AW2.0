import http from 'node:http'


//Identificar las rutas 
//Mandar un post solo se puede de un formulario

const servidor = http.createServer((peticion, respuesta) =>{

    console.log(peticion);
    const ruta = peticion.url
    const metodo = peticion.method;

    //if(ruta === "/" && metodo === "GET") respuesta.end(`Hola ruta raiz ${ruta}` + `El metodo es: ${metodo}`)
    if(ruta === "/" && metodo === "GET"){
        respuesta.setHeader('Content-Type','text/plane')
        respuesta.statusCode = 200
        respuesta.end('<h1>Hola html</h1>')
        return;
    }
    peticion.end('Ruta no encontrada')

    //else if (ruta === "/saludos")  respuesta.end(`Te mando un saludo ${ruta}`)
    //else  respuesta.end("Error")

})

servidor.listen(3000)