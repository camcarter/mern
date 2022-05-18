const mongoose = require("mongoose");

const JokeSchema = new mongoose.Schema({
	joke: String,
});

const Joke = mongoose.model("User", JokeSchema);

module.exports = Joke;