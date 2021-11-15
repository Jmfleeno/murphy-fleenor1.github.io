/*
 * String Manipulation:
 * 
 * 0. The String object is used to represent and manipulate a sequence of characters.
 * 
 * 1. Strings can be minipulated using operators to concatenate or methods to 
 *  minipulate. 
 * 
 * 2. Some of the most-used operations on strings are to check their length, to build
 *  and concatenate them using the + and += string operators, checking for the existence
 *  or location of substrings with the indexOf() method, or extracting substrings with
 *  the substring() method. 
 */

// 1. Using Operators //
/*
Using assignment operators, strings can be concatenated using the += operators, and
 using .length, strings can be compared using the ==, ===, !==, !=, <, >, <=, and >=
 operators.
*/

//example 1
let a = 'a'
let b = 'b'
if (a < b) { // true
  console.log(a + ' is less than ' + b)
} else if (a > b) {
  console.log(a + ' is greater than ' + b)
} else {
  console.log(a + ' and ' + b + ' are equal.')
}

//example 2
function isEqual(str1, str2){
    return str1.toUpperCase() === str2.toUpperCase()
} // isEqual



// 2. Using String Method //
/*
Simmilar to arrays and objects, there are special methods that can be applied to strings
 in order to minipulate them. Notable instacase include:
    -.includes()
    -.slice
    -.split
    -.toUpperCase
    -.toLowerCase
*/

// Includes method
const sentence = 'The quick brown fox jumps over the lazy dog.';
const word = 'fox';
console.log(`The word "${word}" ${sentence.includes(word) ? 'is' : 'is not'} in the sentence`);
// expected output: "The word "fox" is in the sentence"

// Slice method
const str = 'The quick brown fox jumps over the lazy dog.';
console.log(str.slice(31));
// expected output: "the lazy dog."
console.log(str.slice(4, 19));
// expected output: "quick brown fox"
console.log(str.slice(-4));
// expected output: "dog."
console.log(str.slice(-9, -5));
// expected output: "lazy"

//Split Method
const str = 'The quick brown fox jumps over the lazy dog.';
const words = str.split(' ');
console.log(words[3]);
// expected output: "fox"
const chars = str.split('');
console.log(chars[8]);
// expected output: "k"
const strCopy = str.split();
console.log(strCopy);
// expected output: Array ["The quick brown fox jumps over the lazy dog."]

//To Upper Case Method
const sentence = 'The quick brown fox jumps over the lazy dog.';
console.log(sentence.toLowerCase());
// expected output: "the quick brown fox jumps over the lazy dog."

//To Lower Case Method
const sentence = 'The quick brown fox jumps over the lazy dog.';
console.log(sentence.toUpperCase());
// expected output: "THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG."

