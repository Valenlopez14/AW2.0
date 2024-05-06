const formulario = document.getElementById("formulario")

formulario.addEventListener('submit',(evt) => {
    evt.preventDefault()
    //Tomar datos dentro del formulario y guardar
    const datos = new FormData(formulario)
    //Tomo los datos en formato distinto y los convierto
    const datosForm = Object.fromEntries(datos)
    //Lo convertimos en cadena 
    fetch(formulario.action,{
        method:formulario.method,
        headers:{
            'Contet-Type':'application/json'
        },
        body:JSON.stringify(datosForm)
    }).then((respuesta)=>{
        console.log(respuesta)
    }).catch((error)=>{
        console.log(error)
    })
})
