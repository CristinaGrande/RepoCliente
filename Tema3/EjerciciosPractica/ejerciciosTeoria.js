// Ejercicio 1


function pruebaArrays1() {
    let arrayPrueba = [];
    let numero;
    let nombre;
    let confirmacion;
    
    numero = parseInt(prompt("Introduce un número:"));
    nombre = prompt("Introduce un nombre");
    
   confirmacion = confirm("¿Quieres añadir este valor al array?");
    
    if((confirmacion === true) && (numero >= 0)) {
      arrayPrueba.unshift(nombre);
    } else if ((confirmacion === true) && (numero < 0)) {
      arrayPrueba.push(nombre);
    } else if((confirmacion === false) && (numero >= 0)) {
      arrayPrueba.pop();
    } else if((confirmacion === false) && (numero < 0)); {
      arrayPrueba.shift();
    }
  }
  
  pruebaArrays1();

  // Corrección Ejercicio 1

  function pruebaArrays2() {
  
    let arrayNombres = [];
   let posicion = 0;
   let nombre = "";

while(true) {
 posicion = Number(prompt("Introduce un número;"));
 if(isNaN(posicion)) {
    break;
 }
 nombre = prompt("Introduce un nombre:");
 
 if(confirm("¿Quiere almacenar el número introducido?")) {
   if(posicion >= 0) {
     arrayNombres[posicion] = nombre;
   } else {
     arrayNombres.push(nombre);
   } else {
     if(posicion < 0) {
     arrayNombres[posicion] = "";
   } else {
     arrayNombres.shift();
   }
   }
 }
}

console.log(arrayNombres);
}

pruebaArrays2();