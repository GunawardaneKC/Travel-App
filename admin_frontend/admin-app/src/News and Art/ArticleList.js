import React, { useState, useEffect } from 'react';
import axios from 'axios';
import DynamicForm from './page';
import './ArticleList.css';

export default function ArticleList() {
  const [articles, setArticles] = useState([]);
  const [selectedArticleId, setSelectedArticleId] = useState(null);

  useEffect(() => {
    fetchArticles();
  }, []);

  const fetchArticles = async () => {
    try {
      const response = await axios.get('https://apptravel-1.onrender.com/api/articles/getArticles');
      setArticles(response.data);
    } catch (error) {
      console.error('Error fetching articles:', error);
    }
  };

  const handleEdit = (articleId) => {
    setSelectedArticleId(articleId);
  };

  const handleDelete = async (articleId) => {
    try {
      await axios.delete(`https://apptravel-1.onrender.com/api/articles/deleteArticle/${articleId}`);
      fetchArticles();
    } catch (error) {
      console.error('Error deleting article:', error);
    }
  };

  const handleSave = () => {
    setSelectedArticleId(null);
    fetchArticles();
  };

  return (
    <div className="article-list">
      {selectedArticleId ? (
        <DynamicForm articleId={selectedArticleId} onSave={handleSave} />
      ) : (
        <>
          <h2>Articles</h2>
          <ul>
            {articles.map((article) => (
              <li key={article._id}>
                <h3>{article.title}</h3>
                <button onClick={() => handleEdit(article._id)}>Edit</button>
                <button onClick={() => handleDelete(article._id)}>Delete</button>
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
}
