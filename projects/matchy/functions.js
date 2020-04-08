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

function search(list, animalName) {
    // Check every item in a list
    for (var i = 0; i < list.length; i++) {
        // If the name value of the item in the list matches the name input for the function
        if (list[i].name === animalName) {
            // Return the item in the list
            return list[i]
        // Otherwise, if the last item on the list is reached
        } else if (i === list.length-1) {
            // Stop checking and return 'null'
            return null
        }
    }
}

//////////////////////////////////////////////////////////////////////
// Step 2 - Replace //////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function replace(animals, name, replacement) {
    // Check every item in a list 
    for (var i = 0; i < animals.length; i++) {
        // If the name value of the item in the list matches the name input for the function
        if (animals[i].name === name) {
            // Replace the item in the list with a given replacement item
            animals.splice(i, 1, replacement)
        }
    }
}

//////////////////////////////////////////////////////////////////////
// Step 3 - Remove ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function remove(animals, name) {
    // Check every item in a list 
    for (var i = 0; i < animals.length; i++) {
        // If the name value of the item in the list matches the name input for the function
        if (animals[i].name === name) {
            // Remove the item from the list
            animals.splice(i, 1)
        }
    }
}

//////////////////////////////////////////////////////////////////////
// Step 4 - Add ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function add(animals, animal) {
    // If the name value and species value of a given animal both have a length greater than 0
    if (animal.name.length > 0 && animal.species.length > 0) {
        // Check every animal in the main list
        for (var i = 0; i < animals.length; i++) {
            // If the name value of an animal in the list matches the name value of the given animal
            if (animals[i].name === animal.name) {
                // Stop checking the list
                return null
            // Otherwise, if the last item of the list has been reached
            } else if (i === animals.length-1)
                // Add the animal to the list
                animals.push(animal)
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
