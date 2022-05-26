// IMPORT THE MODEL
const {Author} = require("../models/author.model")


// TEST
module.exports.test = (req,res) => {
    res.json("HELLO WORLD")
}

// CREATE
module.exports.create = (req, res) => {
    Author.create(req.body)
        .then(newAuthor => res.json(newAuthor))
        .catch(err => res.status(400).json(err));
}

// READ
module.exports.allAuthors = (req, res) => {
    Author.find()
        .then(allAuthors => res.json(allAuthors))
        .catch(err => res.status(400).json(err));
}

    module.exports.oneAuthor = (req, res) => {
	Author.findOne({ _id: req.params.author_id })
		.then(oneAuthor => res.json(oneAuthor))
		.catch(err => res.status(400).json(err));
}

// UPDATE
module.exports.updateAuthor = (req, res) => {
    // findOneAndUpdate takes three arguments, query, payload, boolean
    Author.findOneAndUpdate({ _id: req.params.author_id }, req.body, { new: true, runValidators })
        .then(updatedAuthor => res.json(updatedAuthor))
        .catch(err => res.status(400).json(err));
}

// DELETE
module.exports.deleteAuthor = (req, res) => {
    Author.deleteOne({ _id: req.params.author_id })
        .then(result => res.json({ result }))
        .catch(err => res.status(400).json(err));
}