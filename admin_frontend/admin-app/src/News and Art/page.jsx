import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaPlus, FaTrash } from 'react-icons/fa';
import axios from 'axios';
import './DynamicForm.css';

export default function DynamicForm({ articleId, onSave }) {
  const [paragraphFields, setParagraphFields] = useState([{ paragraphTitle: '', paragraph: '' }]);
  const [imageFields, setImageFields] = useState([]);
  const [imagePreviews, setImagePreviews] = useState([]);
  const [articleTitle, setArticleTitle] = useState('');

  useEffect(() => {
    if (articleId) {
      // Fetch the article details for updating
      axios.get(`https://apptravel-1.onrender.com/api/articles/getArticle/${articleId}`).then(response => {
        const article = response.data;
        setArticleTitle(article.title);
        setParagraphFields(article.paragraphs.map(p => ({ paragraphTitle: p.title, paragraph: p.content })));
        setImageFields(article.images);
        setImagePreviews(article.images);
      }).catch(error => console.error('Error fetching article:', error));
    }
  }, [articleId]);

  const handleParagraphChange = (index, event) => {
    let data = [...paragraphFields];
    data[index][event.target.name] = event.target.value;
    setParagraphFields(data);
  };

  const handleImageChange = async (index, event) => {
    const file = event.target.files[0];
    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', 'gzcionwe'); // Replace with your Cloudinary upload preset

    try {
      const response = await axios.post('https://api.cloudinary.com/v1_1/dj1uyme6s/image/upload', formData); // Replace with your Cloudinary cloud name
      const imageUrl = response.data.secure_url;
      let data = [...imageFields];
      data[index] = imageUrl;
      setImageFields(data);

      let previews = [...imagePreviews];
      previews[index] = URL.createObjectURL(file);
      setImagePreviews(previews);
    } catch (error) {
      console.error('Error uploading image:', error);
    }
  };

  const addParagraphFields = () => {
    let newField = { paragraphTitle: '', paragraph: '' };
    setParagraphFields([...paragraphFields, newField]);
  };

  const addImageFields = () => {
    setImageFields([...imageFields, '']);
    setImagePreviews([...imagePreviews, '']);
  };

  const removeParagraphFields = (index) => {
    let data = [...paragraphFields];
    data.splice(index, 1);
    setParagraphFields(data);
  };

  const removeImageFields = (index) => {
    let data = [...imageFields];
    let previews = [...imagePreviews];
    data.splice(index, 1);
    previews.splice(index, 1);
    setImageFields(data);
    setImagePreviews(previews);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const articleData = {
      title: articleTitle,
      paragraphs: paragraphFields.map(({ paragraphTitle, paragraph }) => ({
        title: paragraphTitle,
        content: paragraph,
      })),
      images: imageFields,
    };

    try {
      if (articleId) {
        await axios.patch(`https://apptravel-1.onrender.com/api/articles/updateArticle/${articleId}`, articleData);
      } else {
        await axios.post('https://apptravel-1.onrender.com/api/articles/insertArticle', articleData);
      }
      if (onSave) onSave();
      window.location.reload();
    } catch (error) {
      console.error('Error submitting article:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="dynamic-form">
      <h2>{articleId ? 'Update Article' : 'Add Article'}</h2>
      <div className="form-group">
        <label>Article Title</label>
        <input
          type="text"
          name="articleTitle"
          value={articleTitle}
          onChange={(e) => setArticleTitle(e.target.value)}
          required
        />
      </div>

      <h3>Paragraphs</h3>
      {paragraphFields.map((form, index) => (
        <div key={index} className="form-group dynamic-group">
          <label>Paragraph Title</label>
          <input
            type="text"
            name="paragraphTitle"
            value={form.paragraphTitle}
            onChange={(event) => handleParagraphChange(index, event)}
          />
          <label>Paragraph</label>
          <textarea
            name="paragraph"
            value={form.paragraph}
            onChange={(event) => handleParagraphChange(index, event)}
            required
          />
          <button type="button" className="remove-btn" onClick={() => removeParagraphFields(index)}>
            <FaTrash /> Remove
          </button>
        </div>
      ))}
      <button type="button" className="add-btn" onClick={addParagraphFields}>
        <FaPlus /> Add More Paragraphs
      </button>

      <h3>Images</h3>
      {imageFields.map((image, index) => (
        <div key={index} className="form-group dynamic-group">
          <label>Image File</label>
          <input
            type="file"
            name="image"
            onChange={(event) => handleImageChange(index, event)}
          />
          {imagePreviews[index] && (
            <img src={imagePreviews[index]} alt="Preview" className="image-preview" />
          )}
          <button type="button" className="remove-btn" onClick={() => removeImageFields(index)}>
            <FaTrash /> Remove
          </button>
        </div>
      ))}
      <button type="button" className="add-btn" onClick={addImageFields}>
        <FaPlus /> Add More Images
      </button>

      <button type="submit" className="submit-btn">{articleId ? 'Update' : 'Submit'}</button>
        {articleId && (
        <button onClick={() => window.location.reload()}>
        Go to Article List
        </button>
        )}
    </form>
  );
}
