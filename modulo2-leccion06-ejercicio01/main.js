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
