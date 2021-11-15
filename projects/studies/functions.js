/*
 * Functions:
 * 
 * 0. Functions are one of the fundamental building blocks in JavaScript. 
 * 
 * 1. A function is a reusable set of statements to perform a task or calculate a value.
 * 
 * 2. Functions can be passed one or more values and can return a value at the end of
 *  their execution. In order to use a function, you must define it somewhere in the
 *  scope where you wish to call it.
 */

// 1. Defining and Calling Functions //
/*
Function declarations are used to create named functions. These functions can be called
 using their declared name. Function declarations are built from:
    - The function keyword.
    - The function name.
    - An optional list of parameters separated by commas enclosed by a set of 
     parentheses ().
    - A function body enclosed in a set of curly braces {}.
Functions can be called, or executed, elsewhere in code using parentheses following the
 function name. When a function is called, the code inside its function body runs.
*/

// Defining the function
function sum(num1, num2) {
    return num1 + num2;
  }
  
// Calling the function
sum(2, 4); // 6
  
  

// 2. Parameters vs. Arguments //
/*
Parameters are inputs to functions are known as parameters when a function is declared
 or defined. Parameters are used as variables inside the function body. 
When the function is called, these parameters will have the value of whatever is passed
 in as arguments. It is possible to define a function without parameters.
*/

// The parameter is name
function sayHello(name) {
    return `Hello, ${name}!`;
  }
// The argumet is "Murphy"
sayHello("Murphy");
  

// 3. Named Function Syntax //

function rocketToMars() {
    return 'BOOM!';
  }


// 4. Assiging Functions to a Variable //
/*
Anonymous functions in JavaScript do not have a name property. They can be defined
 using the function keyword, or as an arrow function. See the code example for the
 difference between a named function and an anonymous function.
Function expressions create functions inside an expression instead of as a function
 declaration. They can be anonymous and/or assigned to a variable.
*/

// Anonymous function assigned to a variable
const rocketToMars = function() {
    return 'BOOM!';
  }

// Function expression
const dog = function() {
    return 'Woof!';
  }  


// 5. Specifing Inputs and Outputs //
/*
Functions input (pass in) values using parameters.
Functions return (pass back) values using the return keyword. return ends function
 execution and returns the specified value to the location where it was called. A
 common mistake is to forget the return keyword, in which case the function will return
 undefined by default.
*/

// With return
function sum(num1, num2) {
    return num1 + num2;
}
  
// Without return, so the function doesn't output the sum
function sum(num1, num2) {
    num1 + num2;
}
  

// 6. Parent Scope vs. Global Scope //
/*
Scope is a concept that refers to where values and functions can be accessed.
Various scopes include:
    - Global scope (a value/function in the global scope can be used anywhere in the
     entire program)
    - File or module scope (the value/function can only be accessed from within the
     file)
    - Function scope (only visible within the function),
    - Code block scope (only visible within a { ... } codeblock)
const and let are block scoped variables, meaning they are only accessible in their
 block or nested blocks. In the given code block, trying to print the statusMessage
 using the console.log() method will result in a ReferenceError. It is accessible only
 inside that if block.
JavaScript variables that are declared outside of blocks or functions can exist in the
 global scope, which means they are accessible throughout a program. Variables declared
 outside of smaller block or function scopes are accessible inside those smaller scopes.
*/

// Function Scope example
function myFunction() {
    var pizzaName = "Volvo";
    // Code here can use pizzaName
    }
    // Code here can't use pizzaName
  
// Block Scoped example
const isLoggedIn = true;
if (isLoggedIn == true) {
    const statusMessage = 'User is logged in.';
}
console.log(statusMessage);  
// Uncaught ReferenceError: statusMessage is not defined

// Global Scope example
const color = 'blue';
function printColor() {
  console.log(color);
}
printColor(); // Prints: blue


// 7. Closures //
/*
A closure is the combination of a function bundled together (enclosed) with references
 to its surrounding state (the lexical environment). In other words, a closure gives you
 access to an outer function’s scope from an inner function. In JavaScript, closures
 are created every time a function is created, at function creation time.
*/

// Lexical Scoping example (as apposed to...)
function init() {
    var name = 'Mozilla'; // name is a local variable created by init
    function displayName() { // displayName() is the inner function, a closure
      alert(name); // use variable declared in the parent function
    }
    displayName();
  }
  init();

// Closure example
function makeFunc() {
    var name = 'Mozilla';
    function displayName() {
      alert(name);
    }
    return displayName;
  }
  
  var myFunc = makeFunc();
  myFunc();
  

  
