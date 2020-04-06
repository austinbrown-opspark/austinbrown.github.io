/*
* STRING MANIPULATION:
*/

// 1. With Operators //
 
 /* String operators share a couple from arithmetic operators, which are + and +=. They essentially work the
 * same way as the arithmetic versions, in that + will combine two values, and += will combine a new value with 
 * the current value of a variable. Insted of literal addition, when two strings are added, they are concatenated, 
 * that is, two strings are pushed together to become one. Below are some examples.
 */
 
 var concatenate = "foot" + "ball"
// Prints as "football"
console.log(concatenate)

concatenate += " is boring"
// Prints as "football is boring"
console.log(concatenate)

// 2. With String Methods //

/* String methods have many different purposes, from searching for a value in a string, or returing the number
* of characters in a string. For all string methods: https://www.w3schools.com/js/js_string_methods.asp
* Here are some examples.
*/

// Prints 18 to the console - because it is counting all the characters from our previous 'concatenate' string including spaces 
console.log(concatenate.length)

// The slice() function will extract a string from a string. Its 2 parameters shown below are the start position and end position (end not included)
console.log(concatenate.slice(0, 4))
// The string printed to the console above is "foot"


