// Variables

let apuesta = 0;
let apuesta1 = 0;
let fondo1 = 0;
let Opcion1 = 0;
let Valor = 0;
let Valor1 = 0;
let resultado = 0;
let numeros = [];
let fichas = [];
const arrays = "./ajax.json"

// Variables DOM

const titulo = document.getElementById('titulo');
const datos = document.getElementById('datos');
const agregarDinero = document.getElementsByClassName(`agregarDinero`)[0];
const dinero = document.getElementById(`dinero`)
const fichaAmarilla = document.getElementsByClassName('fAmarillo')[0];
const fichaRoja = document.getElementsByClassName('fRojo')[0];
const fichaBlanca = document.getElementsByClassName('fBlanco')[0];
const fichaNegra = document.getElementsByClassName('fNegro')[0];
const botonGirar = document.getElementById(`girar`);
const Pares = document.getElementsByClassName('par')[0];
const Impares = document.getElementsByClassName('impar')[0];
const numeroCero = document.getElementsByClassName('numero0')[0];
const Negros = document.getElementsByClassName('negro')[0];
const Rojos = document.getElementsByClassName(`rojo`)[0];
const ruletaFondo = document.querySelector(`.imgRuleta`);
const ruleta = document.getElementsByClassName(`img`)[0];
let subtitulo = document.createElement("h2");

// Storage

let nombreUsuario = localStorage.getItem('nombreUsuario');
let apellidoUsuario = localStorage.getItem('apellidoUsuario');

// Fetch 

const obtenerNumeros = async () => {

    try {

        const respuesta = await fetch(arrays);
        const resultado = await respuesta.json();
        numeros = resultado.Numeros;
        fichas = resultado.Fichas;
        console.log(numeros)
        console.log(fichas)

    } catch {
        alert("error")
    }
}

// Funciones

const Apuesta = () => {
    if (apuesta > saldo) {
        Swal.fire({
            icon: 'error',
            color: `rgb(250, 235, 215)`,
            background: 'rgba(97, 97, 97, 0.973)',
            title: '¡ No tienes tanto dinero !',
            position: 'top-end',
            showConfirmButton: false,
            toast: true,
            timer: 2500,
        })
        fichaClick.style.opacity = ".6";
        apuesta = 0;
    } else {
        Swal.fire({
            icon: 'success',
            color: `rgb(250, 235, 215)`,
            background: 'rgba(97, 97, 97, 0.973)',
            title: `Estas apostando $${apuesta}`,
            position: 'top-end',
            showConfirmButton: false,
            toast: true,
            timer: 2500,
        })
    }
}

const ganar = () => {
    Swal.fire({
        title: `La ruleta salio ${resultado} 
                🤑 ¡Ganaste! 🤑`,
        color: `rgb(250, 235, 215)`,
        background: ' rgba(13, 105, 13)',
        showConfirmButton: false,
        timer: 2000,
    })
    saldo = Number(saldo) + apuesta;
}

const perder = () => {
    Swal.fire({
        title: `La ruleta salio ${resultado} 
                😢 Gana la Casa 😢`,
        color: `rgb(250, 235, 215)`,
        background: ' rgba(13, 105, 13)',
        showConfirmButton: false,
        timer: 2000,
    })
    saldo = saldo - apuesta;
}

const sinDinero = () => {
    Swal.fire({
        title: '😢 Ganó la Casa 😢',
        text: '👎 Te quedaste sin dinero 👎',
        confirmButtonText: `<a href="index.html">Reiniciar</a>`,
        color: `rgb(250, 235, 215)`,
        background: ' rgba(13, 105, 13)',
    })
    fichaRoja.style.visibility = "hidden";
    fichaAmarilla.style.visibility = "hidden";
    fichaBlanca.style.visibility = "hidden";
    fichaNegra.style.visibility = "hidden";
    botonGirar.style.visibility = "hidden";
}

const ResultadoPleno = () => {

    Opcion1 === resultado ? ganar() : perder();

    fondo1.innerHTML = ` Tu saldo es $ ${saldo} `;
    datos.append(fondo1);

    saldo <= 0 ? sinDinero() : "";

}

const Resultado = () => {

    const resultadoFinal = Valor.some(Valor => Valor === resultado);

    resultadoFinal === true ? ganar() : perder();

    fondo1.innerHTML = ` Tu saldo es $ ${saldo} `;
    datos.append(fondo1);

    saldo <= 0 ? sinDinero() : "";
}

const Girar = () => {
    if (Valor != ``) {

        resultado = Math.round(Math.random() * 36);
        Resultado();
        reiniciarApuesta();

    } else if (Opcion1 != 0) {

        resultado = Math.round(Math.random() * 36);
        ResultadoPleno();
        reiniciarApuesta();

    } else {
        Swal.fire({
            icon: 'error',
            color: `rgb(250, 235, 215)`,
            background: 'rgba(97, 97, 97, 0.973)',
            title: '¡ Olvidaste tu apuesta !',
            position: 'top-end',
            showConfirmButton: false,
            toast: true,
            timer: 2500,
        })
    }
}

