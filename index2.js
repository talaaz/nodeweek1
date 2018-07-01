const Contact = require("./Contact.js");
const ContactList = require("./ContactList.js");
let jimmy = new Contact("jimmy", 28);
jimmy.addPhone("759387094");
// jimmy.call();
// jimmy.birthday();

console.log(JSON.stringify(jimmy));
let contacts = new ContactList("contacts1.json");
contacts.addContact(jimmy);
contacts.addContact(new Contact("Jane", 2))
// contacts.list.push(jimmy)
console.log(contacts)
// console.log(jimmy instanceof Contact);
// // let jill = new Person("jill");
// jill.call();
contacts.save()
.then(() => { console.log("Contacts written")}
)
.catch(console.log);
