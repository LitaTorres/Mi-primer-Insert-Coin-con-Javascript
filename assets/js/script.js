
//Nombre del cliente (ingrese y lo muestre x una aleta)
 var nombresito = prompt("Ingrese su nombre")
 alert ("Bienvenido a nuestra tienda " + nombresito )
 var nombr = document.getElementById("nombre")
 nombr.innerHTML = nombresito

//Ingresar el PRODUCTO 1 con su precio
var prod1 = prompt("Ingrese el nombre del primer producto");
var prec1 = prompt("Ingrese el precio del primer producto");

// La información es tratada como entero
prec1 = parseInt(prec1);

//Obtener los id del index.html
var producto1 = document.getElementById("nombre1") 
var PRECIO1 = document.getElementById("precio1")

//Para mostrar y guardar lo del producto 1 en los td del index por medio de los id hay que asociarlos
producto1.innerHTML = prod1 
PRECIO1.innerHTML = prec1

//Ingresar el PRODUCTO 2 con su precio
var prod2 = prompt("Ingrese el nombre del segundo producto"); 
var prec2 = prompt("Ingrese el precio del segundo producto");

prec2 = parseInt(prec2);

var producto2 = document.getElementById("nombre2") 
var PRECIO2 = document.getElementById("precio2")

producto2.innerHTML = prod2 
PRECIO2.innerHTML = prec2

//Ingresar el PRODUCTO 3 con su precio
var prod3 = prompt("Ingrese el nombre del tercer producto"); 
var prec3 = prompt("Ingrese el precio del tercer producto");

prec3 = parseInt(prec3);

var producto3 = document.getElementById("nombre3") 
var PRECIO3 = document.getElementById("precio3")

producto3.innerHTML = prod3
PRECIO3.innerHTML = prec3

//Ingresar el PRODUCTO 4 con su precio
var prod4 = prompt("Ingrese el nombre del cuarto producto");
var prec4 = prompt("Ingrese el precio del cuarto producto");

prec4 = parseInt(prec4);

var producto4 = document.getElementById("nombre4") 
var PRECIO4 = document.getElementById("precio4")

producto4.innerHTML = prod4
PRECIO4.innerHTML = prec4

//Ingresar el PRODUCTO 5 con su precio
var prod5 = prompt("Ingrese el nombre del quinto producto"); 
var prec5 = prompt("Ingrese el precio del quinto producto");

prec5 = parseInt(prec5);

var producto5 = document.getElementById("nombre5") 
var PRECIO5 = document.getElementById("precio5")

producto5.innerHTML = prod5 
PRECIO5.innerHTML = prec5

// Precio Final
var precioFinal = (prec1+prec2+prec3+prec4+prec5);
var precFinal = document.getElementById("precioFINAL"); 
precFinal.innerHTML = precioFinal; 

