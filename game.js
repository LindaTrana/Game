//SELECCION DE BOTONES
let btnTijeras = document.getElementById('tijeras');
let btnPiedra = document.getElementById('piedra');
let btnPapel = document.getElementById('papel');
//VARIABLES DE VICTORIA
let eleccionMaquina = document.getElementById('eleccionMaquina');
let eleccionUsuario = document.getElementById('eleccionUsuario');
let contadorMaquina = document.getElementById('cantMaquina')
let contadorUsuario = document.getElementById('cantUsuario')
let resultado = document.getElementById('resultado');
let ganador = '';
let resultadoMaquina = '';
let resultadoUsuario = '';
let victoriaMaquina = 0;
let victoriaUsuario= 0;
//INICIALIZACIONES DE OPCIONES DEL JUEGO
let tijeras = 'tijeras';
let piedra = 'piedra';
let papel = 'papel';
let usuario = '';
let maquina= '';

let randomMaquina

//EVENTOS ESCUCHA DE SELECCION DE USUARIO
btnTijeras.addEventListener('click', ()=>{
    randomMaquina = Math.floor(Math.random() * (4-1)+1)
    usuario=tijeras;

    choiceMachine();
    choiceUser();

    console.log(`Maquina: ${maquina}`)
    console.log(`Usuario: ${usuario}`)
})

btnPiedra.addEventListener('click', ()=>{
    randomMaquina = Math.floor(Math.random() * (4-1)+1)
    usuario=piedra;

    choiceMachine();
    choiceUser();
    console.log(`Maquina: ${maquina}`)
    console.log(`Usuario: ${usuario}`)
})

btnPapel.addEventListener('click', ()=>{
    randomMaquina = Math.floor(Math.random() * (4-1)+1)
    usuario=papel;

    choiceMachine();
    choiceUser();

    console.log(`Maquina: ${maquina}`)
    console.log(`Usuario: ${usuario}`)
})

function choiceMachine(){
    if (randomMaquina === 1){
        maquina = 'piedra'
    }else if(randomMaquina === 2){
        maquina = 'papel'
    }else if(randomMaquina === 3){
        maquina = 'tijeras'
    }
}

function choiceUser(){

    if (maquina === usuario ) {
        console.log('Empate')
    }else if(maquina === 'tijeras' && usuario === 'piedra'){
        console.log('GANASTE, piedra gana a tijera')
    }else if(maquina === 'piedra' && usuario === 'tijeras'){
        console.log('PERDISTE, piedra gana a tijera')
    }else if(maquina === 'papel' && usuario === 'piedra'){
        console.log('PERDISTE, papel gana a piedra')
    }else if(maquina === 'piedra' && usuario === 'papel'){
        console.log('GANASTE, papel gana a piedra')
    }else if(maquina === 'tijeras' && usuario === 'papel'){
        console.log('PERDISTE, tijera gana a papel')
    }else if(maquina === 'papel' && usuario === 'tijeras'){
        console.log('GANASTE, tijera gana a papel')
    }

}

