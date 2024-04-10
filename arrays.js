console.log("Arrays!");

const numArray = [10, 20, 30, 40];

console.log(numArray);
console.log(numArray[3]);

// En JavaScript podemos crear arrays de distintos tipos de datos pero es una mala práctica
// const myArray = [1234, "rfwee", true, [], {}];
// console.log(myArray);

const countries = ["Spain", "Mexico", "Venezuela"];

console.log(countries);
console.log(countries[0]);

const products = [
  {
    productName: 'zapatillas',
    price: 50,
    isForSale: true
  },
  {
    productName: 'libro',
    price: 30,
    isForSale: false
  },
  {
    productName: 'videojuego',
    price: 60,
    isForSale: true
  },
]

console.log(products);
console.log(products[2]);

// Array length

console.log(numArray.length);
console.log(countries.length);
console.log(products.length);

// Métodos de los array push()

numArray.push(50);
console.log(numArray);

countries.push("EE.UU.");
console.log(countries);

products.push({
  productName: "ring",
  price: 100,
  isForSale: false
})
console.log(products);

// Métodos de los array unshift()

numArray.unshift(0);
console.log(numArray);

countries.unshift("France");
console.log(countries);

products.unshift({
  productName: "car",
  price: 10000,
  isForSale: true
})
console.log(products);

// Métodos de los array pop()

numArray.pop();
console.log(numArray);

countries.pop();
console.log(countries);

products.pop();
console.log(products);

// Métodos de los array shift()

numArray.shift();
console.log(numArray);

countries.shift();
console.log(countries);

products.shift();
console.log(products);

// Métodos de los array splice()

// numArray.splice(2, 1, 99);
// console.log(numArray);

// countries.splice(1, 1);
// console.log(countries);

// products.splice(0, 2);
// console.log(products);


// Métodos de los array reverse()

console.log(numArray.reverse());
console.log(numArray);

console.log(countries.reverse());

console.log(products.reverse());

// Métodos de los array sort();

console.log(countries);
countries.sort();
console.log(countries);

console.log(numArray);
numArray.sort();
console.log(numArray);

const numbers = [123, 20, 15, 1, 25, 67];
console.log(numbers);
numbers.sort();
console.log(numbers);

// Métodos de los array concat()

const allNumbers = numArray.concat(numbers);
console.log(allNumbers);

// Métodos de los array slice()

console.log(numArray);
console.log(numArray.slice(2, 4));

console.log(countries);
console.log(countries.slice(1));

console.log(products);
console.log(products.slice(0,2));

// Métodos de los array toString()

console.log(numArray.toString());

console.log(countries.toString());

console.log(products.toString());

// Método de los array join()

console.log(numArray.join("-----"));

console.log(countries.join(" "));

console.log(products.join("|"));

// Método de los string split()

let lorem = "Lorem Ipsum; es simplemente el texto; de relleno de las imprentas y archivos de texto";
const words = lorem.split(" ");
console.log(words);

// Método de los array indexOf()

numArray.push(20);
console.log(numArray);
console.log(numArray.indexOf(30));
console.log(numArray.indexOf(99));
console.log(numArray.indexOf(20));

console.log(countries);
console.log(countries.indexOf("Spain"));

// Al comparar objetos, se comparan sus posiciones de memoria, no sus propiedades, por eso no lo encuentra
console.log(products);
console.log(products.indexOf({
  productName: 'zapatillas',
  price: 50,
  isForSale: true
}));

// Métodos de los array lastIndexOf()

console.log(numArray);
console.log(numArray.lastIndexOf(20));

console.log(countries.lastIndexOf("Spain"));

// Métodos de los array includes()

console.log(numArray);
console.log(numArray.includes(30));
console.log(numArray.includes(99));

console.log(countries.includes("Spain"));

console.log(products.includes({
  productName: 'zapatillas',
  price: 50,
  isForSale: true
}));