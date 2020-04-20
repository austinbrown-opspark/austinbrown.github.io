// #!/usr/bin/env node

'use strict';

var customers = require('./data/customers.json');
var _ = require("lodown-austinbrown-opspark");

/**
 * 1. Import your lodown module using the require() method,
 *    using the string 'lodown-<my-username>', or whatever
 *    name with which you published your npm lodown project.
 *
 * 2. Solve all problems as outlined in the README.
 *
 * 3. We started the first one for you as an example! Make the rest in that style.
 *
 * 4. To test your work, run the following command in your terminal:
 *
 *    npm start --prefix ./projects/let-s-get-functional
 *
 *    IMPORTANT: Make sure you replace <YOUR_GITHUB_FOLDER with your actual github folder name that is in your workspace.
 */

var maleCount = function(array) {
    // I: array
    // O: number
    
    // Using filter, find the number of male customers in the array
    let arrOfMales = _.filter(array, function(customerObj){
        // Filter all of the male customers
        // Each customerObj has a gender prop
        return customerObj.gender === "male";
    });
    return arrOfMales.length; 
};

//must include seed if first value type is different than desired output type 
var femaleCount = function(array){
    // I: array
    // O: number
    
    // using the reduce function find the number of female customers
    return _.reduce(array, function(sum, customerObj){
        // if the customerObj is a female
            // increment sum by 1
            if (customerObj.gender === 'female') {
                sum++
            }
        // if the customerObj is not a female
            // keep current sum
            return sum
    }, 0);
    
}

            
var oldestCustomer = function(array) {
    // I: array
    // O: string
    
    // Create variable to hold customer name
    var customer = ""
    // Use reduce function to find oldest age
    _.reduce(array, function(oldest, customerObj){
        // If the current customers age is older than the current oldest found age
        if (customerObj.age > oldest) {
            // Record the customers name in the customer variable 
            customer = customerObj.name
            // Return the age as the accumulator (seed) for the next comparison
            return customerObj.age
        } else {
            // Otherwise, return the same oldest age
            return oldest
        }
    }, 0)
    // Return name in customer variable
    return customer
};

var youngestCustomer = function(array) {
    // I: array
    // O: string
    
    // Create variable to hold customer name
    var customer = ""
    // Use reduce function to find oldest age
    _.reduce(array, function(youngest, customerObj){
        // If the current customers age is older than the current oldest found age
        if (customerObj.age < youngest) {
            // Record the customers name in the customer variable 
            customer = customerObj.name
            // Return the age as the accumulator (seed) for the next comparison
            return customerObj.age
        } else {
            // Otherwise, return the same oldest age
            return youngest
        }
    // Seed starts at 1000 to begin coparison with numbers for the reduce function instead of the object, and to ensure that it is not lower than any current customers
    }, 1000)
    // Return name in customer variable
    return customer
};

var averageBalance = function(array) {
    // I: array
    // O: number
    
    // Initialize a total set to 0
    let total = 0;
    // For all objects in the array argument
    for (let i in array) {
        // add the 'balance' property to the total - which requires removing the '$' and ',' and coverting the string to number
        total += (parseFloat(array[i].balance.replace(/\$|,/g, '')))
    }
    // Return the quotient of the total of all balances divided by the number of customers in the array
    return total / array.length
}

var firstLetterCount = function(array, letter) {
    // I: array, string
    // O: number
    
    // Initialize a total set to 0
    let total = 0;
    // For all objects in the array argument
    for (let i in array) {
        // add 1 to the total if the fist letter of the name property of the current object matches the 
        // letter taken as argument when they are both made upper case, otherwise add 0
        total += (array[i].name[0].toUpperCase() === letter.toUpperCase()) ? 1 : 0
    }
    // Return the total
    return total
}

var friendFirstLetterCount = function(array, customer, letter) {
    // I: array, string, string
    // O: number
    
    // Cycle through the array of customer objects 1 by 1, stop when customerObj has been assigned
    for (let i = 0; !customerObj; i++) {
        // If name property of the current object matches the customer argument
        if (array[i].name.toLowerCase() === customer.toLowerCase()) {
            // Create customerObj variable and assign the current customer object
            var customerObj = array[i]
        }
    }
    // Reduce friends property of customerObj, adding 1 to the accumulator every time an object
    // in the array has a name property that matches the letter argument
    return customerObj.friends.reduce(function(acc, curr) {
        if(curr.name[0].toLowerCase() === letter.toLowerCase()) {
            acc++;
        }
        return acc;
    }, 0);
};

var friendsCount = function(array, name) {
    // I: array, string
    // O: array
    
    // Create empty array to hold names
    var names = []
    // For every person in the input array
    for (let person of array) {
        // And for every friend in their friends list
        for (let friend of person.friends) {
            // If the friend name matches the input name
            if (friend.name === name) {
                // Add the name of the person who's friend it is to the names list
                names.push(person.name)
            }
        }
    }
    // Return the names list
    return names
}

var topThreeTags = function(array) {
    // I: array
    // O: array
    
    // Pluck all the arrays of 'tags' from each person and concat them into a single array using reduce
    let allTags = _.reduce(_.pluck(array, 'tags'), (acc, val) => acc.concat(val));
    // Create empty object to hold a count of all tags with their name associated
    let tagStats = {},
        tagArr = [];
    
    // Iterate through every tag in the allTags array
    for (let tag of allTags) {
        // Record a name as a property in tagStats for each tag and add 1 to the value for each time the name is counted
        (!tagStats[tag]) ? tagStats[tag] = 1 : tagStats[tag]++
    };
    for (let key in tagStats) {
        // Push every key name and value as its own object to the tagArr array
        tagArr.push({name: key, count: tagStats[key]});
    };
    // Sort the objects in the tagArr by their count key value
    tagArr.sort((a,b) => b.count - a.count);
    // Return the name key values of the first three objects in tagArr
    return [tagArr[0].name, tagArr[1].name, tagArr[2].name];
};

var genderCount = function(array){
    // I: array
    // O: object
    
   // Create object to hold gender statistics
   let genderObject = {};
   // Add property 'male' with total number of males using maleCount function
   genderObject.male = maleCount(array);
   // Add property 'female' with total number of females using femaleCount function
   genderObject.female = femaleCount(array);
   // Use reduce function to calculate total number of non-binary genders and assign to new property of 'non-binary'
   genderObject["non-binary"] = (_.reduce(array, function(acc, currObj) {
        // If the current object gender property is non-binary
        if (currObj.gender === "non-binary") {
            // Add 1 to accumulator
            acc++;
        } 
        // Return the the accumulator
        return acc;
    }, 0));
   // Return the final genderObject
    return genderObject;
};

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// here, export any references you need for tests //
module.exports.maleCount = maleCount;
module.exports.femaleCount = femaleCount;
module.exports.oldestCustomer = oldestCustomer;
module.exports.youngestCustomer = youngestCustomer;
module.exports.averageBalance = averageBalance;
module.exports.firstLetterCount = firstLetterCount;
module.exports.friendFirstLetterCount = friendFirstLetterCount;
module.exports.friendsCount = friendsCount;
module.exports.topThreeTags = topThreeTags;
module.exports.genderCount = genderCount;
