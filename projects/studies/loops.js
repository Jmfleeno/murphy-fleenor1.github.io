/*
 * Loops:
 * 
 * 0. A loop is a programming tool that is used to repeat a set of instructions.
 *  Iterate is a generic term that means “to repeat” in the context of loops. 
 * 
 * 1. A loop will continue to iterate until a specified condition, commonly known as a
 *  stopping condition, is met.
 */

// 1. While, For and For-In Loops //
/*
The while loop creates a loop that is executed as long as a specified condition
 evaluates to true. The loop will continue to run until the condition evaluates to
 false. The condition is specified before the loop, and usually, some variable is
 incremented or altered in the while loop body to determine when the loop should stop.
A for loop declares looping instructions, with three important pieces of information
 separated by semicolons:
    1. The initialization defines where to begin the loop by declaring (or referencing)
     the iterator variable
    2. The stopping condition determines when to stop looping (when the expression
     evaluates to false)
    3. The iteration statement updates the iterator each time the loop is completed
The for...in loop can be used to iterate over the keys of an object. In each
 iteration, one of the properties from the object is assigned to the variable of that
 loop.
*/

//while loop example
while (condition) {
    // code block to be executed
  }
  let i = 0;
  while (i < 5) {        
    console.log(i);
    i++;
  }
  
//for loop example
for (let i = 0; i < 4; i += 1) {
    console.log(i);
  };  // Output: 0, 1, 2, 3
  
//for-in loop example
let mobile = {
    brand: 'Samsung',
    model: 'Galaxy Note 9'
  };
  for (let key in mobile) {
    console.log(`${key}: ${mobile[key]}`);
  }
  

// 2. Looping Forwards and Backwards //
/*
A for loop can iterate “in reverse” by initializing the loop variable to the starting
 value, testing for when the variable hits the ending value, and decrementing
 (subtracting from) the loop variable at each iteration.
*/

//forwards loop
for (let i = 0; i < 4; i += 1) {
    console.log(i);
  };// Output: 0, 1, 2, 3

//reversed loop
const items = ['apricot', 'banana', 'cherry'];
for (let i = items.length - 1; i >= 0; i -= 1) {
  console.log(`${i}. ${items[i]}`);
}
    // Prints: 2. cherry
    // Prints: 1. banana
    // Prints: 0. apricot


// 3. Looping Forwards and Backwards in Arrays in Arrays //
/*
An array’s length can be evaluated with the .length property. This is extremely helpful
 for looping through arrays, as the .length of the array can be used as the stopping
 condition in the loop.
A nested for loop is when a for loop runs inside another for loop.
The inner loop will run all its iterations for each iteration of the outer loop.
*/

//looping forward through an array
for (let i = 0; i < array.length; i++){
    console.log(array[i]);
  } // Output: Every item in the array

//looping backwards through an array
for (let i = array.length-1; i > 0; i--){
    console.log(array[i]);
  } // Output: Every item in the array in reverse

//looping through a nested array
for (let outer = 0; outer < 2; outer += 1) {
    for (let inner = 0; inner < 3; inner += 1) {
      console.log(`${outer}-${inner}`);
    }
  }
    /*
    Output:
    0-0
    0-1
    0-2
    1-0
    1-1
    1-2
    */
  

// 4. Looping Forwards and Backwards in Arrays in Objects //
/*
If an array is nested in an object, you can access it the same as an array nested in an
 array, except the first loop (and any other objects nested) needs to be itereated
 through with a for-in loop.
*/

//looping through a nested array in object
let exObj = {
    a: [1,2,3],
    b: [5,6]
}
for (let key in exObj) {
    for (let i = 0; i < exObj[key].length; i++){
        console.log(exObj[key][i]);
    }
}   // Prints: 1, 2, 3, 5, 6

