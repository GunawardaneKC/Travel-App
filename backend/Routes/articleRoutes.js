const Controller = require('../Controller/article');

const express = require('express');

const router = express.Router();

router.post('/insertArticle', Controller.createArticle);
router.get('/getArticles', Controller.getArticles);
router.get('/getArticle/:id', Controller.getArticle);
router.patch('/updateArticle/:id', Controller.updateArticle);
router.delete('/deleteArticle/:id', Controller.deleteArticle);

module.exports = router;