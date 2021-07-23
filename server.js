const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const pagesRouter = require('./routes/pages');
const monggoose = require('mongoose');

const app = express();

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', pagesRouter);

// app.listen(3000, () => {
//     console.log('Express server is running.');
// });

monggoose.connect('mongodb://localhost:27017/ProjectWebsite', {useNewUrlParser: true, 
useUnifiedTopology: true}).then(() => {
    app.listen(3000, () => {
        console.log('MongoDB is connected and Express server is running.');
    });
});