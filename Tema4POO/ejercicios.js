//  Ejercicio 6, punto 1 (Corregir)
// Pedir las notas de una sola vez
function mostrarMedia() {
    let arrayNotas = [];
        while(true) {
            let nota = parseFloat(prompt("Introduce una nota:"));
            arrayNotas.push(nota);
        if(isNaN(nota)) {
          arrayNotas.pop(nota);
            break;
        }
        }
    
        console.log(arrayNotas);
    }
    
    mostrarMedia();

// Ejercicio 6, punto 2

function calcularCuboNumero(numero) {
    let resultado;
        if((numero % 1 !== 0)) {
            alert("El número introducido no es entero.")
        } else {
           resultado = Math.pow(numero, 3);
        }
    
        console.log("El resultado es " + resultado);
    }
    
    calcularCuboNumero(3.4);

    // Ejercicio 6, punto 3

    function comprobarDNI(dni) {

        let cadena = 'TRWAGMYFPDXBNJZSQVHLCK';
        
        let letra = dni.charAt(0);
        let parteNumerica = parseInt(dni);
        
        let posLetra = parteNumerica % 23;
        
        console.log(cadena[posLetra]);
        return cadena[posLetra] === letra;
        
      
      
      }
      
      comprobarDNI("45674352");

   // Ejercicio 6, punto 4
   
   function buscarPalabra(cadena) {

    palabraEnMayusculas = cadena.toLocaleLowerCase();
    let palabraNueva;

    console.log(palabraEnMayusculas);

    for(let i = 0; i < palabraEnMayusculas.length; i++) {
        if(palabraEnMayusculas[i] % 2 == 0) {
            palabraNueva.push(palabraEnMayusculas[i]);
        }
    }

    console.log(palabraNueva);

   }

   buscarPalabra("PALABRA");

   //Ejercicio 7, punto 1

   function numeroAleatorio() {

    let numeroRandom = Math.round(Math.random() * 10);

    console.log(numeroRandom);

    sacar3NumerosAleatorios();
   }

numeroAleatorio();

function sacar3NumerosAleatorios() {
  
    let arrayNumerosAleatorios = [];
  
      let numero1 = Math.random() * 101;
      let numero2 = Math.random() * 101;
      let numero3 = Math.random() * 101;
  
      console.log(numero1);
      console.log(numero2);
      console.log(numero3);
  
      let numeroMayor = Math.max(numero1, numero2, numero3);
  
      console.log("El mayor número es " + numeroMayor);
  
      Math.round(numero1, numero2, numero3);
  
      console.log(numero1);
      console.log(numero2);
      console.log(numero3);
    
    let numero1Round = Math.round(numero1);
    let numero2Round = Math.round(numero2);
    let numero3Round = Math.round(numero3);
    
    arrayNumerosAleatorios.push(numero1Round, numero2Round, numero3Round);
    
    console.log(arrayNumerosAleatorios);

   let opcion = alert("¿Desea redondear las notas hacia arriba? (S/N)");

    if(opcion == true) {
        Math.ceil(arrayNumerosAleatorios);
    } else {
        Math.floor(arrayNumerosAleatorios);
    }
    
  }
  
  sacar3NumerosAleatorios();

// Ejercicio 7, punto 2



