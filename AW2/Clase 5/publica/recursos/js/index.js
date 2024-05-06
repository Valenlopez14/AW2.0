
const traerDatos = async () =>{
    const datos = await fetch("http://localhost:3000/productos")
    const datosjson = datos.json
    console.log(datosjson)
}
traerDatos()

