// schema as a model
const mongoose = require('mongoose');

var contactSchema = new mongoose.Schema({
    firstName: {type: String},
    lastName: {type: String},
    email: {type: String},
    subject: {type: String},
    comment: {type: String}
});

module.exports = mongoose.model('Contact', contactSchema);

//class model
// const contacts = [];

// class Contact
// {
//     constructor(fullName, email, subject, comment)
//     {
//         this.fullName = fullName;
//         this.email = email;
//         this.subject = subject;
//         this.comment = comment;
//     }

//     save()
//     {
//         contacts.push(this);
//     }
// }

// module.exports = Contact;