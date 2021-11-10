// #!/usr/bin/env node

'use strict';

var customers = require('./data/customers.json');
var _ = require("underbar");
// const { filter } = require('lodash');

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
    var men = _.filter(array, function(element){
      if (element.gender === "male"){
        return true
      } else {
        return false
      }
    });
    return men.length;
};

var femaleCount = function(array) {
  var women = _.filter(array, function(element){
    if (element.gender === "female"){
      return true
    } else {
      return false
    }
  });
  return women.length;
};

var oldestCustomer = function(array){
  var oldest = _.reduce(array, function(previous, current){
    if (previous.age < current.age) {
      return current;
    } else {
      return previous;
    }
  });
  return oldest.name;
}

var youngestCustomer = function(array){
  var youngest = _.reduce(array, function(previous, current){
    if (previous.age > current.age) {
      return current;
    } else {
      return previous;
    }
  });
  return youngest.name;
}

var averageBalance = function(array){ 
  var customerBalanceArr = _.map(array, customer => customer.balance);
  var customerNum = _.reduce(array, (total, customer) => {
    total += 1;
    return total;
  }, 0);
  var averageCustomerBalance = customerBalanceArr/customerNum
  return averageCustomerBalance;
};

var firstLetterCount = function(array, letter){
    var nameList = _.filter(array, (customer, letter) => {
      if(customer.name[0].toUpperCase() === letter.toUpperCase()){
        return true;
      } else {
        return false;
      }
    });
  return nameList.length;
}

var friendFirstLetterCount = function (array, customer, letter){
  let customerFriends = customer.friends
  let customerFriendsWithFirstLetter = _.map(customerFriends, (friend, letter) => {
    if (friend.name[0].toUpperCase() = letter.toUpperCase()){
      return true;
    } else {
      return false;
    }
  });
  return customerFriendsWithFirstLetter.length;
};

var friendsCount = function(array, name){
    var friendsOf = array.filter(function(customer){
    });
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
