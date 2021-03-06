/*
Variables:

0. A variable is a container for a value, such as a number, string, boolean, array
 object, or another data-type. 

1. To create a variable we use the keyword “var”, "let", or "const" followed by the
 name or id of the variable 

2. There are two phases of using variables: declaration and initialization (or
 re-assignment)
*/

// 1. Declation and Assignment //
/*
To declare a variable use "var", "let", or "const" followed by the variable id.
To assign a variable use the variable id followed by an = and the value or object
 you want to reference.
Declaration and assignment can be done in the same step.
*/

var age;
let weight;
const numberOfFingers = 20;


// 2. Var, Let, and Const //
/*
Their are three different ways to declare a variable; "var", "let", and "const"
Each has its own properties with respect to their scope, use, and hoisting.
Var has a global and local scope and can be chaged at any time.
Let has a block scope and can be changed at any time.
Const has a block scope and can not be changed.
*/

// examples of variables
let name = "Tammy";
const found = false;
var age = 3;
console.log(name, found, age);
// Tammy, false, 3


// Hoisting //
/*
Hoisting is the default behavior of moving all the declarations (variable and function)
 to the top of the code before executing, regraless if its global or local.
Variable declared with “let” and “const”, as well as variables and functions within
 block scope, are not hoisted to the top of the code before exciting 
*/

console.log(counter); // undefined because it is hoisted due to var
var counter = 1;

console.log(counter);
let counter = 1;
//"ReferenceError: Cannot access 'counter' before initialization
//because of let