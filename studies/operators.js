/*
* OPERATORS:
*/

// 1. Assigment Operators //

/* Assignment operators assign a new value to a variable. Assigment operators in JavaScript will always include a 
* single equals sign, and can be accompanied with arithmetic operators to arithmetically alter the value in terms 
* of itself. Some examples are showm below. See https://www.w3schools.com/js/js_assignment.asp for a full list.
*/
var someVariable = "has been set equal to this string"

// Variable declaration must be done on separate line than its arithmetic assignments
var countByTwo 
// This assignment is the short way of saying countByTwo = countByTwo + 2
countByTwo += 2 

// 2. Arithmetic Operators //

/* Arithmetic operators are essentially just basic math calculations like +, -, x and /. They are typically for 
* number.
* Here is a full list of arithmetic operators: https://www.w3schools.com/js/js_arithmetic.asp
*/

var addNumbers = 5 + 5
// Prints as 10 (5 +5)
console.log(addNumbers)

var addNumberAndVariable = addNumbers + 5
// Prints as 15 (10 + 5). Numbers as variables can also be added.
console.log(addNumberAndVariable)

// 3. Comparison Operators //

/* Comparison operators are used to compare two values which will resolve to a boolean value. They are commonly
* used in if-statements. Since the single = is reserved as an assigment operator, to compare if two values are
* equal, either two or three equal signs must be used. Getting true from == means the values are equal but not 
* necessarily the same value type (ie comparing 4 and a string of "4". Getting true from === means the values 
* have to be the same value and the same type. Exclamation point (bang operator) is used to negate, so != and !==
* are the opposite of == and ===. Other comparison operators include >, <, >=, <=.
*/
console.log(10 == "10")
console.log(10 === "10")

console.log(17 !== 18)
console.log(17 > 16)
// All of the above console logs will display either a true or false boolean.

// 4. Logical Operators //

/* Logical operators can be used in combination with comparison operators to evaluate multiple comparisons at 
* the same time. The 3 operators are && (and), || (or), and ! (not). Below are some examples.
*/

// Both sides of the && must be true for the && to equal true. Since only one of these is true, the console will show false.
console.log(10 === 10 && 17 > 18)

// With the || operator, only one needs to be true to get a true back. The console will display true.
console.log(10 === 10 || 17 > 18)

// The ! will negate whatever is in front of it. The console will now show false since the only remaining true has been negated
console.log(!(10 === 10) || 17 > 18)

// 5. Unary Operators //

/* A unary operator is an operator that takes a single value (known as an operand in this context) and makes a change to it.
* A full list of them can be found here: https://scotch.io/tutorials/javascript-unary-operators-simple-and-useful
* Below are a couple of examples.
*/

// The ++ operator will increment a numnber by 1. This is often used to implement a counter in things such as while loops
var counter = 0
counter++ 
// The console shows 1 since 1 has been added to the initial 0
console.log(counter)

// The single + or = operator will either attempt to convert a value to a number, or it will do so and negate the number (if -)
console.log(+true)
console.log(-"8")

/* The ! will convert a value to boolean and then negate it.
* Since null is the numeric equivalent to 0, and the boolean equivalent to 0 is false, and the negation of false is true, 
* the console below will display true.
*/
console.log(!null)
// Since 1 is the boolean equivalent to true, and the negation of true is false, the console below will display false.
console.log(!1)

/* The typeof operator will return a string with the name of the datatype in front of it. This does not always work perfectly
* as there are many datatypes encompassed by "object" such as arrays, null, and dates.
* A full list of types can be found here: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof
*/
// Console displays "number"
console.log(typeof (2+2))
// Console displays "boolean"
console.log(typeof true)

// 6. Ternary Operators //

// A ternary operator is basically a shorthand way of writing an if/else statement that chooses from 2 options,

var color = "red"

// Instead of writing something like this:
if (color == "green") {
  console.log("The color is green")
} else {
  console.log("The color is not green")
}

// You could write:

// This will print the result to the console
console.log((color == "green") ? "The color is green" : "The color is not green")

// This will set a new variable with the result
var result = (color == "green") ? "The color is green" : "The color is not green"
// And then this prints it to the console
console.log(result)
