const pageBody = document.querySelector(".page");

document.addEventListener("keypress", (event) => {
  if (event.key === "r") {
    pageBody.classList.remove("colorBody2");
    pageBody.classList.add("colorBody1");
  } else if (event.key === "m") {
    pageBody.classList.remove("colorBody1");
    pageBody.classList.add("colorBody2");
  }
});

/*mmmmm
const colorKeys = {
  'r': "red",
  'm': "purple"
};

document.addEventListener("keypress", (event) => {
  pageBody.style.backgroundColor = colorKeys[event.key];
}
);

*/


/*
const colorKeys = {
  'a': "pink",
  'd': "red",
  'r': "aquamarine",
  'n': "yellow"
};
*/

/*
document.addEventListener("keypress", (event) => {
  /*
  if (event.key === 'r') {
    pageBody.classList.add("scroll-up");
  } else {
    pageBody.classList.remove("scroll-up");
  }
  pageBody.style.backgroundColor = colorKeys[event.key]
  pageBody.innerText += event.key;
}
);
*/

// hash, hashmap, hashtable: estrutura de dados.
