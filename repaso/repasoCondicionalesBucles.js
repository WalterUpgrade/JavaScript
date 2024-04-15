console.log("Repaso!");

let num = 31;

if (false) {
  console.log("La condición se ha cumplido");
} else {
  console.log("La condición no se cumple");
}

if (num < 0) {
  console.log("Num es negativo");
} else if (num > 100) {
  console.log("El número es muy grande");
} else if (num % 2 === 0) {
  console.log("El número es par");
} else {
  console.log("El número es impar");
}

for (let i = 1; i < 11; i++) {
  console.log(i);
}

const movies = [
  "Harry Potter",
  "Star Wars",
  "Star Trek",
  "El Señor de los Anillos",
  "Scream",
  "Dune",
  "El Rey Leon"
];

console.log(movies[1]);

console.log("Bucle for: ------------");
for (let i = 0; i < movies.length; i++) {
  if (movies[i].charAt(0) === "S") {
    console.log(movies[i]);
  }
}

// Podemos definir el inicio y el final de la iteración del bucle
// for (let i = 2; i <= 5; i++) {
//   console.log(movies[i]);
// }

console.log("Bucle while: ------------");

let index = 0;

while (index < movies.length) {
  console.log(movies[index]);
  index++;
}

console.log("Bucle for of: ------------");

for (let movie of movies) {
  console.log(movie);
}

const products = [
  {
    name: "zapatillas",
    price: 100,
    isAvailable: true,
  },
  {
    name: "sombrero",
    price: 50,
    isAvailable: true,
  },
  {
    name: "bufanda",
    price: 20,
    isAvailable: false,
  },
];

for (let product of products) {
  console.log(product.name, product.price);
}


// Ejemplo de un bucle for dentro de otro
// for (let i = 0; i <= 5; i++) {
//   console.log("Para i = ", i);
//   for (let j = 0; j <= 4; j++) {
//     console.log(j);
//   }
// }
