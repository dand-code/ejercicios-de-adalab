
//const btnElement = document.querySelector('.js-btn-submit');
const inputElement = document.querySelector('.js-form_input');
const resultElement = document.querySelector(".edad_perro");
let edadPerro = inputElement.value;
let edadHumano;

function ageHumanConvert() {
  
   if (edadPerro === 1){
      edadHumano = 15;
    } else if (edadPerro === 2){
       edadHumano = 15 + 9;
    }else{
       edadHumano = 15 + 9 + (edadPerro - 2) *5;
    }
    
   return resultElement.innerHTML = edadHumano==='' ? "Descubra la edad en Humanos de tu mejor amigo" : `Su perro tendría ${edadHumano} años si fuera humano`;
}

//btnElement.preventDefault();
//btnElement.addEventListener('click', ageHumanConvert);

