const Article = require('../Models/Article')

const createArticle = async (req, res) => {
    const { title, paragraphs, images } = req.body;
  
    try {
      const newArticle = new Article({
        title,
        paragraphs,
        images,
      });
  
      await newArticle.save();
      res.status(201).json(newArticle);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  };


// Get all articles
const getArticles = async (req, res) => {
    try {
      const articles = await Article.find();
      res.status(200).json(articles);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };

// Get a single article
const getArticle = async (req, res) => {
    try {
      const article = await Article.findById(req.params.id);
      if (!article) return res.status(404).json({ message: 'Article not found' });
      res.status(200).json(article);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };


// Update an article
const updateArticle = async (req, res) => {
    const { title, paragraphs, images } = req.body;
  
    try {
      const updatedArticle = await Article.findByIdAndUpdate(
        req.params.id,
        { title, paragraphs, images },
        { new: true }
      );
      if (!updatedArticle) return res.status(404).json({ message: 'Article not found' });
      res.status(200).json(updatedArticle);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  };


// Delete an article
const deleteArticle = async (req, res) => {
    try {
      const deletedArticle = await Article.findByIdAndDelete(req.params.id);
      if (!deletedArticle) return res.status(404).json({ message: 'Article not found' });
      res.status(200).json({ message: 'Article deleted' });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };


module.exports = {
    createArticle,
    getArticle,
    updateArticle,
    deleteArticle,
    getArticles
}