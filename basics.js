console.log("Hola mundo!");

// alert("HOla");
// let userName = prompt("Cómo te llamas?");
// confirm("¿Tea?");

// Variables

let userName = "Adrián";
let userAge = 34;
let isOnline = true;

console.log("User name: ", userName);
console.log("User age:", userAge);
console.log("Is user online:", isOnline);

userName = "María";
console.log("New user name: ", userName);

const pi = 3.1416;
console.log("Pi: ", pi);

// JavaScript nos permite cambiar el tipo de dato, pero no es una buena práctica
// userName = 25;
// console.log(userName);

// JavaScript permite mezclar tipos de datos, pero no es una buena práctica
// console.log(10 + true);

// Operadores lógicos

let num1 = 10;
let num2 = 10;
let myBoolean = false;

console.log("num1 > num2", num1 > num2);
console.log("num1 >= num2", num1 >= num2);
console.log("num1 < num2", num1 < num2);
console.log("num1 <= num2", num1 <= num2);
console.log("num1 == num2", num1 == num2);
console.log("num1 === num2", num1 === num2);

console.log("!", !myBoolean);
console.log("&&", true && true && true);
console.log("||", false || true || false);

// Operaciones aritméticas

let number1 = 5;
let number2 = 10;

let sumResult = number1 + number2;
console.log("Result: ", sumResult);

let subResult = number1 - number2;
console.log("Result: ", subResult);

let mulResult = number1 * number2;
console.log("Result: ", mulResult);

let divResult = number1 / number2;
console.log("Result: ", divResult);

let expResult = 2 ** 3;
console.log("Result: ", expResult);

let moduleResult = 5 % 2;
console.log("Result: ", moduleResult);

// Strings

let myName = "Adrián";
let myLastName = "Maza";

const fullName = myName + " " + myLastName;
console.log(fullName);

const address = 'C/Falsa "123"';
console.log(address);

const myString = 'Esto es\n "un string"';
console.log(myString);

const completeName = `${myName}

${myLastName}`;
console.log(completeName);

// Métodos de los string

let myStr = "Hola Mundo!";
console.log(myStr.length);

let upperStr = myStr.toUpperCase();
console.log(upperStr);
