let str = "This is what you call \"Unacceptable\""; // backslash to insert double inverted commas.
console.log(str);
console.log(typeof str); // String
console.log(str.length); // returns string length

/*
\' 	' 	Single quote
\" 	" 	Double quote
\\ 	\ 	Backslash
\b 	Backspace
\f 	Form Feed
\n 	New Line
\r 	Carriage Return
\t 	Horizontal Tabulator
\v 	Vertical Tabulator
*/


// Methods


// 1. Slicing

/*
There are 3 methods for extracting a part of a string:
    slice(start, end) - start posision inclusive, wnd position exclusive
    substring(start, end) - start and end values less than zero are treated as 0
    substr(start, length) - start and length from start
*/

let text = "This_is_an_example_text.";
console.log(text.slice(4,7));
console.log(text.substring(-1,7));
console.log(text.substr(4,7)); // deprecated

// 2. Replacing

/*
The replace() method does not change the string it is called on.
The replace() method returns a new string.
The replace() method replaces only the first match
If you want to replace all matches, use a regular expression with the /g flag set.
*/

text = "Please visit Mahindra and Mahindra";
console.log(text.replace("Mahindra","Microsoft"));
console.log(text.replace(/MAHINDRA/i,"Tata")); // i - insensitive flag - replaces string without case consideration.
console.log(text.replace(/Mahindra/g,"Johnson")) // g - global flag - replaces all matching string.

// 3. Casing

let text1 = text.toUpperCase();
let text2 = text.toLowerCase();

// 4. Concat

let t1 = "Hello";
let t2 = "World!";
console.log(t1.concat(" ",t2));

// 5. trim

text1 = "         Hello World!    ";
console.log(text1.trim());

// 6. charAt()

text = "HELLO WORLD!";
console.log(text.charAt(0));

// 7. split() - converting string to array

text = "1,2,3,4,5,6";
const arr = text.split(","); // Comma is the separator chosen
console.log(arr);



