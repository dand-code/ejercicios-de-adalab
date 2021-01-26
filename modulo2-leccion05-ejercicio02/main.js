"use strict";
const nameInput = document.querySelector('.js-saludo');
const greetingText = document.querySelector('js-greeting');

const handleKeyDownName = (event) => {
  console.log(event.key);
  greetingText.innerHTML += event.key;
}
nameInput.addEventListener("keydown", handleKeyDownName);

const handleChange = (event) => {
  console.log(event);
  greetingText.innerHTML = `Hola ${event.currentTarget,value}!`;
}

nameInput.addEventListener("change", handleChange);
/*
const nameUser = document.querySelector(".input").value;
const button = document.querySelector(".alert");

function message() {
  console.log(`Hola ${nameUser} !`);
}

button.addEventListener("click", message);
*/