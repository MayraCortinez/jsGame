let numeroSecreto = generarNumeroSecreto();

let numeroIntentos = 1;

function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return
}

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    if (numeroDeUsuario === numeroSecreto){
        asignarTextoElemento('p', `Has acertado en ${numeroIntentos} ${(numeroIntentos === 1) ? 'intento' : 'intentos'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }else{
        if(numeroSecreto < numeroDeUsuario) {
            asignarTextoElemento('p', 'El número secreto es más bajo');
        }else{
            asignarTextoElemento('p', 'El número secreto es más alto');
        }
        numeroIntentos++;
        limpiarCaja();
    }  
    return;
}

function generarNumeroSecreto() {
    return Math.floor(Math.random()*10)+1;
}

function condicionesIniciales() {
    asignarTextoElemento('h1', 'Juego del número secreto');
    asignarTextoElemento('p', 'Elige un número del 1 al 10');
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}
condicionesIniciales();

function limpiarCaja() {
    document.getElementById('valorUsuario').value = '';
    return;
}

function reiniciarJuego() {
    limpiarCaja();
    condicionesIniciales();
    document.getElementById('reiniciar').setAttribute('disabled', 'disabled');
}

