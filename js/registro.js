function registrar() {
let Nombre =document.getElementById("Nombre").value 
let Apellido = document.getElementById ("Apellido").value
let Correo_electronco = document.getElementById ("email").value
let Usuario = document.getElementById ("Usuario").value
let Contraseña = document.getElementById ("clave").value
let Verificar_contraseña = document.getElementById ("clave2").value
let array = [Nombre,Apellido,Correo_electronco,Usuario,Contraseña,Verificar_contraseña]

localStorage.setItem("user", JSON.stringify((array)));
alert("Usuario regustrado correctamente")

if (Contraseña !== Verificar_contraseña){
    alert("Su contraseña no es la misma en los dos recuadros ")

}

window.location.href = "../vistas.html/entrenador.html"
}