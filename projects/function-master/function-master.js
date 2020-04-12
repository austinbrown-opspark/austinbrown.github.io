//////////////////////////////////////////////////////////////////////
// Function 1 - Object Values ////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function objectValues(object) {
    // Create an empty array
    var storage = []
    // For every key in an object
    for (var key in object) {
        // Add the key value to the array
        storage.push(object[key])
    }
    // Return the array
    return storage;
}

//////////////////////////////////////////////////////////////////////
// Function 2 - Keys to String ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function keysToString(object) {
    // Create an empty array
    var storageKeyNames = [];
    // For every key in an object
    for (var key in object) {
        // Add the key name to the array
        storageKeyNames.push(key);
    }
    // Return the array
    return storageKeyNames.join(' ')
}

//////////////////////////////////////////////////////////////////////
// Function 3 - Values to String /////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function valuesToString(object) {
    // Create an empty array
    var storage = [];
    // Check every key in an object
    for (var key in object) {
        // If the key value is a string
        if (typeof object[key] === 'string') {
            // Add it to the array
            storage.push(object[key]);
        }
    }
    // Return the array
    return storage.join(' ');
}

//////////////////////////////////////////////////////////////////////
// Function 4 - Array or Object //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function arrayOrObject(collection) {
    // If the input is an array 
    if (Array.isArray(collection) === true) {
        // Return 'array'
        return 'array';
    // Otherwise if the input type is object
    } else if (typeof collection === 'object') {
        // Return 'object'
        return 'object';
    }
}

//////////////////////////////////////////////////////////////////////
// Function 5 - Capitalize Word //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeWord(string) {
    // Return the first letter of the string capitalized concatenated with the rest of the word
    return string[0].toUpperCase() + string.substr(1)
}

//////////////////////////////////////////////////////////////////////
// Function 6 - Capitalize All Words /////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeAllWords(string) {
    // Create an array comprised of each separate word from a given string
    var array = string.split(' ')
    // For every word in this array
    for (var i = 0; i < array.length; i++) {
        // Replace the word with - the first letter of the string capitalized concatenated with the rest of the word
        array[i] = array[i][0].toUpperCase() + array[i].substr(1)
    }
    // Return a string with all the words from the 
    return array.join(' ')
}

//////////////////////////////////////////////////////////////////////
// Function 7 - Welcome Message //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function welcomeMessage(object) {
    // Return a string that says 'Welcome' followed by the name property of a given object, capitalize the name and follow that with an exclamation point
    return "Welcome " + object.name.charAt(0).toUpperCase() + object.name.slice(1)+ '!';
}
//////////////////////////////////////////////////////////////////////
// Function 8 - Profile Info /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
function profileInfo(object) {
    // Return the name property of a given object with the first letter capitalized, followed by ' is a ', followed by the species property of the same object with the first letter capitalized
    return object.name.charAt(0).toUpperCase() + object.name.slice(1) + ' is a ' + object.species.charAt(0).toUpperCase() + object.species.slice(1);
}
//////////////////////////////////////////////////////////////////////
// Function 9 - Maybe Noises /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
function maybeNoises(object) {
    // If the noises property of a given object is defined and longer than 0
    if (object.noises !== undefined && object.noises.length > 0) {
        // Return an array with each value a separate word from noises 
        return object.noises.join(' ');
    } else {
        // Otherwise return a string that says 'there are no noises'
        return 'there are no noises';
    }
}

//////////////////////////////////////////////////////////////////////
// Function 10 - Has Words ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function hasWord(string, word) {
    // If the input string includes the input word
    if (string.includes(word)) {
        // Return true
        return true
        // Otherwise return false
    } else {
        return false
    }
}

//////////////////////////////////////////////////////////////////////
// Function 11 - Add Friend //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function addFriend (name, object) {
    // Add input name to friends property array of input object
    object.friends.push(name)
    // Return the object
    return object
}

//////////////////////////////////////////////////////////////////////
// Function 12 - Is Friend ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function isFriend(name, object) {
    // If friends property of input object is undefined
    if (object.friends !== undefined) {
        // Otherwise, for every value in the array of the friends property of the input object
        for (var i = 0; i < object.friends.length; i++) {
            // If the value matches the input name
            if (object.friends[i] === name) {
                // Return true
                return true
            }
        }
    }
    // Return false
    return false
}

//////////////////////////////////////////////////////////////////////
// Function 13 - Non-Friends /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function nonFriends(name, array) {
    // Create empty array for names user is not friends with
    var notFriends = [];
    // For everything in the input array
    for (var i = 0; i < array.length; i++) {
      // If the name value is not name the same as the input name
      if (array[i].name !== name) {
        // Add it to the notFriends array
        notFriends.push(array[i].name);
      }
    }
    // For everything in the input array
    for (var j = 0; j < array.length; j++) {
      // If the name value of an object in the array matches the input name
      if (array[j].name === name) {
        // For everything in the friends list of that object
        for (var k = 0; k < array[j].friends.length; k++) {
        // Delete the corresponding name from the 'notFriends' list
        notFriends.splice(notFriends.indexOf(array[j].friends[k]), 1)
        }
      }
    }
    // Return the notFriends array
    return notFriends;
}

//////////////////////////////////////////////////////////////////////
// Function 14 - Update Object ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function updateObject(object, key, value) {
    object[key] = value
    return object
}

//////////////////////////////////////////////////////////////////////
// Function 15 - Remove Properties ///////////////////////////////////
//////////////////////////////////////////////////////////////////////

function removeProperties(object, array) {
    // For all the values in an array
    for (var i = 0; i < array.length; i++) {
        // If the value, when used to refer to a key in a given object, returns a value from that object that is not undefined
        if (object[array[i]] !== undefined) {
            // Delete the key from the object
            delete object[array[i]]
        }
    }
}

//////////////////////////////////////////////////////////////////////
// Function 16 - Dedup ///////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function dedup(array) {
    // Create empty array for deduplicated array
    var deduped = []
    // For every value of the input array
    for (var i = 0; i < array.length; i++) {
        // If the value is not in the 'deduped' array
        if (!deduped.includes(array[i])) {
            // Add it to the 'deduped' array
            deduped.push(array[i])
        }
    }
    // Return the 'deduped' array
    return deduped
}

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.objectValues = objectValues;
    module.exports.keysToString = keysToString;
    module.exports.valuesToString = valuesToString;
    module.exports.arrayOrObject = arrayOrObject;
    module.exports.capitalizeWord = capitalizeWord;
    module.exports.capitalizeAllWords = capitalizeAllWords;
    module.exports.welcomeMessage = welcomeMessage;
    module.exports.profileInfo = profileInfo;
    module.exports.maybeNoises = maybeNoises;
    module.exports.hasWord = hasWord;
    module.exports.addFriend = addFriend;
    module.exports.isFriend = isFriend;
    module.exports.nonFriends = nonFriends;
    module.exports.updateObject = updateObject;
    module.exports.removeProperties = removeProperties;
    module.exports.dedup = dedup;
}