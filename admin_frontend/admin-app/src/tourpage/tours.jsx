import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './tours.css';

const uploadImage = async (file) => {
  if (!file) {
    console.error('No file provided for upload');
    return;
  }

  const uploadData = new FormData();
  uploadData.append('file', file);
  uploadData.append('upload_preset', 'gzcionwe');

  try {
    const response = await axios.post('https://api.cloudinary.com/v1_1/dj1uyme6s/image/upload', uploadData);
    if (response.data && response.data.secure_url) {
      return response.data.secure_url;
    } else {
      console.error('Image upload error: No secure_url in response', response);
    }
  } catch (error) {
    console.error('Image upload error:', error);
  }
  return null;
};

const PackageList = () => {
  const [packages, setPackages] = useState([]);
  const [editingIndex, setEditingIndex] = useState(null);
  const [editPackage, setEditPackage] = useState({
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

  useEffect(() => {
    fetchPackages();
  }, []);

  const fetchPackages = async () => {
    try {
      const response = await axios.get('https://apptravel-1.onrender.com/api/packages'); // Adjust the endpoint according to your API
      setPackages(response.data);
    } catch (error) {
      console.error('Error fetching packages:', error);
    }
  };

  const handleEdit = (index) => {
    setEditingIndex(index);
    const packageToEdit = packages[index];
    setEditPackage({
      packageName: packageToEdit.packageName,
      packageDays: packageToEdit.packageDays,
      images: packageToEdit.images,
      imageDescriptions: packageToEdit.imageDescriptions.map(desc => ({
        ...desc,
        description: desc.description,
        image: desc.image
      })),
      Arrival: {
        Night: [...packageToEdit.Arrival.Night],
        Location: [...packageToEdit.Arrival.Location],
        Experience: [...packageToEdit.Arrival.Experience]
      }
    });
  };

  const handleSave = async (index) => {
    try {
      const packageToUpdate = packages[index];
      const updatedPackage = { ...editPackage };

      const response = await axios.put(`https://apptravel-1.onrender.com/api/packages/${packageToUpdate._id}`, updatedPackage, {
        headers: {
          'Content-Type': 'application/json'
        }
      });

      console.log('Package update response:', response.data);

      setEditingIndex(null);
      fetchPackages();
    } catch (error) {
      console.error('Error updating package:', error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`https://apptravel-1.onrender.com/api/packages/${id}`);
      fetchPackages();
    } catch (error) {
      console.error('Error deleting package:', error);
    }
  };

  const handleImageChange = async (imageIndex, event) => {
    const file = event.target.files[0];
    if (file) {
      const imageUrl = await uploadImage(file);
      if (imageUrl) {
        const newImages = [...editPackage.images];
        newImages[imageIndex] = imageUrl;
        setEditPackage({ ...editPackage, images: newImages });
      }
    }
  };

  const handleDescriptionImageChange = async (descIndex, event) => {
    const file = event.target.files[0];
    if (file) {
      const imageUrl = await uploadImage(file);
      if (imageUrl) {
        const newDescriptions = [...editPackage.imageDescriptions];
        newDescriptions[descIndex] = {
          ...newDescriptions[descIndex],
          image: imageUrl
        };
        setEditPackage({ ...editPackage, imageDescriptions: newDescriptions });
      }
    }
  };

  return (
    <div className="package-list">
      <h2>Package List</h2>
      {packages.map((pkg, index) => (
        <div key={pkg._id} className="package-item">
          {editingIndex === index ? (
            <>
              <input
                type="text"
                value={editPackage.packageName}
                onChange={(e) => setEditPackage({ ...editPackage, packageName: e.target.value })}
              />
              <input
                type="text"
                value={editPackage.packageDays}
                onChange={(e) => setEditPackage({ ...editPackage, packageDays: e.target.value })}
              />
              {editPackage.images.map((image, imageIndex) => (
                <div key={imageIndex}>
                  <img
                    src={image}
                    alt={`Package ${index} Image ${imageIndex}`}
                    style={{ width: '100px', height: '100px' }}
                  />
                  <input
                    type="file"
                    accept="image/*"
                    onChange={(e) => handleImageChange(imageIndex, e)}
                  />
                </div>
              ))}

              {editPackage.imageDescriptions.map((desc, descIndex) => (
                <div key={descIndex}>
                  <input
                    type="text"
                    value={desc.description}
                    onChange={(e) => {
                      const newDescriptions = [...editPackage.imageDescriptions];
                      newDescriptions[descIndex] = {
                        ...desc,
                        description: e.target.value
                      };
                      setEditPackage({ ...editPackage, imageDescriptions: newDescriptions });
                    }}
                  />
                  <img
                    src={desc.image}
                    alt={`Package ${index} Image Description ${descIndex}`}
                    style={{ width: '100px', height: '100px' }}
                  />
                  <input
                    type="file"
                    accept="image/*"
                    onChange={(e) => handleDescriptionImageChange(descIndex, e)}
                  />
                </div>
              ))}

              {editPackage.Arrival.Night.map((night, nightIndex) => (
                <div key={nightIndex}>
                  <input
                    type="text"
                    value={night}
                    onChange={(e) => {
                      const newNights = [...editPackage.Arrival.Night];
                      newNights[nightIndex] = e.target.value;
                      setEditPackage({
                        ...editPackage,
                        Arrival: { ...editPackage.Arrival, Night: newNights }
                      });
                    }}
                  />
                  <input
                    type="text"
                    value={editPackage.Arrival.Location[nightIndex]}
                    onChange={(e) => {
                      const newLocations = [...editPackage.Arrival.Location];
                      newLocations[nightIndex] = e.target.value;
                      setEditPackage({
                        ...editPackage,
                        Arrival: { ...editPackage.Arrival, Location: newLocations }
                      });
                    }}
                  />
                  <input
                    type="text"
                    value={editPackage.Arrival.Experience[nightIndex]}
                    onChange={(e) => {
                      const newExperiences = [...editPackage.Arrival.Experience];
                      newExperiences[nightIndex] = e.target.value;
                      setEditPackage({
                        ...editPackage,
                        Arrival: { ...editPackage.Arrival, Experience: newExperiences }
                      });
                    }}
                  />
                </div>
              ))}

              <button onClick={() => handleSave(index)}>Save</button>
            </>
          ) : (
            <>
              <h3>{pkg.packageName}</h3>
              <p>Days: {pkg.packageDays}</p>
              {pkg.images.map((image, imgIndex) => (
                <img
                  key={imgIndex}
                  src={image}
                  alt={`Package ${index} Image ${imgIndex}`}
                  style={{ width: '100px', height: '100px' }}
                />
              ))}
              <button onClick={() => handleEdit(index)}>Edit</button>
              <button onClick={() => handleDelete(pkg._id)}>Delete</button>
            </>
          )}
        </div>
      ))}
    </div>
  );
};

export default PackageList;
