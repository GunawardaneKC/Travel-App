const express = require('express');
// const multer = require('multer');
// const multerStorageCloudinary = require('multer-storage-cloudinary');
// const cloudinary = require('../config/cloudinary');

const {
  getPackages,
  createPackage,
  updatePackage,
  deletePackage,
  getSpecificPackage
} = require('../Controller/tours');

const router = express.Router();

// const storage = multer.diskStorage({
//     destination: (req, file, cb) => {
//       cb(null, 'uploads/');
//     },
//     filename: (req, file, cb) => {
//       cb(null, Date.now() + '-' + file.originalname);
//     }
//   });
// const { storage } = require('../config/cloudinary'); // Import storage configuration

// const upload = multer({ storage });

router.get('/', getPackages);
router.post('/', createPackage);
router.put('/:id', updatePackage);
router.delete('/:id', deletePackage);
router.get('/:id', getSpecificPackage);

module.exports = router;
