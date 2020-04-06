// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: LOOPS
 */

/** 
 * Given an input Array, loop forward over the Array and print its values 
 * using console.log().
 */
function printArrayValues(array) {
  // YOUR CODE BELOW HERE //
  
  // Starting from 0, loop through each index of array until index is no longer less than arrays total length, displaying each value to console
  for (var i = 0; i < array.length; i++) {
    console.log(array[i])
  }
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Array, loop backwards over the Array and print its values 
 * using console.log().
 */
function printArrayValuesInReverse(array) {
  // YOUR CODE BELOW HERE //
  
  // Starting from last index of array, loop through with increment of -1 until reaching 0, displaying each value to console
  for (var i = array.length-1; i >= 0; i--) {
    console.log(array[i])
  }
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, return an Array containing the Object keys.
 */
function getObjectKeys(object) {
  // YOUR CODE BELOW HERE //
  
  var array = []  // Initialize variable "array" as an array
  var count = 0   // Initialize variable "count" to 0 to use for counter in for-in loop
  
  for (var key in object) { // Use for-in loop to cycle through all keys of object
    array[count] = key  // Set current key equal to current index of array
    count++ // Increment counter for next array index
  }
  
  return array  // Return the final "array" array
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, loop over the Object and print its keys 
 * using console.log().
 */
function printObjectKeys(object) {
  // YOUR CODE BELOW HERE //
  
  for (var key in object) { // Use for-in loop to cycle through all keys of object
    console.log(key)  // Print current key to console
  }
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, return an Array containing the Object's values.
 */
function getObjectValues(object) {
  // YOUR CODE BELOW HERE //
  
  var array = []  // Initialize variable "array" as an array
  var count = 0   // Initialize variable "count" to 0 to use for counter in for-in loop
  
  for (var key in object) { // Use for-in loop to cycle through all keys of object
    array[count] = object[key]  // Set current key value equal to current index of array
    count++ // Increment counter for next array index
  }
  
  return array  // Return the final "array" array
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, loop over the Object and print its values 
 * using console.log().
 */
function printObjectValues(object) {
  // YOUR CODE BELOW HERE //
  
  for (var key in object) { // Use for-in loop to cycle through all keys of object
    console.log(object[key])  // Print current key value to console
  }
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, return the length of its key/value pairs
 */
function getObjectLength(object) {
  // YOUR CODE BELOW HERE //
  
  // Convert object keys to array (I just realized I totally could've used Object.keys for an earlier problem) and return length of array
  return Object.keys(object).length
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, how might we loop over the Object IN REVERSE and 
 * print its values using console.log()?
 */
function printObjectValuesInReverse(object) {
  // YOUR CODE BELOW HERE //
  
  var array = Object.values(object) // Convert key values to new array called "array"
  
  for (var i = array.length-1; i >= 0; i--) { // Loop through array starting at last index and ending at 0
    console.log(array[i]) // Display current index value to console
  }
  
  // YOUR CODE ABOVE HERE //
}





// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.printArrayValues = printArrayValues;
    module.exports.printArrayValuesInReverse = printArrayValuesInReverse;
    module.exports.printObjectValues = printObjectValues;
    module.exports.getObjectValues = getObjectValues;
    module.exports.getObjectKeys = getObjectKeys;
    module.exports.printObjectKeys = printObjectKeys;
    module.exports.getObjectLength = getObjectLength;
    module.exports.printObjectValuesInReverse = printObjectValuesInReverse;
}
