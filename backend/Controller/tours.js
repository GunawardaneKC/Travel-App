const Package = require('../Models/tours');
const cloudinary = require('../config/cloudinary');

exports.getPackages = async (req, res) => {
    try {
      const packages = await Package.find();
      res.json(packages);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };

  exports.getSpecificPackage = async (req, res) => {
    try {
      const package = await Package.findById(req.params.id);
      if (!package) {
        return res.status(404).json({ message: 'Package not found' });
      }
      res.json(package);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
  
//   exports.createPackage = async (req, res) => {
//     const { packageName, packageDays } = req.body;
//     const images = req.files.map(file => file.path);
//     const newPackage = new Package({ packageName, packageDays, images });
  
//     try {
//       await newPackage.save();
//       res.status(201).json(newPackage);
//     } catch (error) {
//       res.status(400).json({ message: error.message });
//     }
//   };

// exports.createPackage = async (req, res) => {
//     const { packageName, packageDays } = req.body;
//     const images = req.files.map(file => file.path);
  
//     const newPackage = new Package({ packageName, packageDays, images });
  
//     try {
//       await newPackage.save();
//       res.status(201).json(newPackage);
//     } catch (error) {
//       res.status(400).json({ message: error.message });
//     }
//   };

exports.createPackage = async (req, res) => {
  const { packageName, packageDays, images, imageDescriptions, Arrival } = req.body;

  const newPackage = new Package({
    packageName,
    packageDays,
    images,
    imageDescriptions,
    Arrival
  });

  try {
    const savedPackage = await newPackage.save();
    res.status(201).json(savedPackage);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
//   exports.updatePackage = async (req, res) => {
//     const { id } = req.params;
//     const { packageName, packageDays } = req.body;
  
//     // Check if files are uploaded
//     const images = req.files ? req.files.map(file => file.path) : null;
  
//     const updatedData = { packageName, packageDays };
//     if (images) {
//       updatedData.images = images;
//     }
  
//     try {
//       const updatedPackage = await Package.findByIdAndUpdate(
//         id,
//         updatedData,
//         { new: true }
//       );
//       res.json(updatedPackage);
//     } catch (error) {
//       res.status(400).json({ message: error.message });
//     }
//   };

exports.updatePackage = async (req, res) => {
    const { id } = req.params;
    const packageName = req.body.packageName;
    const packageDays = req.body.packageDays;
    const images =  req.body.images;
    const imageDescriptions = req.body.imageDescriptions;
    const Arrival = req.body.Arrival;
     
    const updatedData = { packageName, packageDays , imageDescriptions, Arrival , images};
    console.log(id)
    console.log(packageName)
  
    if (req.files) {
      const images = req.files.map(file => file.path);
      updatedData.images = images;
    }
  
    try {
      const updatedPackage = await Package.findByIdAndUpdate(id, updatedData, { new: true });
      res.json(updatedPackage);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  };
  
  exports.deletePackage = async (req, res) => {
    const { id } = req.params;
  
    try {
      await Package.findByIdAndDelete(id);
      res.status(204).end();
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };



