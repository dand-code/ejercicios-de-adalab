'use strict';

const textHola = document.querySelector('.text');
const alertButton = document.querySelector('.alert');

function textChange (){
    return textHola.innerHTML="Mi primer click, ¡ole yo y la mujer que me parió!"
}

alertButton.addEventListener('click', textChange);

// EJEMPLO CON AROW FUNCTION:
//alertButton.addEventListener('click', () => textHola.innerHTML="Mi primer click, ¡ole yo y la mujer que me parió!");





// Ejemplos de la unidad: 
/*
const button = document.querySelector('.alert');
button.addEventListener('click', function showAlert() {
  //console.log('alerta');
  alert("Alerta!");
});

/*
function showAlert(){
    //alert 'Alerta';
    console.log('Alerta!');
}

button.addEventListener('click', showAlert);
*/
