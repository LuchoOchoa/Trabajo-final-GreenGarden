
const login = () => {
    
    let user = document.getElementById('user').value;
    let password = document.getElementById('password').value;

    let form = document.getElementById('formlogin');
    console.log(user)
    console.log(password)

    let usuario = 'pepe@gmail.com';
    let pass = '123456';
    
    if(user == usuario && password == pass){
        location.href = '../pages/altaproductos.html';
        alert('Bienvenido Admin')
    }else{

        alert('Error de Inicio de Sesion. Vuelva a ingresar sus datos')
    }


    form.reset();
};