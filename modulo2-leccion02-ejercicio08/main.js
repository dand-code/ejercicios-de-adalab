'use strict';
const firstDogImage = 'https://images.dog.ceo/breeds/schipperke/n02104365_8156.jpg';
const firstDogName = '<p>Dina</p>';

const secondDogImage = 'https://images.dog.ceo/breeds/collie-border/n02106166_355.jpg';
const secondDogName = '<p>Luna</p>';

const thirdDogImage = 'https://images.dog.ceo/breeds/affenpinscher/n02110627_7065.jpg';
const thirdDogName = '<p>Lana</p>';

const myList = document.querySelector(".list");
// usando tamplate strings (interpolacion de cadenas) se puede concatenar strings entre backsticks sem se preocupar com os espacos
myList.innerHTML = `
<ul>
<li>${firstDogName}<img src=${firstDogImage}></li>
<li>${secondDogName}<img src=${secondDogImage}></li>
<li>${thirdDogName}<img src=${thirdDogImage}></li>
</ul>`;

const listContainer = document.querySelector("ul");
listContainer.classList.add("list_style");

const listItems = document.querySelector("li");
listItems.classList.add("list_elements");