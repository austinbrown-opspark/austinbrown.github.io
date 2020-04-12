/*
* VARIABLES:
*
* 0. To hold things in memory during the life-cycle of a program, we can use variables.  Variables
* are named identifiers that can point to values of a particular type, like a Number, String,
* Boolean, Array, Object or another data-type.  Variables are called so because once created, we
* can CHANGE the value (and type of value) to which they point.
*
* 1. To create a variable we use the keyword, var, followed by a name (id or alias) for our
* variable.
*
* 2. There are 2 phases of using variables: declaration and initialization (or assignment).
*/

// 1. declaration //
var myName;

/*
* At the declaration phase, the variable myName is undefined because we have NOT initialized
* it to anything
*/
console.log(myName); // prints => undefined

// 2. initialization or assignment //
myName = 'john';
console.log(myName); // prints => john

// 3. re-assignment //
myName = 'bob';
console.log(myName); // prints => bob

// NOTE: We can assign and re-assign anything to a variable - we cannot do this with constants //
var myVariable = 1;
var myVariable = true;
myVariable = "someString";

// 4. var //
var myVariable;
/*
* var was the original method of declaring a variable and is known as "function scoped". This 
* means that it is accessible throughout an entire function; or if not in a function it is globally 
* accessible or "global scoped".
*/

// 5. let and const //
let myLetVariable = "something"
const myConstVariable = "anything"
/*
* let and const were introduced at a later point to address some of the problems with var. let and const are
* very similar. The main difference is that const cannot be reassigned - meaning you can't use that variable
* name anywhere else in the code with an assignment operator (=). let and const are block scoped,
* that is, they are only accessible from within the block of code from which they are declared. So that includes
* functions, loops and if statements; whichever it is most closely encapsulated by. 
*/

// 6. Hoisting //
/*
* Hoisting is when a variable and/or its value is "hoisted" to the top of whatever scope it is declared in 
* (ie. loop, if statement, etc). When it is hoisted, it will be accessible from anywhere within the scope, regardless
* of where the declaration is in that scope. For example, if you have a function defined at the bottom of an if 
* statement, you will still be able to call the function from the top. This also applies to any child scopes. When
* something is hoisted in JavaScript, it is accessible from any child scope within a scope. However, this does not 
* apply oppositely, so parent scopes cannot access child scopes.
*/

// Here is a demonstration of each type. Notice the difference between the console logs above and below the declarations.

console.log(someFunction()) // - displays as normal because functions are fully hoisted
console.log(varVariable) // - is undefined because the variable name is hoisted and therefore accessible, but its value is not hoisted
// console.log(letVariable) - will cause a reference error because let is not hoisted and is therefore unknown to the interpreter
// console.log(constVariable) - will cause a reference error because let is not hoisted

function someFunction() {
    return "This is a function"
}
var varVariable = "This is a variable declared with var"
let letVariable = "This is a variable declared with let"
const constVariable = "This is a variable declared with const"

// All the same items console logged after their delcaration display as expected.
console.log(someFunction())
console.log(varVariable)
console.log(letVariable)
console.log(constVariable)