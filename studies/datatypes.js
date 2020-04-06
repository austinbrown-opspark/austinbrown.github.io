/*
* DATATYPES:
*
* Datatypes are what make up all the different types of values that variables can hold. There are two categories
* of datatypes: Primitive/Simple and Complex. Simple are simple in that the have a finite static value that doesn't do
* anything special. These include numbers, strings, booleans, NaN, undefined, and null. Complex are indefinite in 
* size and/or can perform some kind of action, and those include objects, arrays, and functions.
*/

// 1. Numbers //
var number = 4
/* They're numbers. Pretty self explanatory. No quotes needed or it will become a string. Numbers can either be
* floating point - that is, it has a decimal - or integers, which are any whole numbers.
*/

// 2. String //
var string = "this is a string"
// Strings are any series (or single) of characters including numbers, letters, or symbols and must be surrounded by quotation marks. 

// 3. Boolean // 
var boolean = true
// A boolean is like a switch having two positions. It can be on or off and is defined with either "true" or "false".

// 4. Array //
var array = [4, "this is a string in an array", boolean]
/* Arrays are enclosed with brackets and can hold all types of values, including all the ones listed in my summary
* of datatypes at the beginning, separated by commas. It is essentially just a list. Each item in the array has a 
* corresponding index which it can be identified with, starting with 0 and extending to however many objects are
* in the array (ie. the first object in the array has an index of 0, the second is 1, and so on)
*/

// 4. Object //
var object = {"this is a key": "this is a value", key: "value", number: 8}
/* An objects is similar to a key in that it is a list, but instead of each value being identified with a built-in
* implied index number, it has a custom identification called a key which is input by the coder. Keys are usually
* strings but don't necessarily need to be in quotes unless there are spaces in the name or if any of the words are 
* JavaScript specific words that trigger something. Objects also are enclosed with curly braces instead of brackets.
*/

// 5. Function //

// This is defining a function
function functionName(parameter1, paramater2) {
    // This returns the sum of 2 input values
    return parameter1 + paramater2
}
// This is calling the function with the values 2 and 2, which will return the value 4
functionName(2, 2)

/* Functions can take a set of instructions and perform it whenever it is called. It can take any number of inputs
* or no input at all. These inputs are called parameters and they act like variables. To get a value back from the 
* function, you can use a return statement as shown in the example. The function can be called with just it's name, 
* and if there are parameters, you can enter a value to substitute those in the paranthesis after the function name, 
* separated by commas if there are multiple. These substituted values are called arguments. Paramaters and/or 
* return statemnts are not requirements for functions, but rather are features than can make them more useful.
*/
function anotherFunction() {
    console.log("This function has no parameters or return statement")
}
// All this function will do when called is print to the console "This function has no parameters or return statement"
anotherFunction()

// 7. undefined //
var undefinedVariable = undefined
/* Undefined is simply the default state of a variable which is declared does not have a value assigned to it, or if 
* the interpreter does not have access to the value as demonstrated earlier in "Hoisting". It can also be intentionally 
* assigned to a variable as shown above, however this more commonly done with null. Below is an example of a variable 
* that doesn't have a value showing undefined when console logged.
*/
var variableWithNoValue
console.log(variableWithNoValue)

// 8. null //
var nullVariable = null
/* Null is essentially the same thing as undefined, only it is never a result of a default by the interpreter. Null
* has to be intentionally assigned by the coder to represent a variable that has intentionally not been given a value.
* This way it is more apparent whether or not a variable having no assigned value is intentional or not.
*/

// 9. NaN //
/* NaN is most commonly displayed as a result of trying to perform an arithmetic operation on a datatype that is  
* not a number. Below are some exaples of calculations that will return a NaN.
*/
console.log(27 - "apple")
console.log("string" / 2)

// 10. Infinity and -Infinity //
/* These datatypes are what is displayed when a number exceeds the limit of what JavaScript can handle. These numbers
* are 1.797693134862315E+308 and -1.797693134862315E+308. Below you can see the console will show the number ending
* in 5, but once it his 6 the console defaults to "Infinity". The same goes for negatives.
*/
console.log(1.797693134862315E+308)
console.log(1.797693134862316E+308)
console.log(-1.797693134862316E+308)

// 11. (See initial description of datatypes above) //

// 12. By Copy vs. By Reference //
/* A value being passed "by copy" in primitive datatypes means that the value is being copied verbatim from one place 
* to another. In complex types, the values are only references to someplace in the memory where they are stored. When
* a change is made to a value, anything also that also points to or references that value will reflect that change.
*/

var x = 5
var y = x

x = 10

// Console log shows 5
console.log(y) 

/* Above you can see with primitive datatypes such as numbers, y copied the value from x while it was still 5, so
* even though the value of x was later changed to 10, y's value is still 5 because it was just a copy of the value
* at that moment in the code.
*/

var x = {value: 5}
var y = x

x.value = 10

// Console log shows {value: 10}
console.log(y)

/* In this above example, the x value is now an object holding the number 5, which is a complex datatype.
* Even though y was set equal to x while x's value was still 5, y shows as 10 in the console log - despite the fact
* that x's value was changed to 10 after the y = x assignment. This is because the values are pointing to the same 
* reference elsewhere where the value is actually stored so they are all able to stay in sync. 
*/ 