// const mongoose = require('mongoose');

// const packageSchema = new mongoose.Schema({
//   packageName: {
//     type: String,
//     required: true
//   },
//   packageDays: {
//     type: String,
//     required: true
//   },
//   images: [String]
// });

// const Package = mongoose.model('Package', packageSchema);

// module.exports = Package;

const mongoose = require('mongoose');

const packageSchema = new mongoose.Schema({
  packageName: { type: String, required: true },
  packageDays: { type: Number, required: true },
  images: [{ type: String, required: true }], // General images
  imageDescriptions: [
    {
      description: { type: String, required: true },
      image: { type: String, required: true } // Image tied to description
    }
  ],
  Arrival: {
    Night: [{ type: String, required: true }],
    Location: [{ type: String, required: true }],
    Experience: [{ type: String, required: true }]
  }
});

const Package = mongoose.model('Package', packageSchema);

module.exports = Package;

