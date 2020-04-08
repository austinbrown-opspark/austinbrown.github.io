/*
* CONTROL FLOW:
* 
* The term control flow is pretty self explanatory, in that it just refers to the control of the flow of the code.
* This consists of if, else-if, else statements that check to see if something is true or false to send the interpreter
* in one direction or another - kind of like a choose your own adventure book.
*/

// 1. If //

/* If is the intial part of the statement that has something to evaluate. The code inside of the curly braces will 
* only run if the section inside the parenthesis returns as true. Otherwise the interpreter will skip past the if
* statement or continue to an else-if or else if it has been defined in the if statement.
*/

var number = 10

if (number > 0) {
    // The console will display "The number is positive" since the variable "number" is 10 which is greater than 0
    console.log("The number is positive")
}

// 2. Else If //

/* Else If is an extension of If and can only be used when there is already an if statement. You can use as many of them
* in series after the initial if as you want. Else If would be used to check for something else to evaluate if the initial
* if was false. The interpreter evaluates each else if in order until one comes back as true. After this it will ignore the
* rest of the else-if/else and run the code block corresponds to the current else-if/else. There is no limit to the number
* of these that can be chained together.
*/

number = -10

if (number > 0) {
    console.log("The number is positive")
} else if (number < 0) {
    /*Since the number variable was changed to -10 above, the console will print the string below since (number > 0)
    * was false but (number < 0) is now true.
    */
    console.log("The number is negative")
}

// 3. Else //

/* Else is like a default that can be set, rather, a block of code that will run if everything else that was checked for
* came back as false. Unlike if and else-if, it does not need anything in parenthesis after it since it is a default.
*/

if (number > 0) {
    console.log("The number is positive")
} else if (number < 0) {
    console.log("The number is negative")
} else {
    console.log("This is either a 0 or not a number at all")
}
// The else section above would display if the "number" variable were set to anything besides a positive or negative number.

// 4. Switch //

/* A switch is another shorthand way of doing a simple if statement, ideal for situations where there need to be multiple
* options based on a single value. Syntax example below.
*/
var color = "blue"

switch (color) {
    case "blue":
        console.log("The color is blue")
        break;
    case "red":
        console.log("The color is red")
        break;
    case "green":
        console.log("The color is green")
        break;
    default:
        console.log("This must be some other color")
}
/* As you can see above, the switch statement is declared with the word "switch" and then the paranthesis that follow will
* typically include a variable of some kind that will then be compared to the "cases" that follow. If the case value
* matches the value from the parenthesis at the top, the code block corresponding to that case will execute. At the end
* of the code block, the word "break" must be added to signal to the interpreter the end of the code block. The "default"
* section at the end works just like the "else" from traditional if/else statements. If a match is not found in any of
* the cases, then the code block corresponding to "default" will run. Also similar to if/else statements, the "default"
* is optional.
*/