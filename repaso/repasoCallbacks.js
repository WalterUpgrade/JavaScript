console.log("Repaso callbacks!");

const numbers = [10, 20, 30, 40, 5, 25];


// Método forEach()

numbers.forEach((number) => {
  console.log(number);
})


// Método map()

const doubleNumbers = numbers.map((number) => {
  return number * 2;
})
console.log(doubleNumbers);


// Método filter()

const filteredNumbers = numbers.filter((number) => {
  return number > 15 && number % 2 === 0;
})
console.log(filteredNumbers);


// .sort() | .toSorted() | .reduce()





