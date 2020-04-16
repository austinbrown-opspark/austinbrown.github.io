// This makes the arguments variable behave the way we want it to and a few
// other things. For more info:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode
'use strict';

var _ = {};


/**
* START OF OUR LIBRARY!
* Implement each function below it's instructions
*/

/** _.identity
* Arguments:
*   1) Any value
* Objectives:
*   1) Returns <value> unchanged
* Examples:
*   _.identity(5) === 5
*   _.identity({a: "b"}) === {a: "b"}
*/

_.identity = function(value) {
    // Return input value unchanged
    return value;
}


/** _.typeOf
* Arguments:
*   1) Any value
* Objectives:
*   1) Return the type of <value> as a string
*       Types are one of:
*          - "string"
*          - "array"
*          - "object"
*          - "undefined"
*          - "number"
*          - "boolean"
*          - "null"
*          - "function"
* Examples:
* _.typeOf(134) -> "number"
* _.typeOf("javascript") -> "string"
* _.typeOf([1,2,3]) -> "array"
*/

_.typeOf = function(value) {
    // If the input value type is an array
    if (Array.isArray(value)) {
        // Return 'array'
        return 'array'
    // If value is undefined
    } else if (value === 'undefined') {
        // Return the value unchanged
        return value
    // If value is null
    } else if (value === null) {
        // Return 'null'
        return 'null'
    // If the value type is an object but not a date
    } else if (typeof value === 'object' && value !== Date(value)) {
        // Return 'object'
        return 'object'
    // Otherwise, return the value typeof as a string
    } else {
        return typeof value
    }
}

/** _.first
* Arguments:
*   1) An array
*   2) A number
* Objectives:
*   1) If <array> is not an array, return []
*   2) If <number> is not given or not a number, return just the first element in <array>.
*   3) Otherwise, return the first <number> items of <array>
* Edge Cases:
*   1) What if <number> is negative?
*   2) What if <number> is greater than <array>.length?
* Examples:
*   _.first("ponies", 1) -> []
*   _.first(["a", "b", "c"], "ponies") -> "a"
*   _.first(["a", "b", "c"], 1) -> "a"
*   _.first(["a", "b", "c"], 2) -> ["a", "b"]
*/

_.first = function(array, number) {
    // Create empty array
    var arr = [];
    // If the input array is not an array or the input number is negative
    if(!Array.isArray(array) || number < 0){
        // Return the empty array
        return arr;
    // If the input number is a falsey value (undefined, null, NaN, 0)
    } else if(!number){
        // Return the first value of the input array
        return array[0];
    // If the input number is greater than the number of values in the input array
    } else if(number > array.length) {
        // Return the array unchanged
        return array; 
    } else {
        // Iterate through input array, from the first value up to the nth value indicated by the input number
        for(let i = 0; i < number; i++){
            // Add each of these values to the empty array
            arr.push(array[i]);
        }
        // Return the new array
        return arr; 
    } 
};

/** _.last
* Arguments:
*   1) An array
*   2) A number
* Objectives:
*   1) If <array> is not an array, return []
*   2) If <number> is not given or not a number, return just the last element in <array>.
*   3) Otherwise, return the last <number> items of <array>
* Edge Cases:
*   1) What if <number> is negative?
*   2) What if <number> is greater than <array>.length?
* Examples:
*   _.last("ponies", 2) -> []
*   _.last(["a", "b", "c"], "ponies") -> "c"
*   _.last(["a", "b", "c"], 1) -> "c"
*   _.last(["a", "b", "c"], 2) -> ["b", "c"]
*/

_.last = function(array, number){
    // Create empty array
    var arr = [];
    // If the input array is not an array or the input number is negative
    if(!Array.isArray(array) || number < 0){
        // Return the empty array
        return arr;
    // If the input number is a falsey value (undefined, null, NaN, 0)
    } else if(!number){
        // Return the last value of the input array
        return array[array.length-1];
    // If the input number is greater than the number of values in the input array
    } else if(number > array.length) {
        // Return the array unchanged
        return array; 
    } else {
        // Iterate through input array, from the nth to last (where n is input number) up to the last array value
        for(let i = array.length-number; i <= array.length-1; i++){
            // Add each of these values to the empty array
            arr.push(array[i]);
        }
        // Return the new array
        return arr; 
    }
};

