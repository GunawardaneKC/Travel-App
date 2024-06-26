import React, { useState } from 'react';
import axios from 'axios';
import './addtour.css';

export default function AddTourPackage() {
  const [formData, setFormData] = useState({
    packageName: '',
    packageDays: '',
    images: [],
    imageDescriptions: [],
    Arrival: {
      Night: [],
      Location: [],
      Experience: []
    }
  });

  const [imagePreviews, setImagePreviews] = useState([]);
  const [imageDescriptionPreviews, setImageDescriptionPreviews] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleImageUpload = async (file) => {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', 'gzcionwe'); // Replace with your Cloudinary upload preset

    try {
      const response = await axios.post(
        'https://api.cloudinary.com/v1_1/dj1uyme6s/image/upload',
        formData
      );
      return response.data.secure_url;
    } catch (error) {
      console.error('Error uploading image to Cloudinary:', error);
      return null;
    }
  };

  const handleImageChange = async (e, index) => {
    const { files } = e.target;
    if (files.length > 0) {
      const file = files[0];
      const imageUrl = await handleImageUpload(file);
      if (imageUrl) {
        const newImages = [...formData.images];
        newImages[index] = imageUrl;
        setFormData({ ...formData, images: newImages });

        // Update image previews
        const newPreviews = [...imagePreviews];
        newPreviews[index] = URL.createObjectURL(file);
        setImagePreviews(newPreviews);
      }
    }
  };

  const handleImageDescriptionChange = async (e, index, field) => {
    const { value, files } = e.target;
    const newImageDescriptions = [...formData.imageDescriptions];
    if (field === 'image' && files.length > 0) {
      const file = files[0];
      const imageUrl = await handleImageUpload(file);
      if (imageUrl) {
        newImageDescriptions[index][field] = imageUrl;

        // Update image description previews
        const newDescriptionPreviews = [...imageDescriptionPreviews];
        newDescriptionPreviews[index] = URL.createObjectURL(file);
        setImageDescriptionPreviews(newDescriptionPreviews);
      }
    } else {
      newImageDescriptions[index][field] = value;
    }
    setFormData({ ...formData, imageDescriptions: newImageDescriptions });
  };

  const handleArrivalChange = (e, index, field) => {
    const { value } = e.target;
    const newArrival = { ...formData.Arrival };
    newArrival[field][index] = value;
    setFormData({ ...formData, Arrival: newArrival });
  };

  const addImageDescription = () => {
    setFormData({
      ...formData,
      imageDescriptions: [...formData.imageDescriptions, { description: '', image: '' }]
    });
    setImageDescriptionPreviews([...imageDescriptionPreviews, '']);
  };

  const addArrivalDetail = (field) => {
    setFormData({
      ...formData,
      Arrival: {
        ...formData.Arrival,
        [field]: [...formData.Arrival[field], '']
      }
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('https://apptravel-1.onrender.com/api/packages', formData);
      console.log('Package added:', response.data);
      window.location.reload();
    } catch (error) {
      console.error('Error adding package:', error);
      if (error.response && error.response.data) {
        console.error('Server Response:', error.response.data);
      }
    }
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit} encType="multipart/form-data">
        <h1>Add Tours</h1>
        <label>
          Package Name:
          <input type="text" name="packageName" value={formData.packageName} onChange={handleChange} required />
        </label>
        <label>
          Package Nights:
          <input type="number" name="packageDays" value={formData.packageDays} onChange={handleChange} required />
        </label>
        <label>
          Images:
          {formData.images.map((image, index) => (
            <div key={index}>
              <input type="file" onChange={(e) => handleImageChange(e, index)} />
              {imagePreviews[index] && <img src={imagePreviews[index]} alt="Preview" className="image-preview" />}
            </div>
          ))}
          <button type="button" onClick={() => setFormData({ ...formData, images: [...formData.images, ''] })}>
            Add Image
          </button>
        </label>
        <label>
          Image Descriptions:
          {formData.imageDescriptions.map((desc, index) => (
            <div className="image-description" key={index}>
              <input
                type="text"
                placeholder="Description"
                value={desc.description}
                onChange={(e) => handleImageDescriptionChange(e, index, 'description')}
                required
              />
              <input
                type="file"
                placeholder="Image"
                onChange={(e) => handleImageDescriptionChange(e, index, 'image')}
                required
              />
              {imageDescriptionPreviews[index] && <img src={imageDescriptionPreviews[index]} alt="Preview" className="image-preview" />}
            </div>
          ))}
          <button type="button" onClick={addImageDescription}>
            Add Image Description
          </button>
        </label>
        <label>
          Arrival:
          {formData.Arrival.Night.map((night, index) => (
            <div className="arrival-detail" key={index}>
              <input
                type="text"
                placeholder="Night"
                value={night}
                onChange={(e) => handleArrivalChange(e, index, 'Night')}
                required
              />
              <input
                type="text"
                placeholder="Location"
                value={formData.Arrival.Location[index]}
                onChange={(e) => handleArrivalChange(e, index, 'Location')}
                required
              />
              <input
                type="text"
                placeholder="Experience"
                value={formData.Arrival.Experience[index]}
                onChange={(e) => handleArrivalChange(e, index, 'Experience')}
                required
              />
            </div>
          ))}
          <button type="button" onClick={() => addArrivalDetail('Night')}>
            Add Night
          </button>
        </label>
        <button type="submit">Add Tour Package</button>
      </form>
    </div>
  );
}
