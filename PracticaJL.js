//Grupo #3
//Pagina elegida, TEMU

//Variables simples

let totalProductos = 2000
let itemsEnCarrito = 5;
let nombreUsuario = "Jose"
let codigoDescuento = "TEMU2024"
const enviogratis = true

//Variables compuestas
let productosDestacados = ["Camisetas","Zapatillas","Reloj","Bolso"];
let vendedor = {
    nombre: "Tienda TEMU [oficial]",
    numEstrellas: 4.5
}

//String - cadena de caracteres

let codDescuento = "TEMU2024"
console.log(codDescuento.length)

//Metodos 
console.log(codDescuento.trim())
console.log(codDescuento.includes('TEMU[oficial]'))
console.log(codDescuento.toUpperCase())
console.log(codDescuento.toLowerCase())

//Escribir de manera estandarizada

console.log(`Codigo de descuento: ${codDescuento}`)

let precioProducto = "12.75"
let precioProd = 35.50

console.log(+precioProducto + precioProd);

//Operadores ternarios
let puntosUsuario = 500;
let puntosRequeridos = 1000; 

puntosUsuario >= puntosRequeridos ? console.log("Tienes suficientes puntos para el descuento"):console.log("Sigue acumulando puntos")

//Valores verdaderos - truthy
let nivelMembresia = 3;
nivelMembresia === 4 ? console.log("Membresia premium activada") : console.log("Actualiza tu membresia")

//Valores falses falsy
let usuario = ""
!usuario ? console.log("No existe usuario") : console.log("Usuario registrado")

//Comparacion
let codProd = "111245"
codProd === 111245 ? console.log("Codigo encontrado") : console.log("Codigo no registrado")

//Loops
const productosRecomendados = ["Smartphone","Auriculares","Camara","Monitor"]
productosRecomendados.forEach(producto => {console.log(producto)})

console.log(productosDestacados)

//Funciones.
//Anonima y autoejecutada

//Funcion declarada
function mostrarBanner (){
    console.log("Bienvenido a la campaña de descuentode TEMU!")
}
mostrarBanner()

//Argumentos
const validarCupon = function (cupon, descuento){
    console.log(`El cupon ${cupon} te ha otorgado un ${descuento}% de descuento`)
}

validarCupon("TEMU20", 20)

//Argumentos opcionales
const validarEnvioGratis = function (envio = "gratis"){
    console.log(`El envio ${envio} esta disponible para tu compra`)
}
validarEnvioGratis();

//Arrow function
const mostrarProducto = () =>{
    console.log("Nuevos productos agregados al catalogo")
}
mostrarProducto()

const registrarCompra = (monto = 250) => {
    console.log("Compra registrada por un total de: $"+monto)
}
registrarCompra()

//Objetos

const datosClientes = {
    nombre: "Jose Lincango",
    edad: "20",
    direccion:{
        ciudad: "Quito",
        telefono: "0983799163"
    },
    miembroVIP: false,
    favoritos: ["Celulares","Zapatos","Mascotas"]
};

//JSON

const datosClientes1 = {
    "nombre": "Jose Lincango",
    "edad": "20",
    "direccion":{
        "ciudad": "Quito",
        "telefono": "0983799163"
    },
    "miembroVIP": false,
    "favoritos": ["Celulares","Zapatos","Mascotas"]
};

console.log(datosClientes1.nombre)
console.log(datosClientes1.edad)
console.log(datosClientes1.direccion)
console.log(datosClientes1.miembroVIP)
console.log(datosClientes1.favoritos)

//Desestructuracion
const datosUser = {nombre, edad, direccion, miembroVIP,favoritos:best} = datosClientes

//Propiedades

//Agregar propiedades
datosClientes.producto = "Mochila.jpg"
console.log(datosClientes)

//Eliminar propiedades
delete datosClientes.miembroVIP
console.log(datosClientes)

//Datos sin contenido

Object.values(datosClientes).includes("")? console.log("error"):console.log("OK")

//Formulario1
const carritoCompra = {
    nameC:"Mochila",
    priceC:25.00
}

//Formulario2
const usuarioC={
    nameCl: "Jose",
    telf: "0983799163"
}

//Union de los formularios
const ordenCompra = {...usuarioC,...carritoCompra}
console.log(ordenCompra)