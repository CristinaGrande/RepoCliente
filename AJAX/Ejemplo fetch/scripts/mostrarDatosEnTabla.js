function buscarUsuarios() {

    fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(datosUsuarios => mostrarDatos(datosUsuarios))
    .catch()
}


function mostrarDatos(infoUsers) {
    let tbody = document.getElementsByTagName("tbody")[0];
    tbody.innerHTML = "";
    infoUsers.forEach((user) => {
      const newUser = document.createElement("tr");
      newUser.innerHTML = `
                  <td>${user.name}</td>
                  <td>${user.email}</td>`;
      tbody.appendChild(newUser);
    });
  }
