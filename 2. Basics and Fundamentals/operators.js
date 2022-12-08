/*
Arithmetic Operators
    +, - , *, ** (exponent), /, %, ++, --
Assignment Operators
    ==, +=, -=, *=, /=, %=, **=
Comparison Operators
    ==, === (equal value and equal type), !=, !== (not equl value or type), >, <, >=, <=, ? (ternary operator)
Logical Operators
    &&, ||, !
Bitwise Operators
    &, |, ~, ^ (XOR), <<, >>, >>> (unsigned right shift)
Type Operators
    typeof, instanceof
*/

// Example of comparison operator

const a = 10
console.log("10 == '10': "+ (a =='10'));
console.log("10 === '10': "+ (a ==='10'));

// Example of unsigned and signed right shift

const b = -5
let c = b >> 2;
let d = b >>> 2;
console.log("-5 >> 2: "+c);
console.log("-5 >>> 2: "+d);

/*
-5 = 1111 1111 1111 1111 1111 1111 1111 1011
-2 = 1111 1111 1111 1111 1111 1111 1111 1110
1073741822 = 0011 1111 1111 1111 1111 1111 1111 1110
*/