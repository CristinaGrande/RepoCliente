// Ejercicio 1

function pruebaArrays2() {
  let arrayNombres = [];
  let posicion = 0;
  let nombre = "";

  while (true) {
    posicion = Number(prompt("Introduce un número;"));
    if (isNaN(posicion)) {
      break;
    }
    nombre = prompt("Introduce un nombre:");

    if (confirm("¿Quiere almacenar el número introducido?")) {
      if (posicion >= 0) {
        arrayNombres[posicion] = nombre;
      } else {
        arrayNombres.push(nombre);
      }
      if (posicion < 0) {
        arrayNombres[posicion] = "";
      } else {
        arrayNombres.shift();
      }
    }
  }
  console.log(arrayNombres);
}

// EJERCICIO 2 TEMA ARRAYS

let arrayCostura = [
  "tela",
  "bies",
  "hilo",
  "tijeras",
  "máquina de coser",
  "botón",
];

console.log(arrayCostura);

arrayCostura.splice(1, 1); // Elimina el bies

console.log(arrayCostura);

arrayCostura.splice(2, 0, "hilo torzal"); // Añade esto entre hilo y tijeras

console.log(arrayCostura);

arrayCostura.splice(3, 1, "cúter rotatorio", "mesa de corte"); // Quitamos tijeras y lo sustituimos por esto

console.log(arrayCostura);

let arrayCosturaOriginal = [
  "tela",
  "bies",
  "hilo",
  "tijeras",
  "máquina de coser",
  "botón",
];

let arrayCostura2 = arrayCosturaOriginal.slice(0, 3);

console.log(arrayCostura2);

let arrayCostura3 = arrayCosturaOriginal.slice(3, 6);

console.log(arrayCostura3);

arrayCostura2.unshift("remalladora"); // Incluir en la primera posicion

console.log(arrayCostura2);

arrayCostura2.splice(3, 0, "cinta métrica"); // Incluir en la penúltima posición

console.log(arrayCostura2);

console.log("Contenido de los 3 arrays:");

console.log(arrayCosturaOriginal);
console.log(arrayCostura2);
console.log(arrayCostura3);

// EJERCICIO 3
// Ordena array por número de caracteres

let arrayCostura = [
  "tela",
  "bies",
  "hilo",
  "tijeras",
  "máquina de coser",
  "botón",
];

console.log(arrayCostura);

arrayCostura.splice(1, 1);

console.log(arrayCostura);

arrayCostura.splice(2, 0, "hilo torzal");

console.log(arrayCostura);

arrayCostura.sort(function (elemento1, elemento2) {
  if (elemento1.length > elemento2.length) {
    return -1;
  }
  if (elemento1.length < elemento2.length) {
    return 1;
  }

  return 0;
});

console.log(arrayCostura);

// EJERCICIO 4

// Separar valores e imprimir separado con -

function separarValores() {
  let arrayNumeros = [];
  let elemento;

  const cadena = prompt("Introduce los números separados por /");
  arrayNumeros = cadena.split("/").map(function (num) {
    return parseInt(num);
  });
  console.log(arrayNumeros);

  arrayNumeros.sort(function (elem1, elem2) {
    if (elem1 > elem2) {
      return 1;
    }
    if (elem1 < elem2) {
      return -1;
    }
    return 0;
  });
  console.log("Array ordenado de menor a mayor:");
  console.log(arrayNumeros);

  console.log(arrayNumeros.join("-"));
}

//Ejercicio 5
// Cubo de un número

// Forma habitual

function cubo(num) {
  return num * num * num;
}

// Forma anónima (se asigna una función sin nombre a una variable)

const cuboAnonima = function (num) {
  return num * num * num;
};

// Función flecha con retorno explícito

const cuboArrowExplicito = (num) => {
  return num * num * num;
};

//Función flecha con retorno implícito

const cuboArrowImplicito = (num) => num * num * num;

// Ejercicio 6, Punto 1:

function sacarAprobados() {
  let arrayNotas = [5, 8.7, 6, 4, 7, 3.5, 9.5, 8, 1, 10, 5.5, 6, 7, 6.5, 10];
  let aprobados = arrayNotas.filter(function (nota) {
    if (nota >= 5) {
      return true;
    } else {
      return false;
    }
  });
  console.log(aprobados);
}

sacarAprobados();

//Con función flecha

//let aprobados = arrayNotas.filter(nota => nota >= 5);

//Ejercicio 6, Punto 2:

let arrayNotas = [5, 8.7, 6, 4, 7, 3.5, 9.5, 8, 1, 10, 5, 6, 7, 6.5, 10];

