/*
4 Ways to Declare a JavaScript Variable:
    Using var
    Using let
    Using const
    Using nothing

The var keyword is used in all JavaScript code from 1995 to 2015.
The let and const keywords were added to JavaScript in 2015.
*/
const price1 = 34; // Default value of any variable : undefined
const price2 = 45;
let total = price1 + price2;

console.log(total);

const $$$ = 23; // valid
const _ = 34; // valid

console.log($$$);
console.log(_);

/*
Names can contain letters, digits, underscores, and dollar signs.
Names must begin with a letter.
Names can also begin with $ and _.
Names are case sensitive (y and Y are different variables).
Reserved words (like JavaScript keywords) cannot be used as names.
*/