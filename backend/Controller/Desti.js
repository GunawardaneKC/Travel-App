const Desti = require('../Models/Desti');


exports.getDesti = async (req, res) => {
    try {
      const desti = await Desti.find();
      res.json(desti);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }



exports.createDesti = async (req, res) => {
    const { title, description ,image } = req.body;
    
  
    const newDesti = new Desti({ title, description, image });
  
    try {
      await newDesti.save();
      res.status(201).json(newDesti);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  };


exports.updateDesti = async (req, res) => {
  try {
    const updatedDesti = await Desti.updateOne(
        { _id: req.params.id },
        { $set: { image: req.body.image, title: req.body.title, description: req.body.description } }
    );
    res.json(updatedDesti);
}
catch (err) {
    res.json({ message: err });
}
  };


exports.deleteDesti = async (req, res) => {
    try {
      const removedDesti = await Desti.findByIdAndDelete({ _id: req.params.id });
      res.json(removedDesti);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };