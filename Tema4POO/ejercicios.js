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

    console.log(palabraEnMayusculas);

   }

   buscarPalabra("PALABRA");