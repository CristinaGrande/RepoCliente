function sumar() {
  let num1 = parseInt(prompt("Introduce el primer número:"));
  let num2 = parseInt(prompt("Introduce el segundo número:"));

  let suma = num1 + num2;

  console.log(suma);
  let num3;
  try {
    num3 = parseInt(
      prompt("Introduce un número para sumar al resultado anterior:")
    );
  } catch (error) {
    console.error("Debes introducir un número entero.");
  }
}

function sumar() {
  let num1 = parseInt(prompt("Introduce el primer número:"));
  let num2 = parseInt(prompt("Introduce el segundo número:"));

  let suma = num1 + num2;

  console.log(suma);
  let num3;

  while (true) {
    num3 = parseInt(
      prompt("Introduce un número para sumar al resultado anterior:")
    );

    if (isNaN(num3)) {
      throw new Error("debes introducir un numero");
    }
    suma = suma + num3;
    console.log(suma);
  }
}

function llamarSumar() {
  try {
    sumar();
  } catch (e) {
    console.log("Se ha producido un error: " + e.message);
  }
}

// Ejercicio 12

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
