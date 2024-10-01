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

// EJERCICIO 2 TEMA ARRAYS

let arrayCostura = ["tela", "bies", "hilo", "tijeras", "máquina de coser", "botón"];

console.log(arrayCostura);

arrayCostura.splice(1, 1);

console.log(arrayCostura);

arrayCostura.splice(2,0, "hilo torzal");

console.log(arrayCostura);

arrayCostura.splice(3, 1, "cúter rotatorio", "mesa de corte");

console.log(arrayCostura);

let arrayCosturaOriginal = ["tela", "bies", "hilo", "tijeras", "máquina de coser", "botón"];

let arrayCostura2 = arrayCosturaOriginal.slice(0,3);

console.log(arrayCostura2);

let arrayCostura3 = arrayCosturaOriginal.slice(3,6);

console.log(arrayCostura3);

arrayCostura2.unshift("remalladora");

console.log(arrayCostura2);

arrayCostura2.splice(3, 0, "cinta métrica");

console.log(arrayCostura2);

console.log("Contenido de los 3 arrays:");

console.log(arrayCosturaOriginal);
console.log(arrayCostura2);
console.log(arrayCostura3);

// EJERCICIO 3

let arrayCostura = ["tela", "bies", "hilo", "tijeras", "máquina de coser", "botón"];

console.log(arrayCostura);

arrayCostura.splice(1, 1);

console.log(arrayCostura);

arrayCostura.splice(2,0, "hilo torzal");

console.log(arrayCostura);

arrayCostura.sort(function (elemento1, elemento2) {
  
  if(elemento1.length > elemento2.length) {
    return -1;
  }
  if(elemento1.length < elemento2.length) {
    return 1;
  }
  
  return 0;
  
})

console.log(arrayCostura);


// EJERCICIO 4

function separarValores() {
  
  let arrayNumeros = [];
  let elemento;
  
  while(true) {
    
    elemento = Number(prompt("Introduce un valor para el array:"));
    
    if((elemento === null) || (elemento === "") || (isNaN(elemento))) {
      break;
    }
    arrayNumeros.push(elemento);
  }
console.log(arrayNumeros);

arrayNumeros.sort(function(elem1, elem2) {
  
  if(elem1 > elem2) {
    return 1;
  }
  if(elem1 < elem2) {
    return -1;
  }
  return 0;
});
console.log("Array ordenado de menor a mayor:")
console.log(arrayNumeros);
  
console.log(arrayNumeros.join("-"));

        
}

// EJERCICIO 6

let arrayNotas = [5,8,6,4,7,3,9,8,1,10,5,6,7,6,10];

let aprobados = arrayNotas.filter(function (nota) {
  if(nota[0] >= 5) {
    return true;
  } else {
    return false;
  }
})

//let aprobados = arrayNotas.filter(nota => nota[0] >= 5);

function sacarAprobados() {
  let arrayNotas = [5,8,6,4,7,3,9,8,1,10,5,6,7,6,10];

let aprobados = arrayNotas.filter(function (nota) {
  if(nota[0] >= 5) {
    return true;
  } else {
    return false;
  }
})
console.log(aprobados);
}

sacarAprobados();
// ========================================================================================
// Documento Ejercicios Arrays

// Ejercicio 1

function pedirNumeros() {
  
  let arrayNumeros = [];
  let numero;
  do{
    numero = parseInt(prompt("Introduce un número:"));
    arrayNumeros.push(numero);
  } while(numero !== 0);
  
  arrayNumeros.sort();
  console.log(arrayNumeros);
  
}

pedirNumeros();

