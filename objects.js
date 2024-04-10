console.log("Objects!");

let book = {
  title: "1984",
  author: "George Orwell",
  pages: 120,
  isGood: true,
};

console.log(book);
console.log(book.title);

let hotelRoom = {
  name: "Suit",
  price: 100,
  fees: 20,
  luxury: {
    pool: true,
    tv: false
  }
}

console.log(hotelRoom.price + hotelRoom.fees);
console.log(hotelRoom.luxury.pool);

hotelRoom.price = 30;
console.log(hotelRoom);

hotelRoom.beds = 2;
console.log(hotelRoom);

let property = "price";
console.log(hotelRoom[property]);




let a = 10;
let b = a;
console.log("a:", a, "b:", b);
b = 20;
console.log("a:", a, "b:", b);

const o1 = {
  name: "Adrián"
}
const o2 = o1;
console.log("o1:", o1, "o2:", o2);
o2.name = "María";
console.log(o2);
console.log(o1);
