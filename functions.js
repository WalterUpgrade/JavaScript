console.log("Funciones!");

function sayHello() {
  console.log("Hola");
}

sayHello();
console.log("-----------");
sayHello();


function sayMyName(userName) {
  console.log("Hola", userName);
}

sayMyName("Adrián");
sayMyName("María");

function sum(num1, num2) {
  console.log(num1 + num2);
}

sum(10, 5);
sum(50, 40);


function multiply(num1, num2) {
  let multiplicationResult = num1 * num2;
  console.log("Esto está antes del return");
  return multiplicationResult;
  console.log("Esto está después del return");
}

let result = multiply(10, 4);
console.log(result);


function divide(num1, num2) {
  let isEven;

  if (num1 % 2 === 0) {
    isEven = true
  } else {
    isEven = false
  }

  console.log("IsEven:", isEven);
  
  if (isEven) {
    return num1 / num2;
  } else {
    return (num1 + 1) / num2;
  }
}

// No podemos utilizar las variables que creamos dentro de una función fuera de esa misma función
// console.log("Fuera de la función: ", isEven);

let divResult = divide(5, 2);
console.log(divResult);

console.log(divide(100, 5));

sum(multiply(5, 1.21), multiply(10, 1.21));

let prod1Price = multiply(5, 1.21);
let prod2Price = multiply(10, 1.21);
sum(prod1Price, prod2Price);



// Diferentes formas de definir una función

// Function statement
function sayHi() {
  console.log("hi!");
}

sayHi();

// Function expression
const sayBye = function() {
  console.log("bye");
}

sayBye();

// Arrow functions
const sayPotato = () => {
  console.log("Potato");
}

sayPotato();

// const concat = (str1, str2) => {
//   return str1 + str2;
// }

const concat = (str1, str2) => str1 + str2;

console.log(concat("aaa", "bbb"));

// const toUpper = (str) => {
//   return str.toUpperCase();
// }

const toUpper = str => str.toUpperCase();

console.log(toUpper("hola"));


// Callbacks

function f() {
  console.log("Estoy dentro de la función F");
}

function g() {
  console.log("Estoy dentro de la función G");
}

function caller(callback, name) {
  console.log("Dentro de la función CALLER");
  callback(name);
}

caller(f);
caller(g);
caller(sayHello);

caller(sayMyName, "Adrián");
// function caller() {
//   console.log("Dentro de la función CALLER");
//   sayMyName("Adrián");
// }



