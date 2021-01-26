const textContent = document.querySelector(".text");

function textComplet (){
  textContent.innerHTML = textContent.innerHTML + "<p'>Loren Ipsun</p>";
}

textContent.addEventListener('mouseover', textComplet);