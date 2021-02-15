'use strict';

// EJERCICIO 3:
// Opcion 1:
/*
let acc = 0;
for (let i=0; i<10; i+=2) {
  acc+=2;
  console.log("El resultado es " + i)
}

// Opcion 2:
for (let acc=0; acc<10; acc+=2) {
  console.log("El resultado es " + acc)
}
//
//EJERCICIO 4:
//Ultimo ano: identificar el ultimo ano: segun el enunciado fue en 2017, pero como se repite a cada 3 anos, entonces la ultima luna fue en 2020;
//
for (let moon=2020+3; moon<2036; moon+=3) {
  console.log('La proxima luna será en ' + moon)
}

// EJERCICIO 5.A
/*
const numbers = [4, 4, 19, 9, 11];

let sum = 0;
let total;
for (let i = 0; i < numbers.length; i++) {
  sum += numbers[i];
  total = sum/5;
}
console.log('La puntuación final es ' + total);
*/


const numbers = [4, 4, 19, 9, 11];
numbers[5] = 1;
let sum = 0;
let total;

// EJERCICIO 5.B

for (let i = 0; i < numbers.length; i++) {
  sum += numbers[i];
  total = sum/6;
}

console.log('La puntuación final es ' + total);

// EJERCICIO 5.C
function average(numbers){
  let sum = 0;
  let total;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
    total = sum/6;
  }
  return total;
}

console.log('La puntuación final es ' + average(numbers));



/*
function average(numbers){
  let sum = 0;
  for (const num of numbers) {
    sum += num;
  }
  return sum/numbers.length;
} */


const list = [ 2, 4, 5];

for (let idx=1; idx<21; idx++){
  list.push(idx);
}
console.log(list);


