// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: FIRST CLASS FUNCTIONS
 */

/** 
 * Given an input base to test against, which could be a String or Number, 
 * return a Function that tests whether a given value is greater than the 
 * base.
 */
function createGreaterThanFilter(base) {
    // YOUR CODE BELOW HERE //
    
    return function greaterThan(value) {
        // If the value is a string
        if (typeof(value) == "string") {
            // Convert both strings to uppercase for easier comparison
            var stringOne = base.toUpperCase()
            var stringTwo = value.toUpperCase()

            // Find shorter string length so that loop knows when to stop comparing letters
            if (stringOne.length <= stringTwo.length) {
                var length = stringOne.length
            } else if (stringTwo.length <= stringOne.length) {
                var length = stringTwo.length
            }
            // Check each letter of both words and compare ascii values
            for (var i = 0; i < length; i++) {
                // If base string comes first alphabetically, return true
                if (stringOne[i].charCodeAt(0) < stringTwo[i].charCodeAt(0)) {
                    return true
                // If value string comes first alphabetically, return false 
                } else if (stringOne[i].charCodeAt(0) > stringTwo[i].charCodeAt(0)) {
                    return false
                }
            }
        }
        // If the value is a number
        if (typeof(value) == "number") {
            // Return true if value is greater than base
            if (value > base) {
                return true
            // Otherwise return false
            } else {
                return false
            }
            
        }
    }
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input base to test against, which could be a String or Number, 
 * return a Function that tests whether a given value is less than the 
 * base.
 */
function createLessThanFilter(base) {
    // YOUR CODE BELOW HERE //
    
    return function lessThan(value) {
        // If the value is a string
        if (typeof(value) == "string") {
            // Convert both strings to uppercase for easier comparison
            var stringOne = base.toUpperCase()
            var stringTwo = value.toUpperCase()

            // Find shorter string length so that loop knows when to stop comparing letters
            if (stringOne.length <= stringTwo.length) {
                var length = stringOne.length
            } else if (stringTwo.length <= stringOne.length) {
                var length = stringTwo.length
            }
            // Check each letter of both words and compare ascii values
            for (var i = 0; i < length; i++) {
                // If value string comes first alphabetically, return true
                if (stringOne[i].charCodeAt(0) > stringTwo[i].charCodeAt(0)) {
                    return true
                // If base string comes first alphabetically, return false 
                } else if (stringOne[i].charCodeAt(0) < stringTwo[i].charCodeAt(0)) {
                    return false
                }
            }
        }
        // If the value is a number
        if (typeof(value) == "number") {
            // Return true if value is less than base
            if (value < base) {
                return true
            // Otherwise return false
            } else {
                return false
            }
            
        }
    }
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given a startsWith character, which will be a single character, return a 
 * Function that tests whether a given String starts with the startsWith 
 * character.
 */
function createStartsWithFilter(startsWith) {
    // YOUR CODE BELOW HERE //
    
    return function compare(string) {
        // Return true or false of whether or not the first letter of string is the same as the startsWith character
        return string[0].toUpperCase() == startsWith.toUpperCase()
    }
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given a endsWith character, which will be a single character, return a 
 * Function that tests whether a given String ends with the endsWith 
 * character.
 */
function createEndsWithFilter(endsWith) {
    // YOUR CODE BELOW HERE //
    
    return function compare(string) {
        // Return true or false of whether or not the last letter of string is the same as the endsWith character
        return string[string.length-1].toUpperCase() == endsWith.toUpperCase()
    }
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an Array of Strings and a Function designed to modify a String, 
 * return an Array of the Strings, modified.
 * 
 * TIP: You need to loop over the Strings, right? We need to pass each String to 
 * the modify Function, but we need to collect the results into some collection.
 */
function modifyStrings(strings, modify) {
    // YOUR CODE BELOW HERE //
    
    // Initialize empty array
    var modifiedStrings = []
    for (var i = 0; i < strings.length; i++) {
        // Add each modified string from the original array to its corresponding index of a new array
        modifiedStrings[i] = modify(strings[i])
    }
    // Return the new array
    return modifiedStrings
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an Array of Strings and a Function designed to test the String in some 
 * way and return a Boolean on whether it passed, return true if ALL Strings pass the test.
 * 
 * Imagine you had a list of names, and you wanted to test they all 
 * begin with "C", or they are all exclaimations that end with "!".
 * 
 * TIP: You need to loop over the Strings, right? And pass them to the test?
 */
function allStringsPass(strings, test) {
    // YOUR CODE BELOW HERE //
    
    // Initialize a counter to 0
    var counter = 0
    for (var i = 0; i < strings.length; i++) {
      // If a string in the list passes the test, add 1 to the counter
      if (test(strings[i]) === true) {
          counter++
      }
    }
    // If the counter is the same number as the total number of strings, return with true
    if (counter === strings.length) {
        return true
    // Otherwise return with false
    } else {
        return false
    }

    // YOUR CODE ABOVE HERE //
}

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.createGreaterThanFilter = createGreaterThanFilter;
    module.exports.createLessThanFilter = createLessThanFilter;
    module.exports.createStartsWithFilter = createStartsWithFilter;
    module.exports.createEndsWithFilter = createEndsWithFilter;
    module.exports.modifyStrings = modifyStrings;
    module.exports.allStringsPass = allStringsPass;   
}