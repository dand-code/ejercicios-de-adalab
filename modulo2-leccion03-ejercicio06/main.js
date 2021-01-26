let alertBox = document.querySelector(".alert");
let alertTitle = document.querySelector(".title");
let alertText = document.querySelector(".text");

if (alertBox.classList.contains('warning')) {
  alertTitle.innerHTML = "AVISO" ;
  alertText.innerHTML =  'Tenga cuidado';
} else if (alertBox.classList.contains('error')){
  alertText.innerHTML = 'Ha surgido un error';
} else{
  alertBox.classList.add('.sucess');
  alertTitle.innerHTML = "CORRECTO";
  alertText.innerHTML =  'Los datos osn correctos';
}
