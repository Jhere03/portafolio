/*

//DECLARANDO VARIABLE

var nombre ="Jhair";
var edad= 20;
var presentacion = true;
var apellido =   "de Paula";
var estatura = 1.76;


console.log("nombre: " + nombre+ " "+ typeof nombre);
console.log("edad: "+ edad + " "+ typeof edad);
console.log("presentacion: "+presentacion + " "+ typeof presentacion);
*/


//alert("Ingresando al proyecto");


//OPERADORES
/*
var suma = 1 + 4;
var divi= 25 / 5;

if ( suma == 14 || divi == 5) {
    const suma = 5 + 6;
    const resta = 11 - 2;
    console.log("la suma es: "+ suma);
    console.log("la resta es: "+ resta);
}
else {
    console.log("NO SE CUMPLE")
}*/


//COMPARACIÓN
 /*console.log(10>5);*/

 //SWITCH

 /*
let continuar = true;

while (continuar) {
    let color = prompt("Ingresa un color:");

    switch (color) {
        case "rojo":
            console.log("Es rojo");
            break;

        case "azul":
            console.log("Es azul");
            break;

        default:
            console.log("El color no coincide.");
            break;
    }

    // Preguntar al usuario si desea ingresar otro color
    let respuesta = prompt("¿Quieres ingresar otro color? (sí/no)");

    // Si la respuesta no es "sí", el bucle termina
    if (respuesta.toLowerCase() !== "s") {
        continuar = false;
    }
}
*/

 //BUCLE

 /*
 var bucle = 0;
 while(bucle <=10){
    console.log(bucle);
    bucle ++;
 }
*/
 //CICLO FOR

 /*
 for(var i=1;i<=10; i++){
    console.log("estamos en la vuelta N°: "+i);
 }
*/

 //CICLO DO
 /*
 var contador= 0;
 do{
    console.log(contador);
    contador ++;
 }
 while(contador <=10); //condición de cierre
*/



 //EJERCICIO 01
 /*
            for (var i=1;i<=35; i++){
                console.log(i);
            }*/

//EJERCICIO 02

/*
for (var i=10;i>=0; i--){
    console.log("ES: "+i);
}
console.log("FELIZ AÑO NUEVO !!")*/

//FECHA
/*
var fecha=new Date(2003,3,18);

var dia= fecha.getDate();
var mes= fecha.getMonth();
var anio= fecha.getFullYear();      

alert("Día: "+dia+" Mes: "+mes+" Año: "+anio);*/



// funcionalidad.js

// Función para registrar un nuevo usuario


// Agregar eventos de escucha a los botones de registro e inicio de sesión


    // VALIDACIÓN DE CONTRASEÑA Y REGISTRO
    document.querySelector('.submit').addEventListener('click', function() {
    var usuario = document.querySelector('.usu').value;
    var contraValue = document.querySelector('.contra').value;
    var contraConfirmValue = document.querySelector('.contraconfirm').value;

    // Obtener datos almacenados en localStorage
    var usuariosRegistrados = JSON.parse(localStorage.getItem('usuarios')) || [];

    // Verificar si el usuario ya está registrado
    var usuarioExistente = usuariosRegistrados.find(function(u) {
        return u.usuario === usuario;
    });

    if (usuarioExistente) {
        alert('El usuario ya está registrado. Por favor, elija otro nombre de usuario.');
    } else if (contraValue !== contraConfirmValue) {
        alert('Las contraseñas no coinciden. Por favor, inténtelo de nuevo.');
    } else {
        // Almacenar en localStorage
        usuariosRegistrados.push({ usuario: usuario, contrasena: contraValue });
        localStorage.setItem('usuarios', JSON.stringify(usuariosRegistrados));
        alert('Registro exitoso. Usuario y contraseña almacenados en localStorage.');
        // Limpiar los campos de entrada
        document.querySelector('.usu').value = '';
        document.querySelector('.contra').value = '';
        document.querySelector('.contraconfirm').value = '';
    }
});

// VALIDACION EN LOGIN
document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('.submit').addEventListener('click', function(event) {
        event.preventDefault(); // Evitar que el formulario se envíe (recargar la página)

        var usuarioIngresado = document.querySelector('.usulogin').value;
        var contraIngresada = document.querySelector('.contralogin').value;

        // Obtener datos almacenados en localStorage
        var usuariosRegistrados = JSON.parse(localStorage.getItem('usuarios')) || [];

        // Buscar el usuario en la lista de usuariosRegistrados
        var usuarioRegistrado = usuariosRegistrados.find(function(u) {
            return u.usuario === usuarioIngresado;
        });

        // Verificar si el usuario y la contraseña coinciden
        if (usuarioRegistrado && contraIngresada === usuarioRegistrado.contrasena) {
            // Redirigir a la página de bienvenida
            window.location.href = 'bienvenido.html';
        } else {
            alert('Usuario o contraseña no coinciden. Por favor, inténtelo de nuevo.');
        }
    });
});
