import { productosLimpieza } from "./productos.mjs";

//Cambiar precio 

const cambiarPrecio = productosLimpieza.map((producto)=>{
    //producto.Precio *= 10
    return {
        Nombre: producto.Nombre,
        precio: producto.Precio += (producto.Precio * 0.1),
        stock: producto.Stock   
    }
    
})
//Filtrar stock > 20

const filtrarProducto = productosLimpieza.filter((producto)=>{

    return(producto.Stock > 20)
})


export {cambiarPrecio,filtrarProducto}