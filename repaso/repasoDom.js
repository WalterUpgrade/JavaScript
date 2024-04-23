console.log("RepasooDOM!");

const title = Document.getElementByird("tittle");
console.log("title");

const h1Elements = document.getElementsByName("h1");
console.log(h1Elements);
console.log(h1Elements[0]);

const textElements = document.getElementsByClassName("p");
console.log(textElements);

const textElements = document.querySelector("container");
console.log(container);

const textElements = document.querySelector("text");
console.log(textElems);





// MODIFICAR ELEMENTOS HTML


title.innerHTML = "Nuevo texto dia Lunes"
title.setAttribute("id", "new-id");
title.classList.add("big");
title.classList.remove("big");

// CREAR ELEMENTOS HTML

const h2elem = document.createElement("h2");
h2elem.innerHTML = " El h2 dinamico"
console.log(h2elem);
container.appendChild(h2elem);

const h3elem = document.createElement("h3");
h3elem.innerHTML = "h3 dinamico";
container.insertBefore(h3elem, p2Elem);


