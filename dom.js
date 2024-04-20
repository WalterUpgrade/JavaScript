console.log("DOM");


// Seleccionar elementos HTML

const title = document.getElementById("title");
console.log(title);

const pElements = document.getElementsByTagName("p");
console.log(pElements);

const p0 = pElements[0];
const p1 = pElements[1];
console.log(p1);

const divElements = document.getElementsByTagName("div");
console.log(divElements[0]);

const textElements = document.getElementsByClassName("text");
console.log(textElements);

const h1Text = textElements[0];
console.log(h1Text);


const titleElem = document.querySelector("#title");
console.log(titleElem);

const h1TextElem = document.querySelector("h1.text");
console.log(h1TextElem);

const pElems = document.querySelectorAll("p");
console.log(pElems);

const p0Elem = pElems[0];
const p1Elem = pElems[1];
console.log(p1Elem);

const divElems = document.querySelectorAll("div");
console.log(divElems);

const textElems = document.querySelectorAll(".text");
console.log(textElems);


// Modificar elementos HTML

console.log(title);
title.innerHTML = "Nuevo Título";

title.style.backgroundColor = "yellow";

console.log(title.getAttribute("class"));
title.setAttribute("id", "patata");

title.classList.add("big");
title.classList.remove("big");


// Crear elementos HTML

const h2elem = document.createElement("h2");
h2elem.innerHTML = "Contenido creado dinámicamente";
console.log(h2elem);

const container = document.querySelector(".container");
console.log(container);

container.appendChild(h2elem);


const section = document.createElement("section");
section.setAttribute("id", "my-section");

const h3elem = document.createElement("h3");
h3elem.innerHTML = "Texto para el h3 dentro de la sección";
section.appendChild(h3elem);

const body = document.querySelector("body");
body.appendChild(section);


const newP = document.createElement("p");
newP.innerHTML = "Esto es un párrafo dinámico";

container.insertBefore(newP, p1);


// Eliminar elementos HTML

// body.removeChild(section);
// container.innerHTML = "";




// Eventos y comportamiento en la web

title.addEventListener("click", () => {
  console.log("Se ha hecho click en el título");
})

title.addEventListener("mouseenter", () => {
  title.classList.add("big");
})

title.addEventListener("mouseleave", () => {
  title.classList.remove("big");
})
