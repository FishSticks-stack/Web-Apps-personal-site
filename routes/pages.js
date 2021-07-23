const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const Contact = require('../models/contact');
const Article = require('../models/blog');

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
// router.post('/thanks', (req, res) => {

//     const fullName = req.body.fullName;
//     const email = req.body.email;
//     const subject = req.body.subject;
//     const comment = req.body.comment;

//     const contact = new Contact(fullName, email, subject, comment);
//     contact.save();

//     res.render('thanks', {contact: contact});
// });
router.post('/thanks', (req, res) => {
    //use schema model
    const contact = new Contact({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        subject: req.body.subject,
        comment: req.body.comment
    });

    contact.save()
    .then(result => {
        res.render('thanks', {contact: result}); })
         .catch(err => console.log(err))
});


router.get('/blog', (req, res) => {
    res.render('blog');
});

// router.post('/blogsubmitted', (req, res) => {
//     const title = req.body.title;
//     const content = req.body.content;
//     const date = new Date().toLocaleDateString();

//     const article = new Article(title, date, content);
//     article.save();

//     const articles = article.findAll();
    
//     res.render('blogsubmitted', {articles: articles});
// });

router.post('/blogsubmitted', (req, res) => {
    const date = new Date().toLocaleString();

    const article = new Article({
        title: req.body.title,
        author: req.body.author,
        date: date,
        content: req.body.content
    });

    Article.collection.insertOne(article)
        .then(result => {
            console.log('result'); })
        .catch(err => console.log(err));

    Article.find()
        .then(results => {
            res.render('blogsubmitted', {articles: results}); })
        .catch(err => console.log(err));

});

module.exports = router;