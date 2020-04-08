////////////////////////////////////////////////////////////////////////////////
// min /////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function min(a, b) {
  // Return the smaller value of 2 given values
  return Math.min(a, b)
}

////////////////////////////////////////////////////////////////////////////////
// isEven //////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function isEven(num) {
  // Return the opposite of the boolean equivalent of the remainder of a given number divided by 2
  return !(num % 2)
}

////////////////////////////////////////////////////////////////////////////////
// countChars //////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function countChars(string, char) {
  // Create a counter and set it to 0
  var counter = 0
  // Check every letter of a given string
  for (let i = 0; i < string.length; i++) {
    // If a letter of the given string matches a given character
    if (string[i] === char) {
      // Add 1 to the counter
      counter++
    }
  }
  // Return the number on the counter
  return counter
}

////////////////////////////////////////////////////////////////////////////////
// countBs /////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function countBs(string) {
  // Create a counter and set it to 0
  var counter = 0
  // Check every letter of a given string
  for (let i = 0; i < string.length; i++) {
    // If a letter of the given string is a capital B
    if (string[i] === "B") {
      // Add 1 to the counter
      counter++
    }
  }
  // Return the number on the counter
  return counter
}

////////////////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    min,
    isEven,
    countBs,
    countChars,
  };
};
