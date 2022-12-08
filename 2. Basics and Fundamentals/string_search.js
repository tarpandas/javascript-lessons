let str = "A quick brown fox jumped over the quick but lazy dog.";

console.log("str.indexOf(\"o\"):", str.indexOf("o")); // Strings first occurence
console.log("str.lastIndexOf(\"o\"):", str.lastIndexOf("o")); // strings last occurence

console.log("str.search(/fox/):", str.search(/fox/)); // returns position (can search regular expression)

/*
The search() method cannot take a second start position argument.
The indexOf() method cannot take powerful search values (regular expressions).
*/

//The match() method returns an array containing the results of matching a string against a string (or a regular expression).
console.log("str.match(/quick/):",str.match(/quick/));
console.log("str.match(/quick/gi):",str.match(/quick/gi));

//The includes() method returns true if a string contains a specified value.
//Otherwise it returns false.

console.log("str.includes(\"quick\"):",str.includes("quick"));

//The startsWith() method returns true if a string begins with a specified value.
//Otherwise it returns false

console.log("str.startsWith(\"quick\"):",str.startsWith("quick"));

//The endsWith() method returns true if a string ends with a specified value.
//Otherwise it returns false

console.log("str.endsWith(\"quick\"):",str.endsWith("quick"));