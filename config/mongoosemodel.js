const mongoose = require("mongoose");

const TweetSchema = new mongoose.Schema({}, { strict: false });


module.exports = mongoose.model("Tweets",TweetSchema);
