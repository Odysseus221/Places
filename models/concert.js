const mongoose= require('mongoose')
const concertSchema = new mongoose.Schema({
    id:{
        type: String,
        required : true, 
        
    },
    place:{
        type: String, 
        required: true, 

    }, 
    name: {
        type: String,
        required: true, 
    }
})
  module.exports = mongoose.model("Concert", concertSchema);

