let tijeras = 'tijeras';
let piedra = 'piedra';
let papel = 'papel';
let randomMaquina = Math.floor(Math.random() * (4-1)+1)
let usuario = prompt('1:Piedra, 2: Papel, 3: Tijera').toLowerCase()
let maquina= ''

if (randomMaquina === 1){
    maquina = 'piedra'
}else if(randomMaquina === 2){
    maquina = 'papel'
}else if(randomMaquina === 3){
    maquina = 'tijeras'
}
console.log(maquina)
// console.log(randomMaquina)

if (maquina === usuario ){
    console.log('Empate')
}else if(maquina === 'tijera' && usuario === 'piedra'){
    console.log('GANASTE, piedra gana a tijera')
}else if(maquina === 'piedra' && usuario === 'tijera'){
    console.log('PERDISTE, piedra gana a tijera')
}else if(maquina === 'papel' && usuario === 'piedra'){
    console.log('PERDISTE, papel gana a piedra')
}else if(maquina === 'piedra' && usuario === 'papel'){
    console.log('GANASTE, papel gana a piedra')
}else if(maquina === 'tijera' && usuario === 'papel'){
    console.log('PERDISTE, tijera gana a papel')
}else if(maquina === 'papel' && usuario === 'tijera'){
    console.log('GANASTE, tijera gana a papel')
}