/**
 * Part 1
 *
 * In this file, we're going to practice
 * creating and accessing data structues.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Object Creation //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

//create a variable named "animal" assigned to empty object
var animal = {};
//give object "animal" a key named "species" with a value of any animal using dot notation
animal.species = "dog";
//give object "animal" a key named "name" with bracket notation
animal["name"] = "Dog";
//give object "animal" a key named "noises" with an empty array
animal.noises = [];
//console.log object "animal" 
console.log(animal);

//////////////////////////////////////////////////////////////////////
// Step 2 - Array Creation ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

//create a var "noises" assigned to empty array
var noises = [];
//give array "noises" a value using bracket notation
noises[0] = "bark";
//give array "noises" another value at the beginning, using an array function
noises.unshift("wine");
//give array "noises" another value using bracket syntax
noises[noises.length] = "roar";
noises.push("bow");
//print the length of the array "noises"
console.log(noises.length);
//print the last element  in the array "noises"
console.log(noises[noises.length]);
//print the array "noises"
console.log(noises);

//////////////////////////////////////////////////////////////////////
// Step 3 - Combining Step 1 and 2 ///////////////////////////////////
//////////////////////////////////////////////////////////////////////

//assign array "noises" to the object "animal" key "noises"
animal.noises = noises;
//add another value to the array "noises" within the object "animal"
animal["noises"].push("shout");
//print object "animal"
console.log(animal);

/* *******************************************************************
 * Step 4 - Review
 *
 * 1. What are the different ways you can access properties on objects?
 *      - Dot notation, bracket notation, 
 * 2. What are the different ways of accessing elements on arrays?
 *      - Bracket notation
 * *******************************************************************
 */

/* *******************************************************************
 * Step 5 - Take a Break!
 *
 * It's super important to give your brain and yourself
 * a rest when you can! Grab a drink and have a think!
 * For like 10 minutes, then, BACK TO WORK! :)
 * *******************************************************************
 */

//////////////////////////////////////////////////////////////////////
// Step 6 - A Collection of Animals //////////////////////////////////
//////////////////////////////////////////////////////////////////////

//create variable "animals" assigned to an empty array
var animals = [];
//push object "animal" in array "animals"
animals.push(animal);
//print array "animals"
console.log(animals);
//create a object "duck" with given key/value pairs
var duck = {
  species: 'duck',
  name: 'Jerome',
  noises: ['quack', 'honk', 'sneeze', 'woosh']
};
//push object "duck" into array "animals"
animals.push(duck);
//print array "animals"
console.log(animals);
//create two more animal objects mimiking object "duck"
var cat = {
  species: 'cat',
  name: 'kitty',
  noises: ['hiss', 'meow']
};
var lion = {
  species: 'lion',
  name: 'Simba',
  noises: ['roar', 'hiss']
};
//push new animal objects into array "animals"
animals.push(cat);
animals.push(lion);
//print array "animals"
console.log(animals);

//////////////////////////////////////////////////////////////////////
// Step 7 - Making Friends ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

//chose a data struchter for your friends list and explain choice
//  - arrays are best when collecting lists of data
//create an array "friends" 
var friends = [];
//create a function "getRandom" that takes array "animal" and returns a random value from the array
function getRandom(arr, min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return arr[Math.floor(Math.random() * (max - min) + min)];
};
//push a random value from array "animals" in the array "friends" using the function "getRandom"
friends.push(getRandom(animals, 0, animals.length-1));
//print array "friends"
console.log(friends);
//add array "friends" as a property of object "duck" under the key "friends"
duck["friends"] = friends;
//print object "duck"
console.log(duck);


/**
 * Nice work! You're done Part 1. Pat yourself on the back and
 * move onto Part 2 in the file called "functions.js"
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var animal, noises, animals, friends, getRandom;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
     module.exports.animal = animal || null;
     module.exports.noises = noises || null;
     module.exports.animals = animals || null;
     module.exports.friends = friends || null;
     module.exports.getRandom = getRandom || null;
}