let aprobados = arrayNotas.filter((nota) => nota >= 5);

console.log(aprobados);

let buscarNota1 = arrayNotas.findIndex((nota) => nota == 5.5);
let buscarNota2 = aprobados.findIndex((nota) => nota == 5.5);

console.log("Posición de la nota 5.5 en los arrays:");
//Si no encuentra 5.5, va a devolver la posición -1
console.log(buscarNota1);
console.log(buscarNota2);

//Ejercicio 6, Punto 3:

let comprobarAprobados = arrayNotas.every((nota) => nota >= 5);

console.log(comprobarAprobados); // Devuelve false, porque no todos están aprobados.

// Ejercicio 6, Punto 4

let arrayPalabras = [
  "coche",
  "octubre",
  "pista",
  "abrigo",
  "ayer",
  "noche",
  "cielo",
  "sol",
  "lluvia",
  "hermano",
  "café",
  "canción",
];

let numeroCaracteres = arrayPalabras.filter((palabra) => palabra.length < 6);

console.log(numeroCaracteres);

// Ejercicio 6, punto 5:

let ultimaLetra = arrayPalabras.find((palabra) => palabra.slice(-1) == "o");

console.log(ultimaLetra);

// Ejercicio 6, Punto 6

let arrayTelefonos = [
  "44231",
  "64212",
  "97543",
  "12345",
  "98433",
  "56475",
  "45675",
  "86478",
];

let terminacion = arrayTelefonos.find((numero) => numero.slice(-1) == "3");

console.log(terminacion);

//Ejercicio 7:

//Ejercicio 7, Punto 2.

function notaMedia() {
  let arrayNotas = [5, 8.7, 6, 4, 7, 3.5, 9.5, 8, 1, 10, 5, 6, 7, 6.5, 10];

  let sumaTotal = 0;
  for (let i = 0; i < arrayNotas.length; i++) {
    sumaTotal = sumaTotal + arrayNotas[i];
  }
  return sumaTotal / arrayNotas.length;
}

notaMedia();

// Con función flecha:

let suma = arrayNotas.reduce(
  (valorAnterior, valorActual) => valorAnterior + valorActual,
  0
);

let notaMedia = suma / arrayNotas.length;

console.log(notaMedia);

// Ejercicio 7, Punto 3

let mayor = arrayNotas[0];

for (var i = 0; i < arrayNotas.length; i++) {
  if (arrayNotas[i] > mayor) {
    mayor = arrayNotas[i];
  }
}
console.log(mayor);

// Con función flecha:

let notaMasAlta = arrayNotas.reduce((valorAnt, valorAct) => valor > valorAct);

console.log(notaMasAlta);

// Ejercicio 7, punto 4

let precios = [3.5, 4.27, 8.5, 3, 9.5];
let precioTotal = 0;

for (let i = 0; i < precios.length; i++) {
  precioTotal = precioTotal + precios[i];
}

console.log(precioTotal);

// Ejercicio 7, punto 5

for (let i = 0; i < precios.length; i++) {
  precioTotal = precioTotal + precios[i] * 1.1;
}

console.log(precioTotal.toFixed(2));

// Ejercicio 8

function buscarTr() {
  let parrafos = document.getElementsByClassName("titularNoticia");
  console.log(parrafos);

  let parrafosArray = Array.from(parrafos);
  console.log(parrafosArray);

  /* for(let i = 0; i<parrafosArray.length; i++) {
      let dato = elemento.textContent;
  } */

  parrafosArray.forEach((elemento) => {
    let dato = elemento.textContent;
    if (!dato.includes("tr")) {
      alert(elemento.textContent);
    }
  });
}

function cambiarColor() {
  console.log(elemento);
}

// ========================================================================================
// Documento Ejercicios Arrays

// Ejercicio 1

function pedirNumeros() {
  let arrayNumeros = [];
  let numero;
  do {
    numero = parseInt(prompt("Introduce un número:"));
    arrayNumeros.push(numero);
  } while (!isNaN(numero));

  arrayNumeros.pop(numero);

  arrayNumeros.sort(function (elem1, elem2) {
    if (elem1 > elem2) {
      return 1;
    }
    if (elem1 < elem2) {
      return -1;
    }
    return 0;
  });

  console.log(arrayNumeros);
}

// Ejercicio 2

