const {TwitterClient} = require("twitter-api-client");

const twitterClient = new TwitterClient({
    apiKey:process.env.apiKey,
    apiSecret:process.env.apiSecret,
    accessToken:process.env.accessToken,
    accessTokenSecret:process.env.accessTokenSecret
});

module.exports = twitterClient;


