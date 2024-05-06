const personas = [
    {
      nombre: "María López",
      dni: "12345678A",
      edad: 30
    },
    {
      nombre: "Juan García",
      dni: "23456789B",
      edad: 25
    },
    {
      nombre: "Ana Martínez",
      dni: "34567890C",
      edad: 40
    },
    {
      nombre: "Pedro Rodríguez",
      dni: "45678901D",
      edad: 35
    },
    {
      nombre: "Laura Pérez",
      dni: "56789012E",
      edad: 28
    },
    {
      nombre: "Diego Sánchez",
      dni: "67890123F",
      edad: 33
    },
    {
      nombre: "Carmen Ruiz",
      dni: "78901234G",
      edad: 45
    },
    {
      nombre: "Sergio Gómez",
      dni: "89012345H",
      edad: 22
    },
    {
      nombre: "Elena Fernández",
      dni: "90123456I",
      edad: 38
    },
    {
      nombre: "Marta González",
      dni: "01234567J",
      edad: 27
    }
  ];
  
  //console.log(personas[0].nombre);

  //Recorrer arreglo y devuelve uno nuevo 

  const nuevasPersonas = personas.map((persona)=>{
    //obligatorio el return
    persona.edad += 2
    return persona

    /*return {
        nombre: personas.nombre,
        dni:persona.DNI,
        edad: persona.edad + 2   
    }
    */
  })

  console.log(nuevasPersonas)

  const personasFiltradas = personas.filter((persona)=>{

    return (persona.edad > 30)
  })

  console.log(personasFiltradas)

  //callback

 const miCall = (a,b,cb)=>{
    const resultado = a + b 
    cb(resultado)
 }

 miCall(2,4,(res)=>{
    console.log("El resultado de la suma es " + res)
 })