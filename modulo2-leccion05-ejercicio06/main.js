'use strict';
const fruits = document.querySelectorAll('.fruit');
function handleFruitClick(event) {
  // Asignamos a una constante el elemento sobre el que pusimos el `listener para trabajar cómodamente con él
  const selectedFruit = event.currentTarget;
  selectedFruit.classList.toggle('fruit--selected');
}
for(const fruit of fruits) {
  fruit.addEventListener('click', handleFruitClick);
}
