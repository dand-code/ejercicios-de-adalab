const resultadoTexto = document.querySelector(".edad_perro");
const edadPerro = 6;
let edadHumano;

if (edadPerro === 1){
  edadHumano = 15;
} else if (edadPerro === 2){
   edadHumano = 15 + 9;
}else{
   edadHumano = 15 + 9 + (edadPerro - 2) *5;
}

resultadoTexto.innerHTML = `Su perro tiene ${edadHumano} años`;
