const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/pirates", {
	useNewUrlParser: true,
	useUnifiedTopology: true,
})
	.then(() => console.log("ESTABLISHED CONNECTION TO AUTHOR SERVER"))
	.catch(err => console.log("Something went wrong when connecting to the database", err));