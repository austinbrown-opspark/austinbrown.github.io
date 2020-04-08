
////////////////////////////////////////////////////////////////////////////////
// triangles ///////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function triangles(num) {
  // Start with an empty collection of hashes
  let hash = ""
  // For a given number of times
  for (let i = 1; i <= num; i++) {
    // Add 1 to the collection of hashes
    hash += "#"
    // Show the hashes on the console
    console.log(hash)
  }
}
////////////////////////////////////////////////////////////////////////////////
// fizzBuzz ////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function fizzBuzz() {
  // For numbers 1 - 100
  for (var i = 1; i <= 15; i++) {
    // If the number is divisible by 3 and 5
    if (Number.isInteger(i / 3) && Number.isInteger(i / 5)) {
        // Print 'fizzbuzz' to the console
        console.log("fizzbuzz")
    // If the number is only divisible by 5
    } else if (Number.isInteger(i / 5)) {
        // Print 'buzz' to the console
        console.log("buzz")
    // If the number is only divisible by 3
    } else if (Number.isInteger(i /3)) {
        // Print 'fizz' to the console
        console.log("fizz")
    } else {
        // Otherwise just print the number to the console
        console.log(i)
    }
  }
}

////////////////////////////////////////////////////////////////////////////////
// drawChessboard //////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function drawChessboard(num) {
  // Create a placeholder for a string of characters
  var chessboard = ""
  // Repeat the following a given number of times (counting from 0)
  for (var i = 0; i < num; i++) {
    // Repeat for the same given number of times within the first repetition (counting from 0)
    for (var j = 0; j < num; j++) {
      // If both repetitions are on an even number or both are on an odd number (ie. the 0th time running the 0th loop)
      if (i % 2 === j % 2) {
        // Add a space to the aforementioned string
        chessboard += " "
      } else {
        // Otherwise add a '#' to the string
        chessboard += "#"
      }
    }
    // Skip to the next line in the string
    chessboard += "\n"
  }
  // Display the final string
  console.log(chessboard)
}

////////////////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    triangles,
    fizzBuzz,
    drawChessboard,
  };
}
