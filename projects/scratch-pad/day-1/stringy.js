// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: stringy.js
 */

/**
 * Given an input String, return its length.
 *
 * TIP: In JavaScript, how can we decipher the length of a String?
 * work?
 */
function length(string) {
    // YOUR CODE BELOW HERE //
    
    return string.length;

    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input String, return a new String forced to lowercase.
 */
function toLowerCase(string) {
    // YOUR CODE BELOW HERE //

    return string.toLowerCase();

    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input String, return a new String forced to uppercase.
 */
function toUpperCase(string) {
    // YOUR CODE BELOW HERE //

    return string.toUpperCase();

    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input String, return a new String forced to dash-case.
 *
 * Examples:
 *
 *      toDashCase('Hello World'); // => 'hello-world'
 *
 * TIP: How can you look for and replace a space in a String? How can you
 *      enforce lowercase? Look at the global replace link below, or, try String
 *      methods split and join?
 *
 *      See: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace#Using_global_and_ignore_with_replace()
 */
function toDashCase(string) {
    // YOUR CODE BELOW HERE //

    var string = string.toLowerCase()       // Set string variable equal to itself but lowercase 
    var splitString = string.split(" ");    // Create array variable equal to string split by spaces
    var dashString = splitString.join("-"); // Create string vartiable equal to array joined with dashes
    return dashString;                      // Return the final variable

    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input String and a single character, return true if the String
 * begins with the character, false otherwise. The Function is case insensitive.
 *
 * Example:
 *
 *      beginsWith('Max', 'm'); // => true;
 *      beginsWith('Max', 'z'); // => false;
 *
 * TIP: How can you use Array access to your advantage here? How can you
 *      ensure uppercase and lowercase can be compared equally?
 */
function beginsWith(string, char) {
    // YOUR CODE BELOW HERE //

    var firstLetter = string[0].toUpperCase();   // Create variable with first letter of string set to uppercase (for case insensitivity)
    return firstLetter == char.toUpperCase();    // Return boolean value of comparison of firstLetter and char also set to uppercase
    

    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input String and a single character, return true if the String
 * ends with the character, false otherwise. The Function is case insensitive.
 *
 * Example:
 *
 *      endsWith('Max', 'X'); // => true;
 *      endsWith('Max', 'z'); // => false;
 *
 * TIP: How can you use Array access to your advantage here? How can you
 *      ensure uppercase and lowercase can be compared equally?
 */
function endsWith(string, char) {
    // YOUR CODE BELOW HERE //

return string[string.length-1].toUpperCase() === char.toUpperCase(); 
        // Return boolean value of last letter of string (length minus 1 to account for 0) set to uppercase compared to char set to uppercase

    // YOUR CODE ABOVE HERE //
}

/**
 * Given two input Strings, return the Strings concatenated into one.
 *
 * TIP: What's the operator to concatenate two Strings?
 */
function concat(stringOne, stringTwo) {
    // YOUR CODE BELOW HERE //

    return stringOne+stringTwo

    // YOUR CODE ABOVE HERE //
}

/**
 * Given any number of Strings, return all of them joined together.
 *
 * Example:
 *
 *      join("my", "name", "is", "Ben"); // => "mynameisBen";
 *
 * TIP: This Function pulls out all the arguments passed to it and stores them
 *      in an Array called args.
 */
function join(stringOne, stringTwo) {
    // YOUR CODE BELOW HERE //
    var args = Array.from(arguments);
    return args.join("");

    // YOUR CODE ABOVE HERE //
}

/**
 * Given two Strings, return the longest of the two.
 *
 * Example:
 *
 *      longest("ben", "maggie");   //-> "maggie"
 *
 * TIP: What property of the String do we need to compare?
 */
function longest(stringOne, stringTwo) {
    // YOUR CODE BELOW HERE //

    if (stringOne.length > stringTwo.length) {
        return stringOne
    } else if (stringTwo.length > stringOne.length) {
        return stringTwo
    }

    // YOUR CODE ABOVE HERE //
}

/**
 * Given two Strings, return 1 if the first is higher in alphabetical order than
 * the second, return -1 if the second is higher in alphabetical order than the
 * first, and return 0 if they're equal.
 *
 * TIP: How can we compare Strings? Is 'a' greater than or less than 'b'?
 */
function sortAscending(stringOne, stringTwo) {
    // YOUR CODE BELOW HERE //
    
    // Convert both strings to uppercase for easier comparison
    var stringOne = stringOne.toUpperCase()
    var stringTwo = stringTwo.toUpperCase()

    // Find shorter string length so that for loop knows when to stop comparing letters
    if (stringOne.length <= stringTwo.length) {
        var length = stringOne.length
    } else if (stringTwo.length <= stringOne.length) {
        var length = stringTwo.length
    }

    /* Cycle through each letter of both words and compare ascii values
     * If no difference is found in values loop will continue to end of word.
     * Returns 1 or -1 once ascii letters from same position are found to be not equal
    */
    for (var i = 0; i < length; i++) {
      if (stringOne[i].charCodeAt(0) < stringTwo[i].charCodeAt(0)) {
          return 1
      } else if (stringOne[i].charCodeAt(0) > stringTwo[i].charCodeAt(0)) {
          return -1
      }
    }
    return 0    // Defaults to returning 0 if no difference was found using the for loop

    // YOUR CODE ABOVE HERE //
}


/**
 * Given two Strings, return 1 if the first is lower in alphabetical order than
 * the second, return -1 if the second is lower in alphabetical order than the
 * first, and return 0 if they're equal.
 *
 * TIP: How can we compare Strings? Is 'a' greater than or less than 'b'?
 */
function sortDescending(stringOne, stringTwo) {
    // YOUR CODE BELOW HERE //

    // Convert both strings to uppercase for easier comparison
    var stringOne = stringOne.toUpperCase()
    var stringTwo = stringTwo.toUpperCase()

    // Find shorter string length so that for loop knows when to stop comparing letters
    if (stringOne.length <= stringTwo.length) {
        var length = stringOne.length
    } else if (stringTwo.length <= stringOne.length) {
        var length = stringTwo.length
    }

    /* Cycle through each letter of both words and compare ascii values
     * If no difference is found in values loop will continue to end of word.
     * Returns 1 or -1 once ascii letters from same position are found to be not equal
    */
    for (var i = 0; i < length; i++) {
      if (stringOne[i].charCodeAt(0) > stringTwo[i].charCodeAt(0)) {
          return 1
      } else if (stringOne[i].charCodeAt(0) < stringTwo[i].charCodeAt(0)) {
          return -1
      }
    }
    return 0    // Defaults to returning 0 if no difference was found using the for loop

    // YOUR CODE ABOVE HERE //
}


// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.length = length;
    module.exports.toLowerCase = toLowerCase;
    module.exports.toUpperCase = toUpperCase;
    module.exports.toDashCase = toDashCase;
    module.exports.beginsWith = beginsWith;
    module.exports.endsWith = endsWith;
    module.exports.concat = concat;
    module.exports.join = join;
    module.exports.longest = longest;
    module.exports.sortAscending = sortAscending
    module.exports.sortDescending = sortDescending;
}