function contarLetras() {
  let palabra1 = prompt("Introduce la primera palabra:");
  let palabra2 = prompt("Introduce la segunda palabra:");
  let diferenciaLongitudPalabra = Math.abs(palabra1.length - palabra2.length);

  if (palabra1.length > palabra2.length) {
    console.log(
      palabra1 +
        " tiene " +
        diferenciaLongitudPalabra +
        " letras más que " +
        palabra2
    );
  } else if (palabra2.length > palabra1.length) {
    console.log(
      palabra2 +
        " tiene " +
        diferenciaLongitudPalabra +
        " letras más que " +
        palabra1
    );
  } else {
    console.log("Las dos palabras tienen el mismo número de letras");
  }
}

// Ejercicio 3

function buscarIguales() {
  let arrayNumeros = [];

  let cadenaNumeros = prompt("Introduce tres números separados por &");

  arrayNumeros = cadenaNumeros.split("&").map((n) => parseInt(n));
  console.log(arrayNumeros);

  if (
    arrayNumeros[0] === arrayNumeros[1] &&
    arrayNumeros[0] === arrayNumeros[2] &&
    arrayNumeros[1] === arrayNumeros[2]
  ) {
    console.log("Todas las cifras son iguales");
  } else if (
    arrayNumeros[0] === arrayNumeros[1] ||
    arrayNumeros[0] === arrayNumeros[2] ||
    arrayNumeros[1] === arrayNumeros[2]
  ) {
    console.log("Hay dos cifras iguales");
  } else {
    let mayorNumero = Math.max(...arrayNumeros);

    alert("El número más grande es " + mayorNumero);
  }
}

// Ejercicio 4

function imprimirNumeros() {
  let miNumero = parseInt(prompt("Introduce un número:"));
  const cadenaPares = [];
  const cadenaImpares = [];

  for (let i = 0; i <= miNumero; i++) {
    if (i % 2 === 0) {
      cadenaPares.push(i);
    } else {
      cadenaImpares.push(i);
    }
  }
  console.log(cadenaPares);
  console.log(cadenaImpares);
}

imprimirNumeros();

// Ejercicio 5 Fibonacci

// Sin recursividad

function fibonacci() {
  let numero = parseInt(
    prompt("Introduce un número para la serie de Fibonacci:")
  );

  if (isNaN(numero) || numero < 0) {
    console.log("Por favor, introduce un número válido.");
    return;
  }

  let fibonacci = [0, 1];

  while (true) {
    let siguiente =
      fibonacci[fibonacci.length - 1] + fibonacci[fibonacci.length - 2];
    if (siguiente > numero) {
      break;
    }
    fibonacci.push(siguiente);
  }

  console.log("Serie de Fibonacci:", fibonacci.join(" "));
}

