const mongoose =  require('mongoose');

const accomSchema = new mongoose.Schema({
    img:{
        type:String,
        require:true
    },
    description:{
        type:String,
        require:true
    }
})

module.exports = mongoose.model('accomadation',accomSchema);