function Loguear() {
    let username = document.getElementById('username').value
    let password = document.getElementById('clave').value

    let user = JSON.parse(localStorage.getItem("user"))

    if (user == null) {
        alert('No has iniciado sesion')
        window.location.href = "../index.html"
    } else if (user[3] == Usuario && user[4] == Contraseña) {
        localStorage.setItem("user", Usuario);
        window.location.href = "../vistas/entrenador.html"
        alert('Usuario valido')
    }

}
