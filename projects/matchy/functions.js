/**
 * Part 2
 *
 * In this file, we're going to create some
 * Functions to work with our data created in
 * data.js.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Search ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

//create function "search" with paramaters "animalArr" and "animalStr"
function search (animalArr, animalStr){
    //iterate through parameter "animalArr" to find parameter "animalStr"
    for (var i = 0; i < animalArr.length; i++) {
        if (animalArr[i].name === animalStr) {
            return animalArr[i];
        }
    }
    return null;
}

//////////////////////////////////////////////////////////////////////
// Step 2 - Replace //////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

//create function <replace> with parameters <(animals, name, replacement)>
function replace (animals, name, replacement) {
    for (var i = 0; i < animals.length; i++) {
        if (animals[i].name === name) {
            animals[i].name === replacement;
        }
    }
}
//////////////////////////////////////////////////////////////////////
// Step 3 - Remove ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

//create function <remove> with parameters <(animals, name)>
function remove (animals, name) {
    for (var i = 0; i < animals.length; i++) {
        if (animals[i]["name"] === name) {
             animals.splice(animals[i]);
        }
    }
}

//////////////////////////////////////////////////////////////////////
// Step 4 - Add ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

//create function <add> with parameters <(aminals, animal)>
function add (animals, animal) {
    if (animal.name.length > 0) {
        if (animal.species.length > 0) {
            for (var i = 0; i < animals.length; i++) {
                if (animals[i].name !== animal.name)
                    animals.push.animal;
            }
        }
    } 
}

/**
 * You did it! You're all done with Matchy!
 */

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var search, replace, remove, add;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    module.exports.search = search || null;
    module.exports.replace = replace || null;
    module.exports.remove = remove || null;
    module.exports.add = add || null;
}
