//SELECCION DE BOTONES
let btnTijeras = document.getElementById('tijeras');
let btnPiedra = document.getElementById('piedra');
let btnPapel = document.getElementById('papel');
//VARIABLES DE VICTORIA PARA HACER MODIFICACIONES
let eleccionMaquina = document.getElementById('eleccionMaquina');
let eleccionUsuario = document.getElementById('eleccionUsuario');
let contadorMaquina = document.getElementById('cantMaquina')
let contadorUsuario = document.getElementById('cantUsuario')
let resultado = document.getElementById('resultado');
// INICIALIZACION DE VARIABLES DE VICTORIAS
let ganador = '';
let resultadoUsuario = '';
let victoriaMaquina = 0;
let victoriaUsuario= 0;
// OPCIONES ELEGIDAS POR EL USUARIO Y MAQUINA
let usuario = '';
let maquina= '';
// SE LE ASIGNA LA ELECCION DE LA MAQUINA GENERADO POR EL NUMERO RANDOM
let randomMaquina

//EVENTOS ESCUCHA DE BOTONES SELECCION DE USUARIO
btnTijeras.addEventListener('click', ()=>{
    randomMaquina = Math.floor(Math.random() * (4-1)+1)
    usuario="Tijeras";

    choiceMachine();
    choiceUser();
    resultado.innerText = ganador;
    eleccionMaquina.innerText = "Juego: " + maquina
    eleccionUsuario.innerText = "Juego: " + usuario
})

btnPiedra.addEventListener('click', ()=>{
    randomMaquina = Math.floor(Math.random() * (4-1)+1)
    usuario="Piedra";

    choiceMachine();
    choiceUser();
    resultado.innerText = ganador;
    eleccionMaquina.innerText = "Juego: " + maquina
    eleccionUsuario.innerText = "Juego: " + usuario

})

btnPapel.addEventListener('click', ()=>{
    randomMaquina = Math.floor(Math.random() * (4-1)+1)
    usuario="Papel";

    choiceMachine();
    choiceUser();
    resultado.innerText = ganador;
    eleccionMaquina.innerText = "Juego: " + maquina
    eleccionUsuario.innerText = "Juego: " + usuario
})

function choiceMachine(){
    if (randomMaquina === 1){
        maquina = 'Piedra'
    }else if(randomMaquina === 2){
        maquina = 'Papel'
    }else if(randomMaquina === 3){
        maquina = 'Tijeras'
    }
}

function maquinaGana(){
    ganador = 'PERDISTE, LOOSER!!'
    victoriaMaquina +=1;
    contadorMaquina.innerText = "Victorias: " + victoriaMaquina
}

let UsuarioGana = () => {
    ganador = 'GANASTE, MAQUINA!!'
    victoriaUsuario +=1;
    contadorUsuario.innerText = "Victorias: " + victoriaUsuario
}

function choiceUser(){

    if (maquina === usuario ) {
        ganador = 'EMPATE'
    }else if(maquina === 'Tijeras' && usuario === 'Piedra'){
        UsuarioGana()
    }else if(maquina === 'Piedra' && usuario === 'Tijeras'){
        maquinaGana();
    }else if(maquina === 'Papel' && usuario === 'Piedra'){
        maquinaGana();
    }else if(maquina === 'Piedra' && usuario === 'Papel'){
        UsuarioGana()
    }else if(maquina === 'Tijeras' && usuario === 'Papel'){
        maquinaGana();
    }else if(maquina === 'Papel' && usuario === 'Tijeras'){
        UsuarioGana()
    }

}

