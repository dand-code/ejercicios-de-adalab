const box = document.querySelector(".container");

document.addEventListener("scroll", changeColorBg);

function changeColorBg() {
  if (window.scrollY > 250) {
    box.classList.add("scroll-up");
  } else {
    box.classList.remove("scroll-up");
  }
} 