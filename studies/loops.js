/*
* LOOPS:
*
* Loops are used to repeat a block of code over and over until a certain condition is met. There are three
* different kinds of loops in JavaScript.
*/

// 1. For, While, and For-In Loops //

// This is a for loop:
for (var i = 0; i < 10; i++) {
    console.log(i)
}
/* For loops use a variable (often 'i' as shown but it can be any variable) to keep track of how many times the loop
* runs. This variable is a number. In the section in paranthesis at the top, the three parts that define the loop 
* separated by semicolons are the starting point of the counter, the condition under which the loop is allowed to continue 
* based on the counter, and the change to make to the counter before continuing. In the example above, the loop counter 
* will start at 0, it will go up 1 at a time, and it will keep repeating the code inside the block until the counter is
* no longer less than 10. The console log will display numbers 0 - 9, since 10 is not less than 10 it will stop before 
* reaching 10.
*/

// This is how to write the same loop but as a while loop:
var i = 0
while (i < 10) {
    console.log(i)
    i++
}
/* The main difference here is that the only requirement to define it is the point at which you want it to stop, so it
* potentially can have more uses. It is especially useful for an instance where you don't know where the counting will 
* begin. In the above example, the starting point and counter were added to the loop, but are not required depending 
* on how you use the loop.
*/

/* The last type of loop is a for-in loop, which is specifically used for looping through an object. Since arrays have
* nice clean indexes numbered automatically, it is easy to access each value using a loop where i = the index. But since
* objects do not have numbered indexes and have custom named keys instead, the for-in loop was created.
*/

// Delcaring an object for the for-in loop to use
var someObject = {day: 5, month: 4, year: 2020}

for (var key in someObject) {
    // This will print every key in order to the console
    console.log(key)
    // This will print every key's value in order to the console
    console.log(someObject[key])
}
/* From this loop, the console prints:
*
* day
* 5
* month
* 4
* year
* 2020
*/


// Back to the initial for loop example, if we wanted to reverse it and count from 9 back down to 0, it would look like this:
for (var i = 9; i > -1; i--) {
    console.log(i)
}
/* Notice that the starting point has been changed to 9, the operator has been changed from < to >, the condition at which 
* it stops is -1, and the increment is set to -1 (i-- means to subtract 1 from i's current value). Another less confusing
* way to write the stopping point would be i >= 0.
* 
* Say you had an array and wanted to access every value of the array.
*/

var array = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"]

// The most practical way to do this is with a for loop
for (var i = 0; i < array.length; i++) {
    console.log(array[i])
}
/* The above loop is saying: print the i'th index of array starting with i at 0 (first index of array), continue going 
* up 1 at a time until i is no longer less than the total number of values in the array. (index starts couting at 0 but 
* array length starts counting at 1). Below is the same loop but in reverse, so the values will print from end to beginning.
*/

for (var i = array.length-1; i >= 0; i--) {
    console.log(array[i])
}



