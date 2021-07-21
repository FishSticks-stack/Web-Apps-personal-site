const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const Contact = require('../models/contact');

const router = express.Router();

router.get('/', (req, res) => {
    res.render('index');
});

router.get('/tea', (req, res) => {
    res.render('tea');
});

router.get('/cakes', (req, res) => {
    res.render('cakes');
});

router.get('/coffee', (req, res) => {
    res.render('coffee');
});

router.get('/contact', (req, res) => {
    res.render('contact');
});

router.get('/iceCreams', (req, res) => {
    res.render('iceCreams');
});

router.get('/mugs', (req, res) => {
    res.render('mugs');
});

router.get('/pastries', (req, res) => {
    res.render('pastries');
});
//bc our method form is POST, we must do .post instead of get for it to work
router.post('/thanks', (req, res) => {

    const fullName = req.body.fullName;
    const email = req.body.email;
    const subject = req.body.subject;
    const comment = req.body.comment;

    const contact = new Contact(fullName, email, subject, comment);
    contact.save();

    res.render('thanks', {contact: contact});
});

router.get('/blog', (req, res) => {
    res.render('blog');
});

module.exports = router;