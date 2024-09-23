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
    
  do {
    num3 = parseInt(prompt("Introduce un número para sumar al resultado anterior:"));

    if(isNaN(num3)) {
        console.log("Debes introducir un número.");
    } else{
        nuevoResultado = suma + num3;
        console.log(nuevoResultado);
      	num3 = "";
    }
} while(!isNaN(num3));
  } 

  function errorNumero(mensaje) {
    let mensaje = console.error("Debes introducir un número.");
  }

  