/** _.indexOf
* Arguments:
*   1) An array
*   2) A value
* Objectives:
*   1) Return the index of <array> that is the first occurrance of <value>
*   2) Return -1 if <value> is not in <array>
*   3) Do not use [].indexOf()!
* Edge Cases:
*   1) What if <array> has multiple occurances of val?
*   2) What if <val> isn't in <array>?
* Examples:
*   _.indexOf(["a","b","c"], "c") -> 2
*   _.indexOf(["a","b","c"], "d") -> -1
*/

_.indexOf = function(array, value) {
    // Iterate through each value of an array
    for (let i = 0; i < array.length; i++) {
        // If a value matches the input value
        if (array[i] === value) {
            // Return the index of where the match was found
            return i;
        }
    // If loop was exited with no match, return -1
    } return -1;
}


/** _.contains
* Arguments:
*   1) An array
*   2) A value
* Objectives:
*   1) Return true if <array> contains <value>
*   2) Return false otherwise
*   3) You must use the ternary operator in your implementation.
* Edge Cases:
*   1) did you use === ?
*   2) what if no <value> is given?
* Examples:
*   _.contains([1,"two", 3.14], "two") -> true
*/

_.contains = function(array, value) {
    // Return true if input array includes the input value, otherwise return false
    return (array.includes(value) ? true : false);
}

/** _.each
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) if <collection> is an array, call <function> once for each element
*      with the arguments:
*         the element, it's index, <collection>
*   2) if <collection> is an object, call <function> once for each property
*      with the arguments:
*         the property's value, it's key, <collection>
* Examples:
*   _.each(["a","b","c"], function(e,i,a){ console.log(e)});
*      -> should log "a" "b" "c" to the console
*/

_.each = function(collection, action) {
    // If input collection is an array
    if(Array.isArray(collection)) {
        // Iterate through each value of the array
        for(var i = 0; i < collection.length; i++) {
            // Pass each value to the input function as an argument, along with the index of that value, and the entire array respectively
            action(collection[i], i, collection);
        }
    } else {
        // Otherwise, assume input collection is an object and iterate through each key
        for (var key in collection) {
            // Pass each property value to the input function as an argument, along with its key, and the entire object respectively
            action(collection[key], key, collection);
        }
    }
}

/** _.unique
* Arguments:
*   1) An array
* Objectives:
*   1) Return a new array of all elements from <array> with duplicates removed
*   2) Use _.indexOf() from above
* Examples:
*   _.unique([1,2,2,4,5,6,5,2]) -> [1,2,4,5,6]
*/

_.unique = function (array){
    // Create blank array
    let uniqueArray = [];
    // Iterate through all values of input array
    for (let i = 0; i < array.length; i++) {
        // If the index of the current value can't be found in the new array 
        if (_.indexOf(uniqueArray, array[i]) === -1) {
            // Add the value to the array
            uniqueArray.push(array[i])
        }
    }
    // Return the new array
    return uniqueArray;
}

/** _.filter
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) call <function> for each element in <array> passing the arguments:
*      the element, it's index, <array>
*   2) return a new array of elements for which calling <function> returned true
* Edge Cases:
*   1) What if <function> returns something other than true or false?
* Examples:
*   _.filter([1,2,3,4,5], function(x){return x%2 === 0}) -> [2,4]
* Extra Credit:
*   use _.each in your implementation
*/

_.filter = function(array, func) {
    // Create empty array
    let arr = [];
    // Iterate through each value of input array
    for(let i = 0; i < array.length; i++){
        // If truthy value is returned when the current value, its index, and the entire array respectively are passed as arguments to the input function
        if(func(array[i], i, array)){
            // Add the current value to the new array
            arr.push(array[i]);
        }
    }
    // Return the new array
    return arr; 
};

/** _.reject
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) call <function> for each element in <array> passing the arguments:
*      the element, it's index, <array>
*   2) return a new array of elements for which calling <function> returned false
*   3) This is the logical inverse if _.filter(), you must use _.filter() in your implementation
* Examples:
*   _.reject([1,2,3,4,5], function(e){return e%2 === 0}) -> [1,3,5]
*/

_.reject = function(array, func){
    // Create empty array
    let arr = [];
    // Iterate through all values of input array
    for(let i = 0; i < array.length; i++){
        // If input function returns falsey when current value of input array, its index, and the whole array respectively are passed
        if (!func(array[i], i, array)){
            // Add current value to the new array
            arr.push(array[i]);
        }
    }
    // Return the new array
    return arr;
};

