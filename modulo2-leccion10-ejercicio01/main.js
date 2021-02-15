/*
function getDogImage() {
  fetch('https://dog.ceo/api/breed/hound/images/random')
  .then(response => response.json())
  .then(data => {
      const photo = document.querySelector('img');
      photo.src = data.message;
  });
}


const btn = document.querySelector('.js-dog');
btn.addEventListener('click', getDogImage);

*/

function showPhrase(phrase) { 
  const inputElement = document.querySelector('.js-input');
  const paragraph = document.querySelector('.js-text');
  paragraph.innerHTML = phrase;
  inputElement.value = phrase;
}

function storePhrase(phrase) { 
  localStorage.setItem('cached', phrase);
}

function loadCachedPhrase() { 
  const cachedPhrase = localStorage.getItem('cached');
  if (cachedPhrase !== "") showPhrase(cachedPhrase);
}

function init() {
  const inputElement = document.querySelector('.js-input');
  loadCachedPhrase();
  inputElement.addEventListener('keyup', () => { 
    if (inputElement.value !== '') {
      showPhrase(inputElement.value);
      storePhrase(inputElement.value);
    } else
      showPhrase("Texto aqui");
  });
}

init();