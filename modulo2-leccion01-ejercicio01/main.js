'use strict'
// Ejercicio 6:

const mainContent = document.querySelector ('.body');

const title = '<h1>Loren ipsun</h1>'; 

const image = '<img src="http://via.placeholder.com/350x150" alt="">';

const text = '<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit</p>'; 

mainContent.innerHTML = title + image + text;

// Ejercicio 7:
const myList = document.querySelector('.list');

const number1 ='<li>1</li>';
const number2 = '<li>2</li>';
const number3 = '<li>3</li>';

myList.innerHTML =  myList.innerHTML + number1 + number2 + number3;


// Ejercicio 8:

const secondBox = document.querySelector ('.section-b');

secondBox.classList.add('opacity');