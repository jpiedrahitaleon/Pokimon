function Loguear() {
    let username = document.getElementById('username').value
    let password = document.getElementById('clave').value

    if(username == 'Julian' && password == '123456'){
        alert('Usuario es valido')
    }else{
        alert('usuario es incorrecto')
    }  

}
