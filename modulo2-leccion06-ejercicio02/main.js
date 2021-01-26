const adalaber1 = {
  name: 'Susana',
  age: 34,
  job: 'periodista'
};
const adalaber2 = {
  name: 'Rocio',
  age: 25,
  job: 'actriz'
};
const welcomeMessageElement = document.querySelector('.title');

welcomeMessageElement.innerHTML = `Mi nombre es ${adalaber1.name}, tengo ${adalaber1.age} años y soy ${adalaber1.job}.`;

welcomeMessageElement.innerHTML = `Mi nombre es ${adalaber2.name}, tengo ${adalaber2.age} años y soy ${adalaber2.job}.`;

// Adalaber 1
adalaber1.run = phrase => `Estoy ${phrase}.`;
console.log(adalaber1.run('corriendo'));

//Adalaber 2

adalaber1.runMarathon = phrase2 => `Estoy curriendo ${phrase2} quilometros.`;
console.log(adalaber1.runMarathon(50));

// EJERCICIO 3 (THIS)
adalaber1.showBio = function () {
  return 'Mi nombre es ' + this.name +', tengo ' + this.age + ' años y soy ' + this.job;
}

console.log(adalaber1.showBio());

//Adalaber 2
adalaber2.showBio = function () {
  return 'Mi nombre es ' + this.name +', tengo ' + this.age + ' años y soy ' + this.job;
}

console.log(adalaber2.showBio());

