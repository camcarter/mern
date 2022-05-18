const {Product} = require("../models/product.model")

module.exports.test = (req,res) => {
    res.json("HELLO WORLD")
}

// CREATE
module.exports.create = (req,res) => {
    Product.create(req.body)
        .then(newProduct => res.json(newProduct))
        .catch(err => res.json(err))
}

// READ
module.exports.allProducts = (req,res) => {
    Product.find()
        .then(allProducts => res.json(allProducts))
        .catch(err => res.json(err))
}
// UPDATE

// DELETE
