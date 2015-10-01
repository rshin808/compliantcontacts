/**
 * Created by Reed on 10/1/2015.
 */

/**
 * A Contact represents a person.
 * @param firstName The first name of the Contact.
 * @param lastName The last name of the Contact.
 * @param address The address of the Contact.
 * @param zipCode The zip code of the Contact.
 * @param phoneNumber The phone number of the Contact.
 * @constructor The Contact Constructor.
 */
function Contact(firstName, lastName, address, zipCode, phoneNumber) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.address = address;
  this.zipCode = zipCode;
  this.phoneNumber = phoneNumber;

  this.counter = 0;

  /**
   * This increments the counter.
   * @returns {boolean}
   */
  this.call = function() {
    this.counter++;
    return true;
  };

  /**
   * This returns the number of calls.
   * @returns {number}
   */
  this.numCalls = function() {
    return this.counter;
  };
}

/**
 * This Contact List represents a list of Contacts.
 * @constructor The Contact List Constructor.
 */
function ContactList() {
  this.list = new Array();

  /**
   * This adds a Contact to the Contact List.
   * @param contact The Contact to add to the Contact List.
   */
  this.addContact = function(contact) {
    this.list.push(contact);
  };

  /**
   * This returns the length of the Contact List.
   * @returns {Number}
   */
  this.numContacts = function() {
    return this.list.length;
  };

  /**
   * This finds a Contact in the Contact List by the last name.
   * @param lName The last name to find.
   * @returns {*}
   */
  this.findContact = function(lName) {
    return _.where(this.list, {lastName : lName});
  };

  /**
   * This deletes Contacts from the Contact List.
   * @param firstName The first name of the Contact.
   * @param lastName The last name of the Contact.
   */
  this.deleteContact = function(firstName, lastName) {
    for(var i = 0; i < this.list.length; i++) {
      if(this.list[i].firstName === firstName && this.list[i].lastName === lastName)
      {
        this.list.splice(i, 1);
      }
    }
  };

  /**
   * This returns a string containing the Contacts sorted by last name.
   * @returns {Array.<T>}
   */
  this.listContacts = function() {
    var buffer = this.list.slice(0);
    for(var i = 2; i < buffer.length; i++) {
      for(var k = i; k > 1 && buffer[k].lastName.toLowerCase().localeCompare(buffer[k - 1].lastName.toLowerCase()) > 0; k--) {
        var temp = buffer[k];
        buffer[k] = buffer[k - 1];
        buffer[k - 1] = temp;
      }
    }
    return buffer.reverse();
  };
}
