function registrar() {
let Nombre =document.getElementById("Nombre").value 
let Apellido = document.getElementById ("Apellido").value
let Correo_electronco = document.getElementById ("email").value
let Usuario = document.getElementById ("Usuario").value
let Contraseña = document.getElementById ("clave").value
let Verificar_contraseña = document.getElementById ("clave2").value

if (Contraseña == Verificar_contraseña){
    alert("registrado")
    let registro = [Nombre,Apellido,Correo_electronco,Usuario,Contraseña,Verificar_contraseña]
    console.log(registro)
}else{
    alert ("su contraseña es diferente al recuadro de verificar contraseña")
}
}