// Con recursividad
function fibonacci(n) {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

//Ejercicio 6

function crearArrayConSumas() {
  let arrayNumeros = [];
  let nuevoArray = [];

  let cadenaNumeros = prompt("Introduce cinco números separados por $");

  arrayNumeros = cadenaNumeros.split("$").map((n) => parseInt(n));

  for (let i = 0; i < arrayNumeros.length; i++) {
    if (i === arrayNumeros.length - 1) siguiente = 0;
    else siguiente = i + 1;
    let suma = arrayNumeros[i] + arrayNumeros[siguiente];
    nuevoArray.push(suma);
  }

  console.log(nuevoArray);
}

// Ejercicio 7

function procesarArrayDeArrays() {
  let arrayDeArrays = [
    [1, 2, 3],
    ["1", "2", "3", "4"],
    [true, false, false],
    ["uno", "dos", "tres"],
  ];

  let arrayPlano = [];

  for (let subArray of arrayDeArrays) {
    arrayPlano = arrayPlano.concat(subArray.map((c) => String(c)));
  }

  arrayPlano.sort((a, b) => a.length - b.length);

  console.log(arrayPlano);
}

procesarArrayDeArrays();

// Versión completa

function procesarNumeros() {
  // a. Pedir por pantalla números separados por el carácter $
  const entrada = prompt("Introduce números separados por '$':");

  // b. Crear un array de enteros a partir de la entrada
  const array1 = entrada.split("$").map(Number);

  // c. Crear el segundo array sumando elementos según la descripción
  const array2 = array1.map((num, index) => {
    const siguienteIndex = (index + 1) % array1.length; // Usar módulo para el último elemento
    return num + array1[siguienteIndex];
  });

  // d. Calcular la media del primer array y encontrar el número más alto del segundo
  const sumaArray1 = array1.reduce((acc, num) => acc + num, 0);
  const mediaArray1 = sumaArray1 / array1.length;
  const maxArray2 = Math.max(...array2);

  // Mostrar media y máximo por consola
  console.log(`Media del primer array: ${mediaArray1}`);
  console.log(`Número más alto del segundo array: ${maxArray2}`);

  // e. Concatenar ambos arrays, ordenarlos y mostrar el resultado
  const arrayConcatenado = array1.concat(array2);
  const arrayOrdenado = arrayConcatenado.sort((a, b) => a - b);
  const resultado = arrayOrdenado.join("*");

  // Mostrar el resultado
  console.log(`Resultado concatenado y ordenado: ${resultado}`);
}

//===============================================
// EJERCICIOS REPASO GENERAL

// Calcular IVA

function calcularPrecioFinal(precioArticulo, tipoIva) {
  let cantidadIva;
  let precioFinal;

  if (tipoIva === "G") {
    cantidadIva = 1.21;
    precioFinal = precioArticulo * cantidadIva;
    alert("El precio final es " + precioFinal);
  } else if (tipoIva === "R") {
    cantidadIva = 1.1;
    precioFinal = precioArticulo * cantidadIva;
    alert("El precio final es " + precioFinal);
  } else if (tipoIva === "S") {
    cantidadIva = 1.04;
    precioFinal = precioArticulo * cantidadIva;
    alert("El precio final es " + precioFinal);
  } else {
    console.error("Porcentaje no válido.");
  }
}

function pagar() {
  precio = parseInt(prompt("Introduce el precio del artículo:"));
  iva = prompt("Introduce el tipo de IVA (G, R, S)");

  calcularPrecioFinal(precio, iva);
}

// Sacar letra, líneas y columnas

function lineasColumnas() {
  let num1 = parseInt(prompt("Introduce un número"));
  let num2 = parseInt(prompt("Introduce el segundo número:"));
  let letra = prompt("letra");

  const arr = [];
  for (let j = 0; j < num2; j++) {
    arr.push(letra);
  }

  for (let i = 0; i < num1; i++) {
    console.log(arr.join(" "));
  }
}

// Elevar números

function elevarNumeros() {
  let num1 = parseInt(prompt("Introduce el primer número:"));
  let num2 = parseInt(prompt("Introduce el segundo número:"));

  let resultado = Math.pow(num1, num2);

  console.log(
    "El resultado de elevar " + num1 + " a " + num2 + " es " + resultado
  );
}

// Solicitar contraseña

function solicitarPass() {
  let usuario = prompt("Introduce el nombre de usuario");
  let password;
  while (true) {
    password = prompt("Introduce la contraseña:");
    if (password === "abcd") break;
  }
  alert("Usuario: " + usuario + " Contraseña: " + password);
}

// ==============================================================================

// Proyecto

const frutas = [
  "fresa",
  "kiwi",
  "mango",
  "manzana",
  "naranja",
  "pera",
  "pina",
  "platano",
  "sandia",
  "uva",
];

const precios = [3, 3.5, 2.8, 2.5, 1.8, 2.1, 2, 1.2, 0.9, 4.5];

const cesta = [];

let precioFrutaElegida;
let precioActual;
let totalKilos = 0;
let precioFinal = 0;
let precioMedio = 0;

function anadirKilos(nombreFruta) {
  // Buscamos la fruta en la cesta
  const frutaEnCesta = cesta.find((f) => f.nombre === nombreFruta);

  // Si no está, la incluímos y añadimos el primer kilo.
  if (!frutaEnCesta) {
    cesta.push({
      nombre: nombreFruta,
      cantidad: 1,
    });
    // Si está, sumamos un kilo más.
  } else {
    frutaEnCesta.cantidad++;
  }

  // Buscamos el índice en el que está la fruta.
  precioFrutaElegida = frutas.indexOf(nombreFruta);

  // Y lo hacemos coincidir con el mismo índice en el array de los precios.
  precioActual = precios[precioFrutaElegida];

  // Y vamos sumando cada precio hasta obtener el total de la compra.
  precioFinal = precioFinal + precioActual;

  // Borramos el contenido del div al pulsar en la fruta de nuevo
  document.getElementById("resumenCompra").innerHTML = "";
}

function mostrarCompraRealizada() {
  // Si la cesta está vacía, lanzamos un mensaje de error por consola.
  // Error hace que la función no pueda continuar.
  if (cesta.length < 1) throw Error("La cesta está vacía");

  // Recuperamos el div en el que vamos a imprimir el ticket de la compra.
  const ticket = document.getElementById("resumenCompra");

  // Ordenamos los elementos de cesta en orden alfabético inverso.
  cesta.sort(function (fruta1, fruta2) {
    if (fruta1.nombre < fruta2.nombre) {
      return 1;
    }
    if (fruta1.nombre > fruta2.nombre) {
      return -1;
    }
    return 0;
  });

  //IMPORTANTE: Declaramos esta cadena vacía donde iremos concatenando para lo que aparecerá
  // en el html.

  let resultado = "";

  // Recorremos la cesta y vamos concatenando con la etiqueta div y su contenido.
  for (let i in cesta) {
    let fruta = cesta[i];

    if (fruta.cantidad === 1) {
      resultado +=
        "<div>" + fruta.nombre + " ---- " + fruta.cantidad + " kilo</div>";
    } else {
      resultado +=
        "<div>" + fruta.nombre + " ---- " + fruta.cantidad + " kilos</div>";
    }
  }
  resultado += "<div>-----------------------</div>";
  resultado += "<div>" + "Precio Total: " + precioFinal.toFixed(2) + " €</div>";

  // Recorremos la cesta una vez más para el total de los kilos.
  for (let i in cesta) {
    totalKilos = totalKilos + cesta[i].cantidad;
  }

  // Calculamos el precio medio de nuestra compra y lo concatenamos en resultado.
  precioMedio = precioFinal / totalKilos;

  resultado +=
    "<div>" + "Precio medio: " + precioMedio.toFixed(2) + " €/kg</div>";

  // Hacemos innerHTML para mostrar el contenido de nuestro div.
  ticket.innerHTML = resultado;

  // Y llamamos a nuestro método que se ocupará de reiniciar el valor de las variables.
  reiniciarCompra();
}

function reiniciarCompra() {
  cesta.length = 0;
  precioFinal = 0;
  totalKilos = 0;
  precioMedio = 0;
}

//Métodos de arrays

/**
 Push - Incluye el elemento al final
 Pop - Elimina el último elemento
 Shift - Elimina el primer elemento
 unshift - Incluye el elemento al principio
 length - devuelve la longitud o incluye al final

 Slice - Crea un nuevo array con los elementos de otro (1er valor: posición desde la que comienza la 
  extracción. 2º valor: hasta donde se extrae (sin incluir dicho valor))

Splice - Modifica el contenido del array, agregando o quitando elementos. 
  Para insertar, indicamos: Posición donde se agregará, nº de elementos a eliminar y el elemento a insertar.

Sort - Ordena el array alfabéticamente (para cadenas)

toString - Devuelve una cadena separada por comas.
join - igual que toString, pero separa con lo que nosotros indiquemos.
split - igual que los otros dos, pero podemos indicar un carácter para que separe varios elementos que 
  introduzcamos de una sola vez.

concat - Concatena arrays (un array de arrys también serviría)
reverse - invierte el orden de los elementos

indexOf - Devuelve la 1ª posición de lo que le pasemos por parámetro 
  (o -1, en caso de que el elemento no esté en el array)

lastIndexOf - igual, pero devuelve la última posición del elemento.


filter - Devuelve un nuevo array con los elementos que cumplan la condición indicada.
find - Devuelve el 1er elemento que cumpla con la condición indicada.
findIndex - Devuelve el índice del 1er elemento que cumplca con la condición indicada.

every - Devuelve true si todos los elementos del array cunplen con la condición indicada.
some - Devuelve true si al menos un elemento del array cumple con la condición indicada.

map - Crea un nuevo array permitiendo modificar cada elemento del original, para meterlo
  en uno nuevo.

reduce - devuelve un único valor tras ejecutar una función que lo calcule a partir de los elementos
  del array. Ejemplo:

        let arrayPalabras = ["casa", "abedul", "coche", "rio", "alameda", "alegría", "portón"];

        let cadenaUnica = arrayPalabras.reduce((valorAnt, valorAct) => valorAnt + valorAct);
          Esto saca: casaabedulcocherioalamedaalegríaportón

        let cadenaUnica2 = arrayPalabras.reduce((valorAnt, valorAct) => valorAnt + valorAct, "Concatenados: ");
          Esto saca: Concatenados: casaabedulcocherioalamedaalegríaportón


forEach -  Se ejecuta por cada elemento del array, pudiéndose cambiar el contenido del mismo.

includes - Devuelve true si el array contiene el valor pasado como parámetro.
  Distingue mayúsculas y minúsculas.

from - Crea una nueva instancia de array a partir de otro objeto iterable (como colecciones) Ejemplo:

        let palabra = "Estetoscopio";
        let arrayNuevo = Array.from(palabra);

        Esto saca: "E", "s", "t"......
 */
