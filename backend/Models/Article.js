const mongoose = require('mongoose');

const articleSchema = new mongoose.Schema({
  title: { type: String, required: true },
  paragraphs: [
        {
        title: { type: String },
        content: { type: String, required: true } // Image tied to description
      }
  ],
  images: [{ type: String, required: true }],
});

const Article = mongoose.model('Article', articleSchema);

module.exports = Article;
