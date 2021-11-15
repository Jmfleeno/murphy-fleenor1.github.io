/*
 * Operators:
 * 
 * 0. Operators allow you to manipulate, compare, and assigne values and variables.
 * 
 * 1. There are 5 main types of operators within Javascript.
 * 
 * 2. These include assignemnt operators, arithmetic operators, comparison operators,
 *  logical operators, and unary operators.
 */

// 1. Assignment Operators //
/*
An assignment operator assigns a value to its left operand based on the value of its
 right operand. Here are some of them:
+= addition assignment
-= subtraction assignment
*= multiplication assignment
/= division assignment
*/

let number = 100;

// Both statements will add 10
number = number + 10;
number += 10;

console.log(number);
// Prints: 120


// 2. Arithmetic Operators //
/*
Arithmetic operators are used to pre fore arithmetic on numbers
These include addition(+), subtraction(-), multiplication(*), exponentiation(**),
 division(/), remainder/modulus(%), increment(++), and decrement(—)
The addition operator(+) and the addition assignment operator(+=) can also be used to
 concatenate strings
If a string is added to a number the number becomes a string
*/

// Addition
5 + 5;
// Subtraction
10 - 5;
// Multiplication
5 * 10;
// Division
10 / 5;
// Modulo
10 % 5;


// 3. Comparison Operators //
/*
Comparison operators are used to comparing two values and return true or false depending
 on the validity of the comparison:
=== strict equal
!== strict not equal
> greater than
>= greater than or equal
< less than
<= less than or equal
*/

1 > 3;      // false
3 > 1;      // true
250 >= 250; // true
1 === 1;    // true
1 === 2;    // false
1 === '1';  // false


// 4. Logical Operators //
/*
Logical operators allow you to compare multiple things at once.
These include logical and(&&), logical or(||), and logical not(!)
The logical AND operator && checks two values and returns a boolean. If both values are
 truthy, then it returns true. If one, or both, of the values is falsy, then it returns
 false.
The logical OR operator || checks two values and returns a boolean. If one or both
 values are truthy, it returns true. If both values are falsy, it returns false.
The logical NOT operator ! can be used to do one of the following:
    - Invert a Boolean value.
    - Invert the truthiness of non-Boolean values.
*/

// and operator
true && true;      // true
1 > 2 && 2 > 1;    // false
true && false;     // false
4 === 4 && 3 > 1;  // true

// or operator
true || false;        // true
10 > 5 || 10 > 20;    // true
false || false;       // false
10 > 100 || 10 > 20;  // false

// bang/not operator
let lateToWork = true;
let oppositeValue = !lateToWork;
console.log(oppositeValue); // Prints: false


// 5. Unary Operators (typeof, -) //
/*
A unary operation is an operation with only one operand.
Examples included: delete, typeOf, and in 
The typeof operator returns a string indicating the type of the unevaluated operand. 
 operand is the string, variable, keyword, or object for which the type is to be returned.
*/

console.log(typeof 42);
// expected output: "number"

console.log(typeof 'blubber');
// expected output: "string"

console.log(typeof true);
// expected output: "boolean"

console.log(typeof undeclaredVariable);
// expected output: "undefined"


// Ternary Operators (a ? b: C) //
/*
The ternary operator allows for a compact syntax in the case of binary (choosing
 between choices) decisions. It accepts a condition followed by a ? operator, and then
 two expressions separated by a :. If the condition evaluates to truthy, the first
 expression is executed, otherwise, the second expression is executed.
*/

let price = 10.5;
let day = "Monday";

day === "Monday" ? price -= 1.5 : price += 1.5;
console.log(price); // Prints: 9
