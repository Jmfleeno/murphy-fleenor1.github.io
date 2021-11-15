/*
 * Data Types:
 * 
 * 0. When a new piece of data is introduced into a JavaScript program, the program keeps
 *  track of it in an instance of that data type. 
 * 
 * 1. An instance is an individual case of a data type.
 */


// 1. Numbers //
/*
Numbers are a primitive data type. They include the set of all integers and
 floating point numbers.
*/

let amount = 6;
let price = 4.99;


// 2. Strings //
/*
Strings are a primitive data type. They are any grouping of characters (letters,
 spaces, numbers, or symbols) surrounded by single quotes ' or double quotes ".
*/

let single = 'Wheres my bandit hat?';
let double = "Wheres my bandit hat?";


// 3. Booleans //
/*
Booleans are a primitive data type. They can be either true or false.
*/

let lateToWork = true;


// 4. Arrays //
/*
Arrays are lists of ordered, stored data. They can hold items that are of any
 data type. Arrays are created by using square brackets, with individual elements
 separated by commas.
*/

// An array containing numbers
const numberArray = [0, 1, 2, 3];

// An array containing different data types
const mixedArray = [1, 'chicken', false];


// 5. Objects //
/*
An object is a built-in data type for storing key-value pairs. Data inside objects
 are unordered, and the values can be of any type.
*/

let student = {
    name: "Murphy",
    age: 31,
    enrolled: true
}


// 6. Functions //
/*
Functions are one of the fundamental building blocks in JavaScript. A function is a
 reusable set of statements to perform a task or calculate a value. Functions can be
 passed one or more values and can return a value at the end of their execution. In
 order to use a function, you must define it somewhere in the scope where you wish to
 call it.
*/

/*
The code example contains a function that takes in 2 values and returns the sum of
 those numbers.
*/

// Defining the function:
function sum(num1, num2) {
  return num1 + num2;
}

// Calling the function:
sum(3, 6); // 9


// 7. Undefined //
/*
undefined is a primitive JavaScript value that represents lack of defined value.
 Variables that are declared but not initialized to a value will have the value
 undefined.
*/

var a;

console.log(a);
// Prints: undefined


// 8. Null //
/*
Null is a primitive data type. It represents the intentional absence of value. In code,
 it is represented as null.
*/

let x = null;


// 9. Infinty and -Infinty //
/*
Infinity is a numeric value that represents positive infinity.
-Infinity is a numeric value that represents negative infinity.
Infinity is displayed when a number exceeds the upper limit of the floating point
 numbers, which is 1.797693134862315E+308.
-Infinity is displayed when a number exceeds the lower limit of the floating point
 numbers, which is -1.797693134862316E+308.
*/


// 10. Primitive Data //
/*
In JavaScript, a primitive (primitive value, primitive data type) is data that is not an
 object and has no methods. 
There are 7 primitive data types: string, number, bigint, boolean, undefined, symbol,
 and null.
Most of the time, a primitive value is represented directly at the lowest level of the
 language implementation.
All primitives are immutable, i.e., they cannot be altered. It is important not to
 confuse a primitive itself with a variable assigned a primitive value. The variable may
 be reassigned a new value, but the existing value can not be changed in the ways that
 objects, arrays, and functions can be altered.
*/

// Using a string method doesn't mutate the string
var bar = "baz";
console.log(bar);               // baz
bar.toUpperCase();
console.log(bar);               // baz

// Using an array method mutates the array
var foo = [];
console.log(foo);               // []
foo.push("plugh");
console.log(foo);               // ["plugh"]

// Assignment gives the primitive a new (not a mutated) value
bar = bar.toUpperCase();       // BAZ


// 11. BY COPY vs BY REFERENCE //
/*
Primitive data copys by value when assigned to a variable.
Complex data on the other hand copies by reference when assigned to a variable. This
 creates a dynamic where multiple variables can access and minipulate the same pieces
 of data.
*/