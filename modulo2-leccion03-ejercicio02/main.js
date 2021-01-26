let title = document.querySelector(".text_welcome");
var nombre = "Dandara";

var text = nombre === "Dandara" ? "Bienvenida " + nombre : "Lo siento pero el usuario que has introducido no está registrado";

title.innerHTML = text;
