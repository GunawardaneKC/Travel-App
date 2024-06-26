const accomadationModel = require('../Models/accom');

const insertAccom = async (req, res) => {
    const accom = new accomadationModel({
        img: req.body.img,
        description: req.body.description         
    });

    try {
        const savedAccom = await accom.save();
        res.json(savedAccom);
    }
    catch (err) {
        res.json({ message: err });
    }
}


const getAccom = async (req, res) => {
    try {
        const accom = await accomadationModel.find();
        res.json(accom);
    }
    catch (err) {
        res.json({ message: err });
    }
}


const getAccomById = async (req, res) => {
    try {
        const accom = await accomadationModel.findById(req.params.accomId);
        res.json(accom);
    }
    catch (err) {
        res.json({ message: err });
    }
}


const deleteAccom = async (req, res) => {
    try {
        const removedAccom = await accomadationModel.findByIdAndDelete({ _id: req.params.accomId });
        res.json(removedAccom);
    }
    catch (err) {
        res.json({ message: err });
    }
}

const updateAccom = async (req,res) => {
    try {
        const updatedAccom = await accomadationModel.updateOne(
            { _id: req.params.accomId },
            { $set: { img: req.body.img, description: req.body.description } }
        );
        res.json(updatedAccom);
    }
    catch (err) {
        res.json({ message: err });
    }

}

module.exports = {
    insertAccom,
    getAccom,
    getAccomById,
    deleteAccom,
    updateAccom
}