console.log("Advanced Array Methods!");

const numbers = [10, 20, 30, 40];
const students = ["María", "Ana", "Paco", "Juan"];
const products = [
  {
    productName: "computer",
    price: 1000,
    isAvailable: true
  },
  {
    productName: "tv",
    price: 500,
    isAvailable: true
  },
  {
    productName: "keyboard",
    price: 20,
    isAvailable: false
  },
]


// método forEach()

numbers.forEach((number) => {
  console.log(number * 2);
});

students.forEach((student) => {
  console.log(student.toUpperCase());
})

products.forEach((product) => {
  console.log(product.productName);
})


// método map()

const tripleNumbers = numbers.map((number) => {
  return number * 3;
})
console.log(tripleNumbers);

// const studentsCopy = students.map((student) => student)
const studentsCopy = students.map((student) => {
  return student;
})
// El método map nos va a permitir crear una COPIA a partir de un array base
studentsCopy[0] = "Sandra";
console.log(studentsCopy);
console.log(students);

const productsWithIva = products.map((product) => {
  const newPrice = product.price * 1.21;
  return {
    productName: product.productName,
    price: newPrice,
    isAvailable: product.isAvailable
  };
})
console.log(productsWithIva);

const productsName = products.map((product) => {
  return product.productName
})
console.log(productsName);

const productsSummary = products.map((product) => {
  return {
    productsName: product.productName,
    price: product.price
  }
})
console.log(productsSummary);


// método filter()

const filteredNumbers = numbers.filter((number) => {
  return number > 25;
})
console.log(numbers);
console.log(filteredNumbers);

const filteredStudents = students.filter((student) => {
  return student.length > 4;
})
console.log(filteredStudents);

const availableProducts = products.filter((product) => {
  return product.isAvailable;
})
console.log(availableProducts);

const cheapProducts = products.filter((product) => {
  return product.price <= 50;
})
console.log(cheapProducts);