/** _.partition
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) Call <function> for each element in <array> passing it the arguments:
*       element, key, <array>
*   2) Return an array that is made up of 2 sub arrays:
*       0) An array that contains all the values for which <function> returned something truthy
*       1) An array that contains all the values for which <function> returned something falsy
* Edge Cases:
*   1) This is going to return an array of arrays.
* Examples:
*   _.partition([1,2,3,4,5], function(element,index,arr){
*     return element % 2 === 0;
*   }); -> [[2,4],[1,3,5]]
}
*/

_.partition = function(array, func){
    // Create empty array to hold truthies
    let aTruthies = [];
    // Create empty array to hold falies
    let aFalsies = [];
    // For all values of the input array
    for(let i = 0; i < array.length; i++) {
        // If input function returns truthy when current value of input array, its index, and the whole array respectively are passed
        if(func(array[i], i, array)){
            // Add current value to truthies array
            aTruthies.push(array[i])
        // If input function returns falsey when current value of input array, its index, and the whole array respectively are passed
        } else if (!func(array[i], i, array)) {
            // Add current value to falsies array
            aFalsies.push(array[i])
        };
    };
    // Return array with aTruthies followed by aFalsies arrays combined in 1 array
    return [aTruthies, aFalsies]
}

/** _.map
* Arguments:
*   1) A collection
*   2) a function
* Objectives:
*   1) call <function> for each element in <collection> passing the arguments:
*        if <collection> is an array:
*            the element, it's index, <collection>
*        if <collection> is an object:
*            the value, it's key, <collection>
*   2) save the return value of each <function> call in a new array
*   3) return the new array
* Examples:
*   _.map([1,2,3,4], function(e){return e * 2}) -> [2,4,6,8]
*/

_.map = function(collection, func) {
    // Create empty array 'outcome'
    let outcome = [];
    // If the input collection is an array
    if (Array.isArray(collection)) {
        // Iterate through all values of the array
        for (let i = 0; i < collection.length; i++) {
            // Push each value, its index, and the entire array respectively to the 'outcome' array 
            outcome.push(func(collection[i], i, collection))
        }
    } else {
        // Otherwise, assume it is an object and iterate through all keys with a for in loop
        for (let key in collection) {
            // Push each key value, key, and the entire object respectively to the 'outcome' array
            outcome.push(func(collection[key], key, collection))
        }
    }
    // Return the 'outcome' array
    return outcome
}

/** _.pluck
* Arguments:
*   1) An array of objects
*   2) A property
* Objectives:
*   1) Return an array containing the value of <property> for every element in <array>
*   2) You must use _.map() in your implementation.
* Examples:
*   _.pluck([{a: "one"}, {a: "two"}], "a") -> ["one", "two"]
*/

_.pluck = function(array, key) {
    /* Return the output of the map function when it's given -> (the array from this function, and a function 
    * that returns a property of its only parameter - where the property matches 'key' taken as argument from this outer function) 
    */
    return _.map(array, function(e){return e[key]})
}


/** _.every
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) Call <function> for every element of <collection> with the paramaters:
*      if <collection> is an array:
*          current element, it's index, <collection>
*      if <collection> is an object:
*          current value, current key, <collection>
*   2) If the return value of calling <function> for every element is true, return true
*   3) If even one of them returns false, return false
*   4) If <function> is not provided, return true if every element is truthy, otherwise return false
* Edge Cases:
*   1) what if <function> doesn't return a boolean
*   2) What if <function> is not given?
* Examples:
*   _.every([2,4,6], function(e){return e % 2 === 0}) -> true
*   _.every([1,2,3], function(e){return e % 2 === 0}) -> false
*/

