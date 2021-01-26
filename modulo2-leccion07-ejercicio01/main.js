'use strict';

// EJERCICIO 3:
// Opcion 1:

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




