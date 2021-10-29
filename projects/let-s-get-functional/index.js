// #!/usr/bin/env node

'use strict';

var customers = require('./data/customers.json');
var _ = require("underbar");
const { filter } = require('lodash');

/**
 * 1. Import your lodown module using the require() method,
 *    using the string 'lodown-<my-username>', or whatever
 *    name with which you published your npm lodown project.
 *
 * 2. Solve all problems as outlined in the README.
 *
 * 3. We started the first one for you as an example! Make the rest in that style.
 *
 * 4. To test your work, run the following command in your terminal:
 *
 *    npm start --prefix ./murphy-fleenor1.github.io/projects/let-s-get-functional
 *
 *    IMPORTANT: Make sure you replace <YOUR_GITHUB_FOLDER with your actual github folder name that is in your workspace.
 */

var maleCount = function(array) {
    var men = filter(array, function(customer, {array[i].gender === "male"}));
    retrun men.length;
};

var femaleCount = function(array) {
    var women = filter(array, function(customer, {array[i].gender === "female"}));
    return reduce(women);
};

var oldestCustomer = function(array){
  var oldest = array[0];
  for(var i = 1; i < array.length; i++){
    if(array[i].age > oldest.age){
      oldest = array[i]
    }
  }
  return oldest;
};

var youngestCustomer = function(array){
  var youngest = array[0];
  for(var i = 1; i < array.length; i++){
    if(array[i].age < youngest.age){
      youngest = array[i]
    }
  }
  return youngest;
};

var averageBalance = function(array){
    var average = 0;

    return average;
};

var firstLetterCount = function(array, letter){
    var count = 0;

    return count;
};

var friendFirstLetterCount = function (array, customer, letter){
    var count = 0;
    var friendCount = 0;

    return friendCount;
};

var friendsCount = function(array, name){
    var friendsOf = [];

    return friendsOf;
};

var topThreeTags = function(array){
    var tags = [];

    return tags;
};

var genderCount = function(array){
    var genderNotes = {};
    //use <reduce> method
    return genderNotes;
};

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// here, export any references you need for tests //
module.exports.maleCount = maleCount;
module.exports.femaleCount = femaleCount;
module.exports.oldestCustomer = oldestCustomer;
module.exports.youngestCustomer = youngestCustomer;
module.exports.averageBalance = averageBalance;
module.exports.firstLetterCount = firstLetterCount;
module.exports.friendFirstLetterCount = friendFirstLetterCount;
module.exports.friendsCount = friendsCount;
module.exports.topThreeTags = topThreeTags;
module.exports.genderCount = genderCount;