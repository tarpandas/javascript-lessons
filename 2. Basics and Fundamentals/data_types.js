// 1. When adding a number and string, JS will treat it as a String

let x = 16 + "Volvo";
console.log(x,typeof x);

// 2. Expression is read from left to right.
// So, here arithmetic operation is done first and then added a String

let y = 16 + 4 + "Volvo";
console.log(y,typeof y);

// 3. JavaScript is dynamically typed language.

let z; // z of type undefined
z = 5; // z is a number
z = "John"; // z is a String

// 4. Datatypes

let a = 45; // Number
let b = "45"; // String

let c = (a==b); // boolean
console.log(c); // boolean
console.log(a === b); // boolean

const car = ["Audi", 'Volkswagen', 'Volvo'] // array object

const person = {firstName: "Tarpan", lastName: "Das", age : 22}; // object

let color; // undefined

console.log(typeof a);
console.log(typeof b);
console.log(typeof c);
console.log(typeof car);
console.log(typeof person);
console.log(typeof color);



