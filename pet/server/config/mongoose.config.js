const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/pets", {
	useNewUrlParser: true,
	useUnifiedTopology: true,
})
	.then(() => console.log("ESTABLISHED CONNECTION TO PET SERVER"))
	.catch(err => console.log("Something went wrong when connecting to the database", err));