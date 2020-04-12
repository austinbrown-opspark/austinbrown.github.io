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

// The indexOf() method will find the first occurence of a given string in another string and return the index of where it began
console.log(concatenate.indexOf("ball")) // Prints 4 to the console - because 'ball' begins at the 4th index of the "football is boring" string

// Likewise, the lastIndexOf() method will find the last occurence of a string in another string. Obviously this will only be different from indexOf() is there is more than one occurence of the string
console.log(concatenate.lastIndexOf("b")) // Prints 12 to the console - because the last b is found in 'boring' and is at the 12th index

// The slice() function will extract a string from a string. Its 2 parameters shown below are the start position and end position (end not included)
console.log(concatenate.slice(0, 4))
// The string printed to the console above is "foot"

// The replace() method will find a string and replace it with another string inside a string 
console.log(concatenate.replace("is", "isn't")) // With our example, this will change 'football is boring' to 'football isn't boring')
// The first word in parenthesis is the string to search for and the second is the one to replace it with

// The toUpperCase() method will convert a string to upper case. Unlike the previous methods, it does not take any parameters.
console.log(concatenate.toUpperCase()) // Prints 'FOOTBALL ISN'T BORING' to the console. 

// The toLowerCase() method is just like toUpperCase() only it does the opposite.
console.log(concatenate.toLowerCase()) // Prints 'football isn't boring' to the console


