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

// Create placeholder for an animal description
var animal = {}
// Add a species of cat to the description
animal.species = "cat"
// Name the cat fluffy and add its name to the description
animal["name"] = "Fluffy"
// Create a placeholder for a list of noises the animals makes and add it as well
animal.noises = []
// Show the description of the animal on the console
console.log(animal)


//////////////////////////////////////////////////////////////////////
// Step 2 - Array Creation ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// Create an empty array called 'noises'
var noises = [];
// Using bracket notation add an element to the array with a string
noises[0] = 'meow';
// Using an array funcction, add another noise element to the array.
noises.push('hiss');
// Add another element to the array using another array function.
noises.unshift('purr');
// Using bracket notation, add an element at the end of the array.
noises[noises.length] = 'yowl'
// Log the length of noises array to the console.
console.log(noises.length);
// Log the last element of the noises array without hard coding.
console.log(noises[noises.length - 1]);
// Log the noises array to the console.
console.log(noises);


//////////////////////////////////////////////////////////////////////
// Step 3 - Combining Step 1 and 2 ///////////////////////////////////
//////////////////////////////////////////////////////////////////////

// Add list of noises to new key in 'animal' object called 'noises'
animal['noises'] = noises
// Add 'chirp' to original list of noises
noises.push('chirp')
// Show the properties of the animal on the console
console.log(animal)


/* *******************************************************************
 * Step 4 - Review
 *
* 1. What are the different ways you can access properties on objects?
* We can access properties on objects by using dot notation (object.key) to
* return key values. We can also use bracket notation to access properties
* on objects with object["key"] to return the value.
*
* To access all properties on objects at once, we can use for-in loops.
* with for (var key in object) {
* console.log(key);
* console.log(object[key]);
* 2. What are the different ways of accessing elements on arrays?
*
* We can access elements of arrays using bracket notation arr[index] and
* for loops.
*
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

// Create a blank list for animals
var animals = []
// Add the previously created animal to the animals list 
animals.push(animal)
// Show the list on the console
console.log(animals)
// Create a duck object for the list
var duck = { species: 'duck', name: 'Jerome', noises: ['quack', 'honk', 'sneeze', 'woosh'] }
// Add the duck to the animals list
animals.push(duck)
// Show the animals list on the console
console.log(animals)
// Create a duck object for the list
var bear = { species: 'bear', name: 'Winnie The Pooh', noises: ['growl', 'zzz'] }
// Create a bear object for the list
var mouse = { species: 'mouse', name: 'Tom', noises: ['squeak', 'silence'] }
// Add the bear and duck to the animals list
animals.push(bear, mouse)
// Show the animals list on the console
console.log(animals)
// Show the number of animals in the list on the console
console.log(animals.length)

//////////////////////////////////////////////////////////////////////
// Step 7 - Making Friends ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// 1. array

// 2. We chose an array for our data structure because it is an ideal data structure for holding lists, and it will be able to hold any objects.

// 3. Create a placeholder for a friends list
var friends = [];
// 5.
function getRandom (array) {
    // Get a random index number from a given array
    return Math.floor(Math.random() * array.length)
}
// Add a random name from the animals list to a new list called friends
friends.push(animals[getRandom(animals)].name)
// Show the friends list on the console
console.log(friends)
// Give cat a friends section with the friends list in it
animal["friends"] = friends
// Show the full cat details on the console
console.log(animal)

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