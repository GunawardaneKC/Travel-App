const mongoose  = require('mongoose');

const clientSchema = new mongoose.Schema({
    img:{
        type:String
    },
    messages:{
        type:String,
        require:true
    },
    name:{
        type:String,
        require:true
    },

})



module.exports = mongoose.model('client',clientSchema);