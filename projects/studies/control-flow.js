/*
 * Control Flow:
 *
 * 0. Control flow is the order in which statements are executed in a program.
 *  
 * 1. The default control flow is for statements to be read and executed in order
 *  from left-to-right, top-to-bottom in a program file.
 *
 * 2. Control structures such as conditionals (if statements and the like) alter
 *  control flow by only executing blocks of code if certain conditions are met.
 * 
 * 3. These structures essentially allow a program to make decisions about which
 *  code is executed as the program runs.
 */


// 1. If Statements //
/*
An if statement accepts an expression with a set of parentheses:
If the expression evaluates to a truthy value, then the code within its code body
 executes.
If the expression evaluates to a falsy value, its code body will not execute.
*/

const isMailSent = true;
if (isMailSent) {
  console.log('Mail sent to recipient');
}


// 2. Else-If Statements //
/*
After an initial if block, else if blocks can each check an additional condition.
 An optional else block can be added after the else if block(s) to run by default
 if none of the conditionals evaluated to truthy.

*/

const size = 10;
if (size > 100) {
  console.log('Big');
} else if (size > 20) {
  console.log('Medium');
} else if (size > 4) {
  console.log('Small');
} else {
  console.log('Tiny');
}


// 3. Else Statements //
/*
An else block can be added to an if block or series of if-else if blocks. The
 else block will be executed only if the if condition fails.
*/

const isTaskCompleted = false;
if (isTaskCompleted) {
  console.log('Task completed');
} else {
  console.log('Task incomplete');
}


// 4. Switch Statements //
/*
The switch statements provide a means of checking an expression against multiple
 case clauses. If a case matches, the code inside that clause is executed.
The case clause should finish with a break keyword. If no case matches but a
 default clause is included, the code inside default will be executed.
Note: If break is omitted from the block of a case, the switch statement will
 continue to check against case values until a break is encountered or the flow
 is broken.
*/

const food = 'salad';
switch (food) {
  case 'oyster':
    console.log('The taste of the sea 🦪');
    break;
  case 'pizza':
    console.log('A delicious pie 🍕');
    break;
  default:
    console.log('Enjoy your meal');
}   // Prints: Enjoy your meal
