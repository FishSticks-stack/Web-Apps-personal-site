//use a schema model

const mongoose = require('mongoose');

var articleSchema = new mongoose.Schema({
    title: {type: String},
    author: {type: String},
    date: {type: String},
    content: {type: String}
});

module.exports = mongoose.model('Article', articleSchema);


// const articles = [];

// class Article
// {
//     constructor(title, date, content)
//     {
//         this.title = title;
//         this.date = date;
//         this.content = content;
//     }

//     save()
//     {
//         articles.push(this);
//     }

//     findAll()
//     {
//         return articles;
//     }
// }

// module.exports = Article;