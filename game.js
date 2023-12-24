let tijeras = 'tijeras';
let piedra = 'piedra';
let papel = 'papel';
let randomMaquina = Math.floor(Math.random() * (4-1)+1)
let Entradausuario = +(prompt('1: Piedra, 2: Papel, 3: Tijera'))
let usuario = ''
let maquina= ''

if (Entradausuario === 1){
    usuario = piedra
}else if(Entradausuario === 2){
    usuario = papel
}else if(Entradausuario === 3){
    usuario = tijeras
}

if (randomMaquina === 1){
    maquina = 'piedra'
}else if(randomMaquina === 2){
    maquina = 'papel'
}else if(randomMaquina === 3){
    maquina = 'tijeras'
}
console.log(`Maquina: ${maquina}`)
console.log(`Usuario: ${usuario}`)

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