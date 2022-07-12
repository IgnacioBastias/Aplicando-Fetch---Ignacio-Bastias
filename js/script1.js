
const nombre = document.getElementById('nombre');
const apellido = document.getElementById('apellido');
let botonStart = document.getElementById(`start`);


const respuestaClickStart = () => {
    nombreUsuario = nombre.value;
    apellidoUsuario = apellido.value;

    localStorage.setItem('nombreUsuario', nombre.value);
    localStorage.setItem('apellidoUsuario', apellido.value);

}

botonStart.addEventListener(`click`, respuestaClickStart);


