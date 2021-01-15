const express = require("express");
const router = express.Router();
const {
    FetchAndSaveTweetsByUsername,
    GetTweets,
    TweetsByReTweetsInDscOrder,
    TweetsByLocation,
    TweetsByFullName,
    TweetsByDescription} = require("../controller/twitterController");

//Adding Tweets Of Desired Handle To Our Database
router.route("/:twitterUsername")
    .post(FetchAndSaveTweetsByUsername);
//Fetching All The Tweets And Query Can Be Passed In Here
router.route("/gettweets")
    .get(GetTweets);
//Rearranging Data on Basis of Max number of Retweets in Descending Order
router.route("/retweet")
    .get(TweetsByReTweetsInDscOrder);
//Getting Tweets Based On Location
router.route("/:location")
    .get(TweetsByLocation);
//Getting Tweets Based on FullName Of User
router.route("/:full_name")
    .get(TweetsByFullName);
//Getting Tweets On Basis Of Description
router.route("/description")
    .get(TweetsByDescription);



//exporting Router
module.exports = router;