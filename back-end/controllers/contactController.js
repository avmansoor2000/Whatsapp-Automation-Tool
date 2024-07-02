const express = require('express');
const router = express.Router();
const Contact = require('../models/contact');

const getContacts = async(req,res) =>{
    const contacts = await Contact.find();
    res.json(contacts);
}

const postContact = async (req, res) => {
    const newContact = new Contact(req.body);
    await newContact.save();
    res.json(newContact);
};

module.exports = { 
    postContact,
    getContacts
}
