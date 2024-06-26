import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './page.css';

export default function Home() {
  const [formData, setFormData] = useState({
    description: '',
    img: ''
  });

  const [getAccom, setAccom] = useState([]);

  const [previewImage, setPreviewImage] = useState(null);
  const [editingIndex, setEditingIndex] = useState(null);

  const uploadImage = async (files) => {
    if (!files || files.length === 0) {
      console.error('No files provided for upload');
      return;
    }

    setPreviewImage(URL.createObjectURL(files[0]));

    const uploadData = new FormData();
    uploadData.append('file', files[0]);
    uploadData.append('upload_preset', 'gzcionwe');

    try {
      const response = await axios.post('https://api.cloudinary.com/v1_1/dj1uyme6s/image/upload', uploadData);
      if (response.data && response.data.secure_url) {
        setFormData((prev) => ({ ...prev, img: response.data.secure_url }));
      } else {
        console.error('Image upload error: No secure_url in response', response);
      }
    } catch (error) {
      console.error('Image upload error:', error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (editingIndex !== null) {
        await axios.put(`https://apptravel-1.onrender.com/accom/updateAccom/${getAccom[editingIndex]._id}`, formData);
      } else {
        await axios.post('https://apptravel-1.onrender.com/accom/insertAccom', formData);
      }
      fetchAccommodations();
      resetForm();
      window.location.reload();
    } catch (error) {
      console.error('Form submission error:', error);
    }
  };

  const handleEdit = (index) => {
    const accomToEdit = getAccom[index];
    setFormData({
      description: accomToEdit.description,
      img: accomToEdit.img
    });
    setPreviewImage(accomToEdit.img);
    setEditingIndex(index);
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`https://apptravel-1.onrender.com/accom/deleteAccom/${id}`);
      fetchAccommodations();
    } catch (error) {
      console.error('Error deleting accommodation:', error);
    }
  };

  const fetchAccommodations = async () => {
    try {
      const response = await axios.get('https://apptravel-1.onrender.com/accom/getAccom');
      setAccom(response.data);
    } catch (error) {
      console.error('Error fetching accommodations:', error);
    }
  };

  const resetForm = () => {
    setFormData({ description: '', img: '' });
    setPreviewImage(null);
    setEditingIndex(null);
  };

  useEffect(() => {
    fetchAccommodations();
  }, []);

  return (
    <div className="container">
      <h1 className="title">Accommodations Insert</h1>
      <form className="form" onSubmit={handleSubmit}>
        <input
          className="input"
          type="text"
          name="description"
          value={formData.description}
          onChange={(e) => setFormData({ ...formData, description: e.target.value })}
          placeholder="Enter description"
          required
        />
        <input
          className="input"
          type="file"
          name="image"
          onChange={(e) => uploadImage(e.target.files)}
          required
        />
        <button className="button" type="submit">{editingIndex !== null ? 'Update' : 'Submit'}</button>
        {editingIndex !== null && <button className="button" type="button" onClick={resetForm}>Cancel</button>}
      </form>
      {previewImage && <img className="preview" src={previewImage} alt="Preview" />}
      
      <div className="accommodations">
        {getAccom.map((accom, index) => (
          <div key={accom._id} className="accom-item">
            <img
              className="accom-image"
              src={accom.img}
              alt={`Accom ${index} Image`}
            />
            <p className="accom-description">{accom.description}</p>
            <button className="button" onClick={() => handleEdit(index)}>Edit</button>
            <button className="button" onClick={() => handleDelete(accom._id)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
}
