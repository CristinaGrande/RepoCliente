// Ejercicio 1
/* let num1 = prompt("Introduce un número");
if(num1 > 0){
    alert("el número es positivo");
} else if(num1 < 0) {
    alert("el número es negativo");
} else {
    alert("No es un número");
}  */

// Ejercicio 2

/* let euros;
let dolares;

euros = prompt("Introduzca cantidad:");

dolares = euros * 1.10;

alert("El equivalente en dolares es " + dolares); */

/* for (let i = 1; i < 101; i++) {
    let esPrimo = true;
    
    for(let j = i; j > 0; j--) {
        if((j != i && j != 1) && (i % j == 0)) {
            esPrimo = false;
            break;
        }
    }

    if(esPrimo) alert(i + " es primo"); */

// Ejercicio 3

/* let numUsuario = prompt("Introduce un número:");
let esPrimo = true;
 for(let i = numUsuario; i > 0; i--) {
    if((i != numUsuario && i != 1) && (numUsuario % i == 0)) {
        esPrimo = false;
        break;
    }
 }
 if(esPrimo) alert(i + " es primo"); */

 // Ejercicio 4

 function multiplicar(num1, num2) {

    let num1 = document.getElementById("num1");
    let num2 = document.getElementById("num2");
    let resultado = document.getElementById("resultado1");

    if((num1 < 0 || num2 < 0) || (num1 == NaN || num2 == NaN)) {
        alert("El valor introducido debe ser numérico y positivo.")
    } 
 }

