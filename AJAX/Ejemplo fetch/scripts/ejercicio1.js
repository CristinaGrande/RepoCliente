function recuperarDatos() {
fetch("https://jsonplaceholder.typicode.com/users/1") //devuelve una promesa
.then(response => response.json()) //El método json() devuelve otra promesa
.then(datosUsuario => console.log(datosUsuario)) //then() de la segunda promesa
.catch(error => console.error(error))
}