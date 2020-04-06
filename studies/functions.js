/*
* FUNCTIONS:
*/

/* 1. The two phases to using functions: First we must define the function. Next we can execute (or call/invoke) a 
* function by its name followed by paranthesis.
*/

/* 2. The difference between parameters and arguments, are that the parameters are the placeholders that act like 
* variables for the function, and the arguments are the actual values that replace the paramaters when the function 
* is called.
*/

// 3. Syntax for defining named function:

function functionName() {
    console.log("function contents")
}

// Syntax for calling the funtion:
functionName()

// 4. A function can be assigned to a variable as such...

var multiply = function (a, b) {return a * b};
// The console will display "10" (the result of 5 times 2)
console.log(multiply(5, 2))

// ...where a and b are the parameters of a function inside a variable that multiplies 2 numbers.

/* 5. In a function, optional inputs (arguments) are placed in the paranthesis following the function name when
* calling a function (separated by commas if there are multiple arguments), depending on whether or not the function has
* parameters for the arguments to fill. 
*
* To get an output, use the word "return" followed by whatever information you want the function to output.
*/

function divide(a, b) {
    return a / b
}
// The console will display "2" (the result of 10 divided by 5)
console.log(divide(10, 5))

// 6. Demonstration of functions being able to see global or parent scopes but not their child scopes

var globalVar = "global variable"

if (true) {
  var parentVar = "variable in parent scope"
  if (true) {
    function someFunction() {
      var childVar = "variable in child scope"
    }
    console.log(globalVar)
    console.log(parentVar)
    //console.log(childVar)
  }
}
/* The console logs in the code above will show that the var variables are accessible from their parent scopes, 
* but not the child scopes. The console log for childVar has been commented out because it causes a reference error.
*/

// 7. Closures //

/*
* Closures are defined in many ways, but generally refers to a function and the environment of the function when it 
* was declared
*/

function outerFunction() {
  var outerString = "test"
  return function innerFunction() {
    console.log(outerString)
  }
}

var newFunction = outerFunction()
newFunction()

/* When calling the function 'newFunction' which has been set equal to 'innerFunction' (via the variable assignment
* to 'outerFunction' which returned the 'innerFunction'), we can see that even though the outer function is technically 
* out of the picture at this point, the inner function is still able to access a variable declared solely in that outer 
* function. The variable 'outerString' was kept alive by closures. 
*/