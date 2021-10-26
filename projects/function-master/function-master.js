//////////////////////////////////////////////////////////////////////
// Function 1 - Object Values ////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function objectValues(object) {
    return (Object.values(object));
} 

//////////////////////////////////////////////////////////////////////
// Function 2 - Keys to String ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function keysToString(object) {
    let keyArr = (Object.keys(object));
    return keyArr.join(' ');
}

//////////////////////////////////////////////////////////////////////
// Function 3 - Values to String /////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function valuesToString(object) {
    let valArr = [];
    for (var key in object) {
        if (typeof object[key] === "string"){
            valArr.push(object[key]);
        }
        } 
        return valArr.join(" ");
    } 

//////////////////////////////////////////////////////////////////////
// Function 4 - Array or Object //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function arrayOrObject(collection) {
    //return array if array
    if (Array.isArray(collection) === true){
        return 'array';
    } else {
    //return object if object
        return 'object';
    }
}

//////////////////////////////////////////////////////////////////////
// Function 5 - Capitalize Word //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeWord(string) {
    let strEnd = string.slice(1);
    let strStart = string.charAt(0);
    let upperStrStart = strStart.toUpperCase();
    let upperStr = upperStrStart + strEnd;
    return upperStr;
    }

//////////////////////////////////////////////////////////////////////
// Function 6 - Capitalize All Words /////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeAllWords(string) {
    // create array "wordsArr" that hold all the words within the parameter "string" 
    let wordsArr = string.split(" ");
    // loop through "wordsArr" 
    for (let i = 0; i < wordsArr.length; i++) {
        // capitilie the first letter of each word
        wordsArr[i] = wordsArr[i][0].toUpperCase() + wordsArr[i].substr(1);
    }
     // join back the words from array "wordsArr" array to form a string
    return wordsArr.join(" ");
}

//////////////////////////////////////////////////////////////////////
// Function 7 - Welcome Message //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function welcomeMessage(object) {
    return `Welcome ${capitalizeWord(object.name)}!`;
}

//////////////////////////////////////////////////////////////////////
// Function 8 - Profile Info /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function profileInfo(object) {
    return `${capitalizeWord(object.name)} is a ${capitalizeWord(object.species)}`;
}

//////////////////////////////////////////////////////////////////////
// Function 9 - Maybe Noises /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function maybeNoises(object) {
    if (object.noises && object.noises.length !== 0) {
        var noisesArr =  object.noises.join(" ");
        return noisesArr;
    } else {
        return `there are no noises`;
    }
}

//////////////////////////////////////////////////////////////////////
// Function 10 - Has Words ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function hasWord(string, word) {
// create array "strWords" for words within parameter "string"
    var strWords = string.split(" ");
// loop through array "strWords" checking for parameter "word"
    for (let i = 0; i < strWords.length; i++) {
        if (word === strWords[i]){
            // return ture if word is in array 
            return true;
        }
    }
return false;
}

//////////////////////////////////////////////////////////////////////
// Function 11 - Add Friend //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function addFriend (name, object) {
    // add parameter "name" to property "friends" of parameter "object"
    object.friends.push(name);
    // return parameter "object"
    return object;
} 

//////////////////////////////////////////////////////////////////////
// Function 12 - Is Friend ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function isFriend(name, object) {
    // if there is no "friends" property within parameter "object"
    if (object.friends === undefined){
        return false;
    }
    // loop through "friends" property of parameter "object"
    for(var i = 0; i < object.friends.length; i++){
    // if parameter "name" matches a value within the "friends" property of "object":
        if(name === object.friends[i]){
            //return true
            return true;
        } 
    }
    //else return false
    return false
}

//////////////////////////////////////////////////////////////////////
// Function 13 - Non-Friends /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// function nonFriends(name, array) {
//     // create array "arrFriends" for the properties in "friends" of parameter "name"
//     var arrFriends = name.friends;
//     // loop through "arrFriends" array
//     for(var i = 0; i < arrFriends.length; i++){
//     // if the iteration of array "arrFriends" does not matches a value within the parameter "array":
//         if(name === object.friends[i]){
//             //return true
//             return true;
//         } 
//     }
//     //else return false
//     return false
// }

//////////////////////////////////////////////////////////////////////
// Function 14 - Update Object ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// function updateObject(object, key, value) {
//     // update parameter "object" with parameters "key" and "value" as a key/value pair
//     object.key = value;
// }

//////////////////////////////////////////////////////////////////////
// Function 15 - Remove Properties ///////////////////////////////////
//////////////////////////////////////////////////////////////////////

// function removeProperties(object, array) {
//     // iterating through the parameter "array"
//     for (var i = 0; i < array.length; i++){
//         //if parameter "object" has any of the words iterated in the "array" parameter as keys
//         if (array[i] === ("key" in object);)
//      // remove the word itereated in the "array" parameter
//      delete object.array[i];
//     }
// }

//////////////////////////////////////////////////////////////////////
// Function 16 - Dedup ///////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function dedup(array) {

}

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.objectValues = objectValues;
    module.exports.keysToString = keysToString;
    module.exports.valuesToString = valuesToString;
    module.exports.arrayOrObject = arrayOrObject;
    module.exports.capitalizeWord = capitalizeWord;
    module.exports.capitalizeAllWords = capitalizeAllWords;
    module.exports.welcomeMessage = welcomeMessage;
    module.exports.profileInfo = profileInfo;
    module.exports.maybeNoises = maybeNoises;
    module.exports.hasWord = hasWord;
    module.exports.addFriend = addFriend;
    module.exports.isFriend = isFriend;
    module.exports.nonFriends = nonFriends;
    module.exports.updateObject = updateObject;
    module.exports.removeProperties = removeProperties;
    module.exports.dedup = dedup;
}