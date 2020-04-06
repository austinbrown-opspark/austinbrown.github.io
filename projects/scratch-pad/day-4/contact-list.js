// #!/usr/bin/env node

'use strict';

/**
 * 4: Contact List
 * 
 *  a. Create a factory Function called makeContact(id, nameFirst, nameLast) 
 *     that returns a contact object.
 *     
 *          ex: makeContact(1, 'Max', 'Gaudin'); // => {id: 1, nameFirst: 'Max', nameLast: 'Gaudin'}
 *     
 *  b. Create a factory Function called makeContactList that returns an Object 
 *     that manages contacts. The contact-list object should have the following API:
 *       
 *      1. length(): returns the number of contacts within the list.
 *      2. addContact(contact): takes a contact object to be added to the 
 *         contact-list.
 *      3. findContact(fullName): takes a full-name String, like 'Max Gaudin', and 
 *         returns the contact object if found in the contacts-list, or, 
 *         undefined if the fullName does not match any contacts in the list.
 *      4. removeContact(contact): takes a contact object to be removed from 
 *         the contact-list.
 * 
 * BONUS : add a printAllContactNames() Function to your makeContactList() factory, so that the 
 *         contact-list returned has an all() API. The printAllContactNames() Function should 
 *         return a String formated with all the full-names of the separated 
 *         with a line-break, like so:
 *          
 *         myContacts.printAllContactNames(); // => Max Gaudin
 *                                                  John Fraboni
 *                                                  Your Mom
 *          
 *          WARNING: To pass the bonus test, the LAST full name should have NO
 *          new-line character added after it!
 */

// YOUR CODE GOES BELOW HERE //
function makeContact(id, nameFirst, nameLast) {

var contact = {}
return contact = {id: id, nameFirst: nameFirst, nameLast: nameLast}

}

function makeContactList() {
    /*
     * You need something here to hold contacts. See length api for a hint:
     */
     
     // Initialize empty array for contacts list
    var contacts = [];
    
    return {
        // we implemented the length api for you //
        length: function() {
            return contacts.length;
        },
        // Adds a contact object to the main contacts array
        addContact: function(contact) {
            return contacts.push(contact)
        },
        findContact: function(fullName) {
            for (var i = 0; i < contacts.length; i++) {
                // If any full name in the contacts list matches "fullName"
                if (fullName == contacts[i].nameFirst + " " + contacts[i].nameLast) {
                    // Return the full contact
                    return contacts[i]
                } else {
                    // Otherwise return undefined
                    return undefined
                }
            }
        },
        removeContact: function(contact) {
            for (var i = 0; i < contacts.length; i++) {
                // If a contact in the list matches the contact given for removal 
                if (contact == contacts[i]) {
                    // Remove the contact from the list
                    contacts.splice(i, 1)
                }
            }
        },
        printAllContactNames: function() {
            var allContacts = ""
            // For all contacts in the list
            for (var i = 0; i < contacts.length; i++) {
                // Concatenate the first and last name and add it to a string 
                allContacts += contacts[i].nameFirst + " " + contacts[i].nameLast
                // Skip to the next line as long as its not the last contact in the list
                if (i != contacts.length-1) {
                    allContacts += "\n"
                }
            }
            // Return the newly created string with all names
            return allContacts
        }
    }
}




// YOUR CODE GOES ABOVE HERE //




// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
(typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.makeContact = makeContact;
    module.exports.makeContactList = makeContactList;
}
