'use strict'
//Ejercicio de intro
document.querySelector('h1').innerHTML='¡Hola mundo!';
//
let myAddress="Brasil";
myAddress="España";
//
// Ejercicio 3:
document.querySelector('.sub_title1').innerHTML='Ejercicio 03';
// Cuando debemos declarar una variable/constante de un elemento para adicionar o modificar su contenido?
//const contentParagraph=document.querySelector('.content');
//contentParagraph.innerHTML = contentParagraph.innerHTML + ' mundo!';

document.querySelector(".content").innerHTML=document.querySelector(".content").innerHTML + " mundo!";


// Ejercicio 4:
document.querySelector('.sub_title5').innerHTML='Ejercicio 04';
//
const selectionTitle = document.querySelector('.sub_title_ej4');
const optionOne = document.querySelector('.li_1');
const optionTwo = document.querySelector('.li_2');

selectionTitle.innerHTML = selectionTitle.innerHTML + optionOne.innerHTML;

// Ejercicio 6:
document.querySelector('.sub_title2').innerHTML='Ejercicio 06';
//
const mainContent = document.querySelector('.body');
const title = '<h1>Loren ipsun</h1>'; 
const image = '<img src="http://via.placeholder.com/350x150" alt="">';
const text = '<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit</p>'; 
mainContent.innerHTML = title + image + text;

// Ejercicio 7:
document.querySelector('.sub_title3').innerHTML='Ejercicio 07';
//
const myList = document.querySelector('.list');

const number1 ='<li>1</li>';
const number2 = '<li>2</li>';
const number3 = '<li>3</li>';

myList.innerHTML =  myList.innerHTML + number1 + number2 + number3;


// Ejercicio 8:
document.querySelector('.sub_title4').innerHTML='Ejercicio 08';
//
const secondBox = document.querySelector ('.section-b');
secondBox.classList.add('opacity');



