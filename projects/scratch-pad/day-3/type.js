// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: TYPE
 */

/** 
 * Given an input value, return true if the value is an Array, false if otherwise.
 * 
 * TIP: In JavaScript, how can we decipher if a value is an Array? Can typeof
 * work?
 */
 function isArray(value) {
    // YOUR CODE BELOW HERE //

    //create if statement to check if value is an array
    if (Array.isArray(value)) {
        //return true if value is equal to array
        return true;
        // return false if value is not equal to array
    } else {
        return false;
  }
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input value, return true if the value is an Object intended as a 
 * collection, false if otherwise.
 * 
 * TIP: In JavaScript, how can we decipher if a value is an Object, but not 
 * null, not an Array, not a Date - all of these will return 'object' if used 
 * with typeof.
 */
function isObject(value) {
    // YOUR CODE BELOW HERE //
    
    //if value is an object and is not an array, date, or null
    if(typeof value === "object" && Array.isArray(value) === false && value !== null && instanceof Date === false){
        //retrun true
        return true;
    //return false if not
    } else {
        return false;
    }
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input value, return true if is either an Array or an an Object 
 * intended as a collection, false if otherwise.
 * 
 * TIP: Similar to isObject, but we must return true if the value is an Array.
 */
function isCollection(value) {
    // YOUR CODE BELOW HERE //
    
    //if value is an object and is not an, date, or null (arrays are technically objects!)
    if(typeof value === "object" && value !== null && instanceof Date === false){
        //retrun true
        return true;
    //return false if not
    } else {
        return false
    }
    
    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input value, return the type of the value as a String
 * 
 * Types are one of: 
 *    - "string"
 *    - "array"
 *    - "object"
 *    - "undefined"
 *    - "number"
 *    - "boolean"
 *    - "null"
 *    - "function"
 *    - "date"
 * 
 * Examples:
 *    typeOf(134) -> "number"
 *    typeOf("javascript") -> "string"
 *    typeOf([1,2,3]) -> "array"
 */ 
function typeOf(value) {
    // YOUR CODE BELOW HERE //
    
    //if value === array
    if ((Array.isArray(value)){
        //return "array"
        return "array";
    //if value === object literal
    } else if (typeof value === "object" && Array.isArray(value) === false && value !== null && instanceof Date === false){
    //retrun "object"
        return "object";
    //if value === null
    } else if (value === null){    
        //return "null"
        return "null";
    //if value === date
    } else if (instanceof Date === true){
        //return "date"
        return "date";
    //else 
    } else {
        //return the type of value 
        return typeof value;
    }
    // YOUR CODE ABOVE HERE //
}

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.isArray = isArray;
    module.exports.isObject = isObject;
    module.exports.isCollection = isCollection;
    module.exports.typeOf = typeOf;
}