const respuestaAgregarDinero = () => {
    saldo = dinero.value
    if (saldo != 0) {
        dinero.style.display = 'none';
        agregarDinero.style.display = 'none';
        fondo1 = document.createElement("h2");
        fondo1.innerHTML = ` Tu saldo es $ ${saldo} `;
        datos.append(fondo1);
    }
    fichaRoja.style.visibility = "visible";
    fichaAmarilla.style.visibility = "visible";
    fichaBlanca.style.visibility = "visible";
    fichaNegra.style.visibility = "visible";
    obtenerNumeros();
}

const marcarFicha = () => {
    fichaRoja.style.opacity = ".6";
    fichaAmarilla.style.opacity = ".6";
    fichaBlanca.style.opacity = ".6";
    fichaNegra.style.opacity = ".6";
    fichaClick.style.opacity = "2";
}

const respuestaClickGrupos = () => {
    Valor = click1;
    Valor1 = numeros.find(numero => numero.id === Valor);
    Valor = Valor1.valores;
    marcarBorde();
}

Pares.addEventListener(`click`, () => {
    click = Pares;
    click1 = `Pares`;
    respuestaClickGrupos();
});

// Eventos

Pares.addEventListener(`click`, () => {
    click = Pares;
    click1 = `Pares`;
    respuestaClickGrupos();
});

Impares.addEventListener(`click`, () => {
    click = Impares;
    click1 = `Impares`;
    respuestaClickGrupos();
});

numeroCero.addEventListener(`click`, () => {
    click = numeroCero;
    click1 = `cero`;
    respuestaClickGrupos();
});

Rojos.addEventListener(`click`, () => {
    click = Rojos;
    click1 = `Rojos`;
    respuestaClickGrupos();
});

Negros.addEventListener(`click`, () => {
    click = Negros;
    click1 = `Negros`;
    respuestaClickGrupos();
});

fichaAmarilla.addEventListener(`click`, () => {
    apuesta = `Amarillo`;
    apuesta1 = fichas.find(ficha => ficha.color === apuesta);
    apuesta = apuesta1.valor;
    fichaClick = fichaAmarilla;
    marcarFicha();
    Apuesta();
});

fichaRoja.addEventListener(`click`, () => {
    apuesta = `Rojo`;
    apuesta1 = fichas.find(ficha => ficha.color === apuesta);
    apuesta = apuesta1.valor;
    fichaClick = fichaRoja;
    marcarFicha();
    Apuesta();
});

fichaBlanca.addEventListener(`click`, () => {
    apuesta = `Blanco`;
    apuesta1 = fichas.find(ficha => ficha.color === apuesta);
    apuesta = apuesta1.valor;
    fichaClick = fichaBlanca;
    marcarFicha();
    Apuesta();
});

fichaNegra.addEventListener(`click`, () => {
    apuesta = `Negro`;
    apuesta1 = fichas.find(ficha => ficha.color === apuesta);
    apuesta = apuesta1.valor;
    fichaClick = fichaNegra;
    marcarFicha();
    Apuesta();
});

agregarDinero.addEventListener(`click`, respuestaAgregarDinero);

botonGirar.addEventListener(`click`, () => {

    grados = Math.floor(2000 + Math.random() * 2000);
    ruletaFondo.style.visibility = `visible`;
    ruleta.style.visibility = `visible`;
    ruleta.style.transition = `all 5s`;
    ruleta.style.transform = `rotate(${grados}deg)`;

    setTimeout(() => {
        ruletaFondo.style.transition = `none`;
        ruleta.style.transition = `none`;
        ruletaFondo.style.visibility = `hidden`;
        ruleta.style.visibility = `hidden`;
        const gradosTotal = grados % 360;
        ruleta.style.transform = `rotate(${gradosTotal}deg)`;
        Girar();
        reiniciarApuesta();
    }, 5500);
});

// ruleta.addEventListener(`transitionend`, () => {

//     ruletaFondo.style.transition = `none`;
//     ruleta.style.transition = `none`;
//     ruletaFondo.style.visibility = `hidden`;
//     ruleta.style.visibility = `hidden`;
//     const gradosTotal = grados % 360;
//     ruleta.style.transform = `rotate(${gradosTotal}deg)`;
//     Girar();
// })

if (apellidoUsuario != `` && nombreUsuario != ``) {
    Swal.fire({
        title: `Bienvenid@ ${nombreUsuario} ${apellidoUsuario}`,
        text: '¿ Listos para apostar ?',
        color: `rgb(250, 235, 215)`,
        background: ' rgba(13, 105, 13)',
    })
}
