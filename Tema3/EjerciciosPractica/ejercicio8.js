function buscarTr() {

    let parrafos = document.getElementsByClassName("titularNoticia");
    console.log(parrafos);

    let parrafosArray = Array.from(parrafos);
    console.log(parrafosArray);

    /* for(let i = 0; i<parrafosArray.length; i++) {
        let dato = elemento.textContent;
    } */

    parrafosArray.forEach(elemento => {
        let dato = elemento.textContent;
        if(!dato.includes("tr")) {
            alert(elemento.textContent);
        }
        
    })

    
}

function cambiarColor() {
    console.log(elemento)
}