//  Ejercicio 6

function mostrarMedia() {
    let arrayNotas = [];
        while(true) {
            let nota = parseFloat(prompt("Introduce una nota:"));
            arrayNotas.push(nota);
        if(isNaN(nota)) {
            break;
        }
        }
    
        console.log(arrayNotas);
    }
    
    mostrarMedia();