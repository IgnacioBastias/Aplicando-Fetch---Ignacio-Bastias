const reiniciarApuesta = () => {
    Valor = ``;
    Opcion1 = 0;
    click.style.border = `solid rgba(250, 235, 215, 0.849)`;
}

const marcarBorde = () => {
    boton1.style.border = `solid rgba(250, 235, 215, 0.849)`;
    boton2.style.border = `solid rgba(250, 235, 215, 0.849)`;
    boton3.style.border = `solid rgba(250, 235, 215, 0.849)`;
    boton4.style.border = `solid rgba(250, 235, 215, 0.849)`;
    boton5.style.border = `solid rgba(250, 235, 215, 0.849)`;
    boton6.style.border = `solid rgba(250, 235, 215, 0.849)`;
    boton7.style.border = `solid rgba(250, 235, 215, 0.849)`;
    boton8.style.border = `solid rgba(250, 235, 215, 0.849)`;
    boton9.style.border = `solid rgba(250, 235, 215, 0.849)`;
    boton10.style.border = `solid rgba(250, 235, 215, 0.849)`;

    boton11.style.border = `solid rgba(250, 235, 215, 0.849)`;
    boton12.style.border = `solid rgba(250, 235, 215, 0.849)`;
    boton13.style.border = `solid rgba(250, 235, 215, 0.849)`;
    boton14.style.border = `solid rgba(250, 235, 215, 0.849)`;
    boton15.style.border = `solid rgba(250, 235, 215, 0.849)`;
    boton16.style.border = `solid rgba(250, 235, 215, 0.849)`;
    boton17.style.border = `solid rgba(250, 235, 215, 0.849)`;
    boton18.style.border = `solid rgba(250, 235, 215, 0.849)`;
    boton19.style.border = `solid rgba(250, 235, 215, 0.849)`;
    boton20.style.border = `solid rgba(250, 235, 215, 0.849)`;

    boton21.style.border = `solid rgba(250, 235, 215, 0.849)`;
    boton22.style.border = `solid rgba(250, 235, 215, 0.849)`;
    boton23.style.border = `solid rgba(250, 235, 215, 0.849)`;
    boton24.style.border = `solid rgba(250, 235, 215, 0.849)`;
    boton25.style.border = `solid rgba(250, 235, 215, 0.849)`;
    boton26.style.border = `solid rgba(250, 235, 215, 0.849)`;
    boton27.style.border = `solid rgba(250, 235, 215, 0.849)`;
    boton28.style.border = `solid rgba(250, 235, 215, 0.849)`;
    boton29.style.border = `solid rgba(250, 235, 215, 0.849)`;
    boton30.style.border = `solid rgba(250, 235, 215, 0.849)`;

    boton31.style.border = `solid rgba(250, 235, 215, 0.849)`;
    boton32.style.border = `solid rgba(250, 235, 215, 0.849)`;
    boton33.style.border = `solid rgba(250, 235, 215, 0.849)`;
    boton34.style.border = `solid rgba(250, 235, 215, 0.849)`;
    boton35.style.border = `solid rgba(250, 235, 215, 0.849)`;
    boton36.style.border = `solid rgba(250, 235, 215, 0.849)`;

    Pares.style.border = `solid rgba(250, 235, 215, 0.849)`;
    Impares.style.border = `solid rgba(250, 235, 215, 0.849)`;
    Rojos.style.border = `solid rgba(250, 235, 215, 0.849)`;
    Negros.style.border = `solid rgba(250, 235, 215, 0.849)`;
    numeroCero.style.border = `solid rgba(250, 235, 215, 0.849)`;
    click.style.border = `solid blue`;
}

//variables DOM-tablero

const boton1 = document.getElementsByClassName(`numero1`)[0];
const boton2 = document.getElementsByClassName(`numero2`)[0];
const boton3 = document.getElementsByClassName(`numero3`)[0];
const boton4 = document.getElementsByClassName(`numero4`)[0];
const boton5 = document.getElementsByClassName(`numero5`)[0];
const boton6 = document.getElementsByClassName(`numero6`)[0];
const boton7 = document.getElementsByClassName(`numero7`)[0];
const boton8 = document.getElementsByClassName(`numero8`)[0];
const boton9 = document.getElementsByClassName(`numero9`)[0];
const boton10 = document.getElementsByClassName(`numero10`)[0];
const boton11 = document.getElementsByClassName(`numero11`)[0];
const boton12 = document.getElementsByClassName(`numero12`)[0];
const boton13 = document.getElementsByClassName(`numero13`)[0];
const boton14 = document.getElementsByClassName(`numero14`)[0];
const boton15 = document.getElementsByClassName(`numero15`)[0];
const boton16 = document.getElementsByClassName(`numero16`)[0];
const boton17 = document.getElementsByClassName(`numero17`)[0];
const boton18 = document.getElementsByClassName(`numero18`)[0];
const boton19 = document.getElementsByClassName(`numero19`)[0];
const boton20 = document.getElementsByClassName(`numero20`)[0];
const boton21 = document.getElementsByClassName(`numero21`)[0];
const boton22 = document.getElementsByClassName(`numero22`)[0];
const boton23 = document.getElementsByClassName(`numero23`)[0];
const boton24 = document.getElementsByClassName(`numero24`)[0];
const boton25 = document.getElementsByClassName(`numero25`)[0];
const boton26 = document.getElementsByClassName(`numero26`)[0];
const boton27 = document.getElementsByClassName(`numero27`)[0];
const boton28 = document.getElementsByClassName(`numero28`)[0];
const boton29 = document.getElementsByClassName(`numero29`)[0];
const boton30 = document.getElementsByClassName(`numero30`)[0];
const boton31 = document.getElementsByClassName(`numero31`)[0];
const boton32 = document.getElementsByClassName(`numero32`)[0];
const boton33 = document.getElementsByClassName(`numero33`)[0];
const boton34 = document.getElementsByClassName(`numero34`)[0];
const boton35 = document.getElementsByClassName(`numero35`)[0];
const boton36 = document.getElementsByClassName(`numero36`)[0];

