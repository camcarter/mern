const ProductController = require("../controllers/product.controller")


module.exports = app => {
    app.get("/api/products/test", ProductController.test)
    app.post("/api/products/new", ProductController.create)
    app.get("/api/products", ProductController.allProducts)
    app.get("/api/products/:product_id", ProductController.oneProduct)
}