_.every = function(collection, func) {
    // If the collection argument is an array
    if (Array.isArray(collection)) {
        // Iterate through each value of array
        for (let i = 0; i < collection.length; i++) {
            /* If the func argument is falsy and the current value of array is falsy OR if the func
            * argument is truthy (exists) and if the return value is falsy when passed the arguments
            * of - the current value of array, its index, and the entire array respectively
            */
            if (!func && !collection[i] || func && !func(collection[i], i, collection)) {
                // Return false
                return false
            }
        }
    // If the collection is an object
    } else if (typeof collection === 'object') {
        // For all keys in the object
        for (let key in collection) {
            /* If the func argument is falsy and the current key value of the object is falsy OR if the func
            * argument is truthy (exists) and the return value is falsy when passed the arguments
            * of - the current key value of the object, its key name, and the entire object respectively
            */
            if (!func && !collection[key] || func && !func(collection[key], key, collection)) {
                // Return false
                return false
            }
        }
    }
    // Return true (meaning nothing has triggered a false)
    return true
}



/** _.some
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) Call <function> for every element of <collection> with the paramaters:
*       if <collection> is an array:
*        current element, it's index, <collection>
*       if <collection> is an object:
*        current value, current key, <collection>
*   2) If the return value of calling <function> is true for at least one element, return true
*   3) If it is false for all elements, return false
*   4) If <function> is not provided return true if at least one element is truthy, otherwise return false
* Edge Cases:
*   1) what if <function> doesn't return a boolean
*   2) What if <function> is not given?
* Examples:
*   _.some([1,3,5], function(e){return e % 2 === 0}) -> false
*   _.some([1,2,3], function(e){return e % 2 === 0}) -> true
*/

_.some = function(collection, func) {
    // If the collection argument is an array
    if (Array.isArray(collection)) {
        // Iterate through each value of array
        for (let i = 0; i < collection.length; i++) {
            /* If the func argument is falsy and the current value of array is truthy OR if the func
            * argument is truthy (exists) and if the return value is truthy when passed the arguments
            * of - the current value of array, its index, and the entire array respectively
            */
            if (!func && collection[i] || func && func(collection[i], i, collection)) {
                // Return true
                return true
            }
        }
    // If the collection is an object
    } else if (typeof collection === 'object') {
        // For all keys in the object
        for (let key in collection) {
            /* If the func argument is falsy and the current key value of the object is truthy OR if the func
            * argument is truthy (exists) and the return value is truthy when passed the arguments
            * of - the current key value of the object, its key name, and the entire object respectively
            */
            if (!func && collection[key] || func && func(collection[key], key, collection)) {
                // Return true
                return true
            }
        }
    }
    // Return false (meaning nothing has triggered a true)
    return false
}

/** _.reduce
* Arguments:
*   1) An array
*   2) A function
*   3) A seed
* Objectives:
*   1) Call <function> for every element in <collection> passing the arguments:
*         previous result, element, index
*   2) Use the return value of <function> as the "previous result"
*      for the next iteration
*   3) On the very first iteration, use <seed> as the "previous result"
*   4) If no <seed> was given, use the first element/value of <collection> as <seed> and continue to the next element
*   5) After the last iteration, return the return value of the final <function> call
* Edge Cases:
*   1) What if <seed> is not given?
* Examples:
*   _.reduce([1,2,3], function(previousSum, currentValue, currentIndex){ return previousSum + currentValue }, 0) -> 6
*/

_.reduce = function(array, func, seed) {
    // Use the 'each' function to iterate through the input array and apply a function declared as the second argument
    _.each(array, function(element, i, array){
        // If 'seed' argument is undefined
        if(seed === undefined) {
            // Set seed to current value of array (which will be the first)
            seed = element;
        } else {
            /* Otherwise, call the input function using arguments of - 'seed's current value, the array's current 
            * index using the counter value, and the current index respectively - and assign that value to seed
            */
            seed = func(seed, element, i);
        }
    });
    // Return current value of seed
    return seed;
};

/** _.extend
* Arguments:
*   1) An Object
*   2) An Object
*   ...Possibly more objects
* Objectives:
*   1) Copy properties from <object 2> to <object 1>
*   2) If more objects are passed in, copy their properties to <object 1> as well, in the order they are passed in.
*   3) Return the update <object 1>
* Examples:
*   var data = {a:"one"};
*   _.extend(data, {b:"two"}); -> data now equals {a:"one",b:"two"}
*   _.extend(data, {a:"two"}); -> data now equals {a:"two"}
*/
// Declare function with 'object' paramater and spread operator 'objects' for more objects
_.extend = function(object, ...objects) {
    // Assign properties from objects in spread to first object argument, then assign the object to variable 'obj'
    var obj = Object.assign(object, ...objects);
    // Return new object 'obj'
    return obj;
}

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = _;
}
