////////////////////////////////////////////////////////////////////////////////
// range ///////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function range(start, end, step) {
  // Create empty array
  var array = [];
  // If step is 0 or undefined
  if (!step) {
    // Set 'step' to 1
    step = 1
  } 
  // Set 'min' to lowest of 2 numbers
  var min = Math.min(start, end)
  // Set 'max' to highest of 2 numbers
  var max = Math.max(start, end)
  
  // If the 2 numbers are not equal and the step is not negative
  if (start !== end && step > 0) {
    // For every number from min to max (inclusive), counting 'step' at a time
    for (var i = min; i <= max; i += step) {
      // Add the number to the array
      array.push(i)
    }
  }
  // Return the array
  return array;
}

////////////////////////////////////////////////////////////////////////////////
// sum /////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function sum(array) {
  // Set 'sum' to 0
  var sum = 0
  // For every value in an array
  for (var i = 0; i < array.length; i++) {
    // Add the value to 'sum'
    sum += array[i]
  }
  // Return the sum
  return sum
}

////////////////////////////////////////////////////////////////////////////////
// reverseArray ////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function reverseArray(array) {
  // Create empty array to hold the reversed of the input array
  var reversed = []
  // From the last value of the input array to the first
  for (var i = array.length-1; i >= 0 ; i--) {
    // Add each value to the new array
    reversed.push(array[i])
  }
  // Return the new array
  return reversed
}

////////////////////////////////////////////////////////////////////////////////
// reverseArrayInPlace /////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function reverseArrayInPlace(array) {
  // Create a clone of the input array
  var cloneArray = array.slice();
  // For every value of the input array
  for (var i = 0; i < array.length; i++) {
    // Replace the value with its inverse index value, using the cloned array as a reference
    var inverse = (array.length - 1 - i)
    array.splice(inverse, 1, cloneArray[i])
  }
}

////////////////////////////////////////////////////////////////////////////////
// arrayToList /////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function arrayToList(array) {
    // Set the list value for the ending node to null
    var list = null;
    // For every value of a given array, starting from the end moving backwards
    for (var i = array.length - 1; i >= 0; i--) {
        // add the list, where value is the current array value and rest is everything that was previously in the last
        list = {
            value: array[i],
            rest: list
        }
    }
    // Return the list
    return list;
}

////////////////////////////////////////////////////////////////////////////////
// listToArray /////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function listToArray(list) {
  // Create an empty array
  var array =[]
  // While there exists a value to add at the current node
  while (list.value) {
    // Add current value to the array
    array.push(list.value)
    // If there is more list (rest not equal to null)
    if (list.rest) {
      // Set the list equal to the rest of the list (removing the current node and moving to the next)
      list = list.rest
    } else {
      // Otherwise return the array
      return array
    }
  }
}

////////////////////////////////////////////////////////////////////////////////
// prepend /////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function prepend(element, list) {
  // Create array from given list
  var newList = listToArray(list);
  // Add given element to front of array
  newList.unshift(element);
  // Convert the array back to a list
  newList = arrayToList(newList);
  // Return the new list 
  return newList;
}

////////////////////////////////////////////////////////////////////////////////
// nth /////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function nth(list, n) {
  // Create array from a given list
  var array = listToArray(list);
  // Return the n'th index of the array
  return array[n]
}

////////////////////////////////////////////////////////////////////////////////
// deepEqual ///////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function deepEqual(a, b) {
    // If input a is strictly equal to input b
    if (a === b) {
      // Return true
      return true;
    }
    // If either input is not an object type
    if (typeof a !== "object" || typeof b !== "object") {
      // Return false
      return false
    }
    // Create 2 variables and set them to zero for counting the number of keys in each object
    var keysInA = 0
    var keysInB = 0
    // For all keys in input a
    for (var key in a)
        // Add one to the counter for input a
         keysInA++;
    // For all keys in input a
    for (var key in b) {
        // Add one to the counter for input a
        keysInB++;
        // If running the key values through the deepEqual function again doesn't pass
        if (!deepEqual(a[key], b[key])) {
          // Return false
          return false;
        }
    }
  // Return the comparison boolean of number of keys in A and number of keys in B
  return keysInA === keysInB;
}

////////////////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    range,
    sum,
    reverseArray,
    reverseArrayInPlace,
    arrayToList,
    listToArray,
    prepend,
    nth,
    deepEqual,
  };
};
