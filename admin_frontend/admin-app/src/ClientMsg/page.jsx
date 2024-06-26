import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './page.css';

export default function ClientManagement() {
  const [formData, setFormData] = useState({
    img: '',
    name: '',
    messages: ''
  });
  const [clients, setClients] = useState([]);
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
        await axios.put(`https://apptravel-1.onrender.com/api/client/${clients[editingIndex]._id}`, formData);
      } else {
        await axios.post('https://apptravel-1.onrender.com/api/client/', formData);
      }
      fetchClients();
      resetForm();
      window.location.reload();
    } catch (error) {
      console.error('Form submission error:', error);
    }
  };

  const handleEdit = (index) => {
    const clientToEdit = clients[index];
    setFormData({
      img: clientToEdit.img,
      name: clientToEdit.name,
      messages: clientToEdit.messages
    });
    setPreviewImage(clientToEdit.img);
    setEditingIndex(index);
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`https://apptravel-1.onrender.com/api/client/${id}`);
      fetchClients();
    } catch (error) {
      console.error('Error deleting client:', error);
    }
  };

  const fetchClients = async () => {
    try {
      const response = await axios.get('https://apptravel-1.onrender.com/api/client/');
      setClients(response.data);
    } catch (error) {
      console.error('Error fetching clients:', error);
    }
  };

  const resetForm = () => {
    setFormData({ img: '', name: '', messages: '' });
    setPreviewImage(null);
    setEditingIndex(null);
  };

  useEffect(() => {
    fetchClients();
  }, []);

  return (
    <div className="container">
      <h1 className="title">Client Management</h1>
      <form className="form" onSubmit={handleSubmit}>
        <input
          className="input"
          type="text"
          name="name"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          placeholder="Enter name"
          required
        />
        <textarea
          className="input"
          name="messages"
          value={formData.messages}
          onChange={(e) => setFormData({ ...formData, messages: e.target.value })}
          placeholder="Enter message"
          required
        />
        <input
          className="input"
          type="file"
          name="img"
          onChange={(e) => uploadImage(e.target.files)}
          required
        />
        <button className="button" type="submit">{editingIndex !== null ? 'Update' : 'Submit'}</button>
        {editingIndex !== null && <button className="button cancel-button" type="button" onClick={resetForm}>Cancel</button>}
      </form>
      {previewImage && <img className="preview" src={previewImage} alt="Preview" />}

      <div className="clients">
        {clients.map((client, index) => (
          <div key={client._id} className="client-item">
            <p className="client-name">{client.name}</p>
            <img
              className="accom-image"
              src={client.img}
              alt={`Client ${index} Image`}
            />
            <p className="client-message">{client.messages}</p>
            <div className="button-group">
              <button className="button edit-button" onClick={() => handleEdit(index)}>Edit</button>
              <button className="button delete-button" onClick={() => handleDelete(client._id)}>Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
