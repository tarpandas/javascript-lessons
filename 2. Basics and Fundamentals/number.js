let a = 9999999999999999;
let b = 9999999999999999n;
console.log(a+" "+typeof a);
console.log(b+" "+typeof b);

// Number functions

let c = 123.34;
console.log(c.toString());
console.log(c.toExponential(2));
console.log(c.toFixed(2)); // Perfect for working with money
console.log(c.toPrecision(2));
console.log(c.valueOf()); // An object number is coverted to prmitive

// NOTE: All JavaScript data types have a valueOf() and a toString() method.

// Number() - converts JavaScript variables to SVGAnimatedNumberList;

console.log(Number(true));
console.log(Number(new Date("2000-01-01"))); // Returns in milliseconds

// parseInt() parses a string and returns a whole number

console.log(parseInt("-10"));
console.log(parseInt("-10.33"));
console.log(parseInt("10"));
console.log(parseInt("10.33"));
console.log(parseInt("10 20 30"));
console.log(parseInt("10 years"));
console.log(parseInt("years 10"));

// paseFloat() parses a string and returns a number

console.log(parseFloat("10"));
console.log(parseFloat("10.33"));
console.log(parseFloat("10 20 30"));
console.log(parseFloat("10 years"));
console.log(parseFloat("years 10"));

/*
Number.isInteger()	    Returns true if the argument is an integer
Number.isSafeInteger()	Returns true if the argument is a safe integer
Number.parseFloat()	    Converts a string to a number
Number.parseInt()	    Converts a string to a whole number
*/

// Number Properties
/*
EPSILON 	        The difference between 1 and the smallest JS number.
MAX_VALUE 	        The largest number possible in JavaScript
MIN_VALUE 	        The smallest number possible in JavaScript
MAX_SAFE_INTEGER 	The maximum safe integer (253 - 1)
MIN_SAFE_INTEGER 	The minimum safe integer -(253 - 1)
POSITIVE_INFINITY 	Infinity (returned on overflow)
NEGATIVE_INFINITY 	Negative infinity (returned on overflow)
NaN 	            A "Not-a-Number" value
*/