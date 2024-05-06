//obtener datos
const json = async () =>{
    try{
        
        const datos = await fetch("http://localhost:3000/datos") 
        const datosjson = await datos.json()
        console.log(datosjson) 
    }catch(error){
        console.error(error)
    }
}

json()

// function mostrarDatos(){

//     const contenedor = document.getElementById("datos")
//     let datos = ""
// }