//Eventos Tablero

boton1.addEventListener(`click`, () => { Opcion1 = 1; click = boton1, marcarBorde()});
boton2.addEventListener(`click`, () => { Opcion1 = 2; click = boton2, marcarBorde()});
boton3.addEventListener(`click`, () => { Opcion1 = 3; click = boton3, marcarBorde()});
boton4.addEventListener(`click`, () => { Opcion1 = 4; click = boton4, marcarBorde()});
boton5.addEventListener(`click`, () => { Opcion1 = 5; click = boton5, marcarBorde()});
boton6.addEventListener(`click`, () => { Opcion1 = 6; click = boton6, marcarBorde()});
boton7.addEventListener(`click`, () => { Opcion1 = 7; click = boton7, marcarBorde()});
boton8.addEventListener(`click`, () => { Opcion1 = 8; click = boton8, marcarBorde()});
boton9.addEventListener(`click`, () => { Opcion1 = 9; click = boton9, marcarBorde()});
boton10.addEventListener(`click`, () => { Opcion1 = 10; click = boton10, marcarBorde()});

boton11.addEventListener(`click`, () => { Opcion1 = 11; click = boton11, marcarBorde()});
boton12.addEventListener(`click`, () => { Opcion1 = 12; click = boton12, marcarBorde()});
boton13.addEventListener(`click`, () => { Opcion1 = 13; click = boton13, marcarBorde()});
boton14.addEventListener(`click`, () => { Opcion1 = 14; click = boton14, marcarBorde()});
boton15.addEventListener(`click`, () => { Opcion1 = 15; click = boton15, marcarBorde()});
boton16.addEventListener(`click`, () => { Opcion1 = 16; click = boton16, marcarBorde()});
boton17.addEventListener(`click`, () => { Opcion1 = 17; click = boton17, marcarBorde()});
boton18.addEventListener(`click`, () => { Opcion1 = 18; click = boton18, marcarBorde()});
boton19.addEventListener(`click`, () => { Opcion1 = 19; click = boton19, marcarBorde()});
boton20.addEventListener(`click`, () => { Opcion1 = 20; click = boton20, marcarBorde()});

boton21.addEventListener(`click`, () => { Opcion1 = 21; click = boton21, marcarBorde()});
boton22.addEventListener(`click`, () => { Opcion1 = 22; click = boton22, marcarBorde()});
boton23.addEventListener(`click`, () => { Opcion1 = 23; click = boton23, marcarBorde()});
boton24.addEventListener(`click`, () => { Opcion1 = 24; click = boton24, marcarBorde()});
boton25.addEventListener(`click`, () => { Opcion1 = 25; click = boton25, marcarBorde()});
boton26.addEventListener(`click`, () => { Opcion1 = 26; click = boton26, marcarBorde()});
boton27.addEventListener(`click`, () => { Opcion1 = 27; click = boton27, marcarBorde()});
boton28.addEventListener(`click`, () => { Opcion1 = 28; click = boton28, marcarBorde()});
boton29.addEventListener(`click`, () => { Opcion1 = 29; click = boton29, marcarBorde()});
boton30.addEventListener(`click`, () => { Opcion1 = 30; click = boton30, marcarBorde()});

boton31.addEventListener(`click`, () => { Opcion1 = 31; click = boton31, marcarBorde()});
boton32.addEventListener(`click`, () => { Opcion1 = 32; click = boton32, marcarBorde()});
boton33.addEventListener(`click`, () => { Opcion1 = 33; click = boton33, marcarBorde()});
boton34.addEventListener(`click`, () => { Opcion1 = 34; click = boton34, marcarBorde()});
boton35.addEventListener(`click`, () => { Opcion1 = 35; click = boton35, marcarBorde()});
boton36.addEventListener(`click`, () => { Opcion1 = 36; click = boton36, marcarBorde()});