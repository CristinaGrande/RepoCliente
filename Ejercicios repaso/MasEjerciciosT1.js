// Ejercicio 1

// alert("¡Hola Mundo 2!");

//Ejercicio 2 y 3

function mostrarVariables() {
  let variable1 = 34;
  alert("Variable1: " + variable1);
  let variable2 = null;
  alert("Variable2: " + variable2);
  variable3 = 15.9;
  alert("Variable3 x Variable1  es: " + variable3 * variable1);
  variable3 = "Ahora soy un texto";
  alert("Variable3: " + variable3);
  alert(variable3 * 35);
}

// Ejercicio 4

function comprobarOperadores() {
  let var1 = "5";
  let var2 = "90";
  alert(var1 == var2); // false
  alert(var1 != var2); // true
  alert(var1 < var2); // true
  alert(var1 > var2); // true
  alert(var1 <= var2); // false
  alert(var1 >= var2); // true
  let var3 = 10;
  let var4 = "10";

  alert(var3 == var4); // true
  alert(var3 === var4); // false

  let var5 = 5;
  let var6 = 6;
  let var7 = 7;

  alert(var5 < var6); // true
  alert(var6 < var7); // true

  alert(var5 <= var6); // true
  alert(var6 > var7); // false

  var7 = !true;

  alert(var7); // sale false porque !true = false
}

// Ejercicio 5

function fecha() {
  let dia;
  let mes;
  let anyo;

  dia = prompt("Introduce el día:");
  mes = prompt("Introduce el mes:");
  anyo = prompt("Introduce el año:");

  console.log("Hoy es " + dia + " de " + mes + " de " + anyo + ".");
}

function cuentas() {
  let num1 = parseInt(prompt("Introduce el primer número:"));
  let num2 = parseInt(prompt("Introduce el segundo número:"));
  /* let resultado = num1 * num2;
  alert("El resultado de " + num1 + " x " + num2 + " es " + resultado); */

  //resultado = num1 / num2;

  /* if (num2 < 0) {
    alert("El segundo número no puede ser negativo");
  } else {
    alert(
      "El resultado de " + num1 + " dividido entre " + num2 + " es " + resultado
    );
  } */

  /* resultado = num1 - num2;

  alert("El resultado de " + num1 + " - " + num2 + " es " + resultado); */

  resultado = Math.pow(num1, 2) - Math.pow(num2, 2);

  /* alert(
    "El resultado de " +
      Math.pow(num1, 2) +
      " - " +
      Math.pow(num2, 2) +
      " es " +
      resultado
  ); */

  if (num1 > 0 && num2 > 0) {
  } else if (num1 > 0) alert(num1);
  else alert(num2);
}

// Ejercicio 6

function mostrarMeses() {
  let arrayMeses = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre",
  ];

  for (let i = 0; i < arrayMeses.length; i++) {
    console.log(arrayMeses[i]);
  }
}

function factorial(n) {
  if (n === 1) return 1;
  return n * factorial(n - 1);
}

function factorialNoRecursivo(n) {
  let res = n;
  for (let num = n - 1; num > 0; num--) {
    res = res * num;
  }
  return res;
}

factorialNoRecursivo(5);

function recomendarSeries() {
  let edad;
  do {
    edad = parseInt(prompt("Introduce tu edad"));

    if (edad < 7) {
      alert("Ver La Patrulla Canina");
    } else if (edad >= 7 && edad <= 13) {
      alert("Ver Alexa y Katie");
    } else if (edad >= 14 && edad <= 18) {
      alert("Ver Anne with an E");
    } else if ((edad >= 19) & (edad <= 35)) {
      alert("Ver Stranger Things");
    } else {
      alert("Ver Sherlock");
    }
  } while (edad < 45 && edad < 72);
}

// Ejercicio 7

function funcionIf(num) {
  let soyDeLaFuncion = 1;
  const soyConstante = 2;

  if(1) {
    let soyDeIf = 3;
    soyDeLaFuncion = 4;
  } else {
    soyConstante = 5;
  }

  console.log(soyDeLaFuncion, soyConstante, soyDeIf);
}

// Ejercicio 8

function introducirTexto() {
  let texto = prompt("Introduce un texto:");

  console.log("¡ " + texto + " !");
}

// Ejercicio 9

function mostrarImpares() {
  let esImpar = false;

  for (let i = 0; i <= 35; i++) {
    if (i % 2 !== 0) {
      esImpar = true;
      console.log(i);
    }
  }
}

// Ejercicio 10

function masOperaciones() {
  let num1 = parseInt(prompt("Introduce el primer número:"));
  let num2 = parseInt(prompt("Introduce el segundo número:"));

  let suma = num1 + num2;
  console.log(suma);
}
