const express = require('express');
const router = express.Router();
const Contact = require('../models/contact');

router.get('/', async (req, res) => {
    const contacts = await Contact.find();
    res.json(contacts);
});

router.post('/', async (req, res) => {
    try{
    console.log(Contact);
    const newContact = new Contact(req.body);
    console.log(req.body);
    await newContact.save();
    res.status(200).json(newContact);
}catch(error){
    res.status(500).json('error')
}
});

module.exports = router;
