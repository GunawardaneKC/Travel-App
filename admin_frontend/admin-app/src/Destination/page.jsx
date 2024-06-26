import React, { useState , useEffect} from 'react';
import axios from 'axios';
import './page.css';

export default function Destination() {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    image: ''
  });

  const [getDesti, setDesti] = useState([]);
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
        setFormData((prev) => ({ ...prev, image: response.data.secure_url }));
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
        await axios.patch(`https://apptravel-1.onrender.com/api/desti/${getDesti[editingIndex]._id}`, formData);
      } else {
        await axios.post('https://apptravel-1.onrender.com/api/desti', formData);
      }
      fetchDestinations();
      resetForm();
      window.location.reload();
    } catch (error) {
      console.error('Form submission error:', error);
    }
  };

  const handleEdit = (index) => {
    const destiToEdit = getDesti[index];
    setFormData({
      title: destiToEdit.title,
      description: destiToEdit.description,
      image: destiToEdit.image
    });
    setPreviewImage(destiToEdit.image);
    setEditingIndex(index);
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`https://apptravel-1.onrender.com/api/desti/${id}`);
      fetchDestinations();
    } catch (error) {
      console.error('Error deleting accommodation:', error);
    }
  };

  const fetchDestinations = async () => {
    try {
      const response = await axios.get('https://apptravel-1.onrender.com/api/desti');
      setDesti(response.data);
    } catch (error) {
      console.error('Error fetching accommodations:', error);
    }
  };

  const resetForm = () => {
    setFormData({ title: '', description: '', image: '' });
    setPreviewImage(null);
    setEditingIndex(null);
  };

  useEffect(() => {
    fetchDestinations();
  }, []);

  return (
    <div className="container">
      <h1 className="title">Destination Insert</h1>
      <form className="form" onSubmit={handleSubmit}>
        <input
          className="input"
          type="text"
          name="title"
          value={formData.title}
          onChange={(e) => setFormData({ ...formData, title: e.target.value })}
          placeholder="Enter title"
          required
        />
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
        {editingIndex !== null && <button className="button cancel-button" type="button" onClick={resetForm}>Cancel</button>}
      </form>
      {previewImage && <img className="preview" src={previewImage} alt="Preview" />}

      <div className="destinations">
        {getDesti.map((desti, index) => (
          <div key={desti._id} className="desti-item">
            <p className="desti-title">{desti.title}</p>
            <img
              className="desti-image"
              src={desti.image}
              alt={`Desti ${index} Image`}
            />
            <p className="desti-description">{desti.description}</p>
            <div className="button-group">
              <button className="button edit-button" onClick={() => handleEdit(index)}>Edit</button>
              <button className="button delete-button" onClick={() => handleDelete(desti._id)}>Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
