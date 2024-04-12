console.log("Loops!");

// Bucle for

for (let i = 0; i < 10; i++) {
  console.log(i);
}

console.log("Se ha terminado el bucle");

const students = ["María", "Ana", "Jose", "Juan"];

for (let i = 0; i < students.length; i++) {
  console.log(i, students[i]);
}

// Bucle while

let counter = 0;

while (counter < 5) {
  console.log("Counter: ", counter);
  counter++;
}

// Bucle Do While

counter = 10;

do {
  console.log("Do while counter: ", counter);
  counter++;
} while (counter < 5);

// Bucle for of

// const students = ["María", "Ana", "Jose", "Juan"];

for (let student of students) {
  console.log(student);
}

const products = [
  {
    productName: "zapatillas",
    price: 50,
    isForSale: true,
  },
  {
    productName: "libro",
    price: 30,
    isForSale: false,
  },
  {
    productName: "videojuego",
    price: 60,
    isForSale: true,
  },
];

for (let product of products) {
  let fullPrice = product.price * 1.21;
  console.log(product.productName, " - ", fullPrice);
}

// El siguiente bucle for es equivalente al anterior bucle for of

// for (let i = 0; i < products.length; i++) {
//   let fullPrice = products[i].price * 1.21;
//   console.log(products[i].productName, " - ", fullPrice);
// }


// Bucle for in

const book = {
  title: "1984",
  author: "George Orwell",
  pages: 100
}

for (let key in book) {
  console.log(key);
  console.log(book[key]);
}


// bucle forEach método de los array

products.forEach((product) => {
  console.log(product);
})