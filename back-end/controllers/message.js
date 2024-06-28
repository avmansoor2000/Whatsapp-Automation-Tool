const express = require('express');
const router = express.Router();
const twilio = require('twilio');
const Contact = require('../models/contact');

const client = new twilio(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);

router.post('/', async (req, res) => {
    const message = req.body.message;
    const contacts = await Contact.find();

    contacts.forEach(contact => {
        client.messages.create({
            body: message,
            to: `whatsapp:${contact.phoneNumber}`,
            from: `whatsapp:${process.env.TWILIO_WHATSAPP_NUMBER}`
        })
        .then(message => console.log(message.sid))
        .catch(error => console.error(error));
    });

    res.json({ status: 'Messages sent' });
});

module.exports = router;
