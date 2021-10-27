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
 *     that manages contacts. The contact-list object should have the following methods:
 *       
 *      1. length(): returns the number of contacts within the list.
 *      2. addContact(contact): takes a contact object to be added to the 
 *         contact-list.
 *      3. findContact(fullName): takes a full-name String, like 'Max Gaudin', and 
 *         returns the contact object if found in the contacts-list, or, 
 *         undefined if the fullName does not match any contacts in the list.
 *      4. removeContact(contact): takes a contact object to be removed from 
 *         the contact-list.
 *      5. add a printAllContactNames() Function to your makeContactList() factory. The printAllContactNames() Function should 
 *         return a String formated with all the full-names of the separated 
 *         with a line-break, like so:
 *          
 *         myContacts.printAllContactNames(); // => Max Gaudin
 *                                                  John Fraboni
 *                                                  Kaelyn Chresfield
 *          
 *          WARNING: To pass this test, the LAST full name should have NO
 *          new-line character added after it!
 */

// YOUR CODE GOES BELOW HERE //

// create a factory function “makeContact”
//include parameters “id”, “nameFirst", “nameLast"
function makeContact(id, nameFirst, nameLast) {
    // return contact object
    return {
        id: id,
        nameFirst: nameFirst,
        nameLast: nameLast
    }
} 

//create a factory function “makeContactList”
function makeContactList(id, nameFirst, nameLast) {
    //create an array <contactList> to hold contacts
    var contactList = [];
    //returns an object that manages contacts
    return {
        id: id,
        nameFirst: nameFirst,
        nameLast: nameLast,
        // create function <length()> 
        length:function() {
            //return length of array <contactList>
            return contactList.length;
        },
        // create function <addContact(contact)>
        addContact: function (contact) {
            // push object <contact> into array <contactList>
            contactList.push(contact);
        },
        // create function <findContact(contact)>
        findContact: function (fullName) {
            // loop through array <contactList>
            for (var i = 0; i < contactList.length; i++) {
                if (`${contactList[i].nameFirst} ${contactList[i].lastName}` == `${fullName}`) {
                    return contactList[i];
                } else {
                    return undefined;
                }
            }
        },
        // create function <removeContact(contact)>
        removeContact: function (contact) {
            // loop through array <contactList>
            for (var i = 0; i < contactList.length; i++) {
                if (contactList[i].id === contact) {
                    delete contactList[i];
                }
            }
        },
        // create function <printAllContactNames()>
        printAllContactNames: function () {
            // loop through array <contactList>
            for (var i = 0; i < contactList.length; i++) {
                console.log(`${constactList[i].nameFirst} ${contactList[i].lastName}`);
            }
        },
    }

// YOUR CODE GOES ABOVE HERE //
}

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
(typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.makeContact = makeContact;
    module.exports.makeContactList = makeContactList;
}
