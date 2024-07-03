const {Schema,model} = require('mongoose');

const contactSchema = new Schema({
    name: String,
    phoneNumber: String
});

// module.exports = model('Contact', contactSchema);

const Contact = model('Contact', contactSchema);

module.exports = Contact;
