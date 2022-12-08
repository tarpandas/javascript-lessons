/*
-- Block scope
Before ES6 (2015), JavaScript had only Global Scope and Function Scope.
ES6 introduced two important new JavaScript keywords: let and const.
These two keywords provide Block Scope in JavaScript.
*/

function fun(){
    let numNum = 23;
} // numNum cannot be used here.

/*
-- Hoisting
Variables defined with var are hoisted to the top and can be initialized at any time.
Meaning: You can use the variable before it is declared.
*/

carName = 23;
var carName; // valid

/*
-- Const Keyword
Constants must be assigned a value when declared.
Meaning:
const PI;
PI = 3.14; // It's invalid
Variables defined with const cannot be Reassigned.
Use const when you declare:
    A new Array
    A new Object
    A new Function
    A new RegExp
*/

const PI = 3.14;
const fruits = ["Mango", "Pineapple", "Apple", "Banana"];
// We can change the elements of a constant array.
fruits[0] = "Tomato";
fruits.push("Grapes");

// Constant objects - We can change the properties

const car = {type:"Maruti", model:"Alto", color:"Beige"};
car.color = "Ecru beige";
car.owner = "Sumit"


