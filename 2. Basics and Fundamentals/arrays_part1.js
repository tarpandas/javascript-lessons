// 1. Basics

const arr = [1,2,3];

console.log(arr[1]); // Accessing array elements

arr[1] = 4; // Changing values

console.log(typeof arr); // Arrays are type of objects

arr[3] = Date.now(); // Adding new array elements (We can add objects)
console.log(arr);
console.log(typeof arr[3])

// 2. Methods and Properties - Basics

console.log(arr.length) // Returns the number of elements

console.log(arr.sort()) // Returns the sorted array

// 3. Looping through an array

let fruits = ["Banana", "Mango", "Apple", "Orange"];

readArray = (value) => {
    console.log(value);
}

fruits.forEach(readArray);

// 4. Adding elements

console.log(fruits);
fruits.push("Grapes");
console.log(fruits);

// 5. Recognizaing an array

console.log(Array.isArray(fruits));
console.log(fruits instanceof Array);

// 6. Array Methods

let stringFruits = fruits.toString();
console.log(stringFruits,typeof stringFruits);

console.log(fruits.join("*")); // Jaon array elements with *

fruits.pop();
console.log(fruits); // delete last element

fruits.shift();
console.log(fruits); // delete first element

fruits.unshift("Lemon");
console.log(fruits); // adds a new element at the beginning

delete fruits[0];
console.log(fruits);

const arr1 = [1,2];
const arr2 = [3,4];
const arr3 = arr1.concat(arr2);
console.log(arr3);

// The splice() method adds new items to an array.
// The slice() method slices out a piece of an array.

fruits.splice(0,3,"Lemon","Kiwi","Tomato");
console.log(fruits);

console.log(fruits.slice(2,4));

fruits = ["Banana", "Orange", "Apple", "Mango"];

console.log(fruits.sort()); // Sorted default by String
console.log(fruits.reverse());

const points = [40, 100, 1, 5, 25, 10];
console.log(points.sort(function(a, b){return b - a})); // sorted by number

/*
When the sort() function compares two values, it sends the values to the compare function, and 
sorts the values according to the returned (negative, zero, positive) value.
If the result is negative, a is sorted before b.
If the result is positive, b is sorted before a.
If the result is 0, no changes are done with the sort order of the two values.
*/

console.log(Math.min.apply(null,points));
console.log(Math.max.apply(null,points));
