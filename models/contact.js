const contacts = [];

class Contact
{
    constructor(fullName, email, subject, comment)
    {
        this.fullName = fullName;
        this.email = email;
        this.subject = subject;
        this.comment = comment;
    }

    save()
    {
        contacts.push(this);
    }
}

module.exports = Contact;