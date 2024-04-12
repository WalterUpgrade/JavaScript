console.log("Conditionals!");

let age = 20;

if (age > 200) {
  console.log("Nadie ha vivido tanto");
} else if (age < 0) {
  console.log("Edad incorrecta");
} else if (age >= 18) {
  console.log("Eres mayor de edad");
} else {
  console.log("Eres menor de edad");
}

let number = 10;

if (number % 2 === 0) {
  console.log("El número", number, "es par");
} else {
  console.log("El número", number, "es impar");
}

let country = "Spain";

if (
  country.toLowerCase() === "españa" ||
  country.toLocaleLowerCase() === "spain"
) {
  console.log("El pais es España");
} else if (country.toLowerCase() === "Mexico") {
  console.log("El pais es Mexico");
} else {
  console.log("Es otro pais");
}

const user = {
  isRegistered: true,
  isPremium: true,
};

if (user.isRegistered && user.isPremium) {
  console.log("Mostrando contenido premium");
}

// if (!false) {
//   console.log("Se cumple la condición");
// }

// Valores Truthy & Valores Falsy
// Truthy: "asdasdf", 123413, true, [], {}
// Falsy: "", 0, false, undefined, null

let myCondition = true;

if (myCondition) {
  console.log("Se cumple la condición");
} else {
  console.log("No se cumple la condición");
}

let userName = "";

// if (userName.length !== 0) {
//   console.log("Usuario creado");
// }

if (userName) {
  console.log("Usuario creado");
}

let productQuantity = 0;

if (productQuantity) {
  console.log("Producto añadido");
}

// switch - case

let day = "Viernes";

switch (day) {
  case "Lunes":
    console.log("Es el primer día de la semana");
    break;

  case "Martes":
    console.log("Es el segundo día de la semana");
    break;

  default:
    console.log("Es cualquier otro día");
    break;
}

// El bloque switch - case anterior es equivalente al siguiente bloque if-else:

// if (day === "Lunes") {
//   console.log("Es el primer día de la semana");
// } else if (day === "Martes") {
//   console.log("Es el segundo día de la semana");
// } else {
//   console.log("Es cualquier otro día");
// }

// Operadores ternarios

let num = 10;

// condition ? (la condición es cierta) : (la condición no es cierta)

num > 5
  ? console.log("Num es mayor que 5")
  : console.log("La condición no es cierta");

// El ternario de arriba es equivalente al siguiente bloque if-else:

// if (num > 5) {
//   console.log("Num es mayor que 5");
// } else {
//   console.log("La condición no es cierta");
// }

age = 10;

let esMayorDeEdad = age >= 18 ? true : false;
console.log(esMayorDeEdad);

age > 200
  ? console.log("age es mayor que 200")
  : age < 0
  ? console.log("la edad es negativa")
  : console.log("la edad está entre 0 y 200");
