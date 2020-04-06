// #!/usr/bin/env node

'use strict';

/**
 * 2: Fizz Buzz
 *
 *  a. Write a Function called fizzBuzz that prints the numbers from 1 to 100.
 *  b. BUT, for multiples of three print “Fizz” instead of the number.
 *  c. AND for the multiples of five print “Buzz”.
 *  d. FINALLY, for numbers which are multiples of both three and five print “FizzBuzz”.
*/
function fizzBuzz() {
    // YOUR CODE GOES BELOW HERE //

    for (var i = 1; i <=100; i++) { // Loop from numbers 1-100
        if (Number.isInteger(i /3) && Number.isInteger(i / 5)) {    // If the number can be divided by both 3 and 5 with the quotient as a whole number, print "FizzBuzz" to the console.
            console.log("FizzBuzz") 
        } else if (Number.isInteger(i / 5)) {   // If the number can be divided by 5 with the quotient as a whole number, print "Buzz" to the console.
            console.log("Buzz")
        } else if (Number.isInteger(i /3)) {    // If the number can be divided by 3 with the quotient as a whole number, print "Buzz" to the console.
            console.log("Fizz")
        } else {    // Otherwise just print the number to the console
            console.log(i)
        }
    }

    // YOUR CODE GOES ABOVE HERE //
}





// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.fizzBuzz = fizzBuzz
}