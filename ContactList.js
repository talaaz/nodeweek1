//should be an array
const Contact = require('./Contact.js');
class ContactList {
  constructor() {
    this.list = [];
  }
  addContact(contact) {
    if (contact instanceof Contact) {
      this.list.push(contact);
      // contacts.list.push(jimmy);
    }
  }
};

module.exports = ContactList;
