console.log("Repaso Funciones!");

function sayHello() {
  console.log("Hola");
}

sayHello();

function sum(num1, num2) {
  console.log(num1 + num2);
}

sum(10, 20);

function substract(num1, num2) {
  let result = num1 - num2;
  return result;
  console.log("Aquí nunca llega porque está después del return");
}

let subResult = substract(40, 30);
console.log(subResult);

// function isOutOfAge(user) {
//   if (user.age >= 18) {
//     return true;
//   } else {
//     return false;
//   }
// }

function isOutOfAge(user) {
  if (user.age >= 18) return true;
  return false;
}

const userObj = {
  username: "Pepe",
  age: 10,
  isOnline: true,
};

// console.log(isOutOfAge(userObj));
let isOld = isOutOfAge(userObj);
console.log(isOld);


function numbersSum(nums) {
  if (!nums.length) return 0;

  let result = 0;

  for (let num of nums) {
    result += num;
  }

  return result;
}

const numbers = [10, 20, 30];

let totalSum = numbersSum(numbers);
console.log(totalSum);

const numbers2 = [5, 9, 3, 4];

console.log(numbersSum(numbers2));

const numersEmpty = [];

console.log(numbersSum(numersEmpty));



const sayGoodbye = function() {
  console.log("Goodbye!");
}

sayGoodbye();


const sayHelloWorld = () => {
  console.log("Hello World");
}

sayHelloWorld();

const toUpper = str => str.toUpperCase();

console.log(toUpper("patata"));


// Callbacks

const f = () => {
  console.log("Función F");
}

f();

const g = () => {
  console.log("Función G");
}

g();


function caller(cb) {
  console.log("Función caller");
  cb();
}

caller(f);
caller(g);



function callerWithParams(cb, param) {
  cb(param); // sayMyName("Adrián")
}

const sayMyName = (name) => {
  console.log(name);
}

sayMyName("Ana");
sayMyName("María");

callerWithParams(sayMyName, "Adrián");




























// var vs let

// var myStr = "String definido con var";
// console.log(myStr);

// let myStr2 = "String definido con let";
// console.log(myStr2);