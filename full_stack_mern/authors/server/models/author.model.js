// IMPORT YOUR DEPENDENCIES
const mongoose = require("mongoose")

const AuthorSchema = new mongoose.Schema({
    name: {
        type: String,
        minLength: [3, "Author name must be at least three characters"],
    }
},  {timestamps:true});

module.exports.Author = mongoose.model("Author", AuthorSchema)