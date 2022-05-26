// IMPORT YOUR DEPENDENCIES
const mongoose = require("mongoose")

const PetSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[3, "Pet Name must be at least three characters"]
    },
    petType:{
        type:String,
        required:[3, "Pet Type must be at least three characters"]
    },
    petDescription:{
        type:String,
        required:[3, "Pet Description must be at least three characters"]
    },
    skillOne:{
        type:String,
    },
    skillTwo:{
        type:String,
    },
    skillThree:{
        type:String,
    }

},  {timestamps:true});

module.exports.Pet = mongoose.model("Pet", PetSchema)