const twitterapi = require("../config/twitterapi");
const tweetModel = require("../config/mongoosemodel");

/*
@desc   Getting Tweets with the help of twitterapi and saving it to database
@route  POST /api/twitter/:twitterusername
*/
exports.FetchAndSaveTweetsByUsername = async (req , res , next) =>{
    const tweets = await twitterapi.accountsAndUsers.usersSearch({q:req.params.twitterUsername});
    await tweetModel.create(tweets);
    console.log(`Tweets By ${req.params.twitterUsername} has been saved to database`);
    res.status(201).json({
       success:true,
    });
}
/*
@desc   Getting Tweets from Database , Query Can be applied Here
@route  GET /api/twitter/gettweets
*/
exports.GetTweets = async (req, res , next)=>{
    console.log(req.query);
    let queryString = JSON.stringify(req.query);
    queryString = queryString.replace(/\b(gt|gte|lt|lte|in)\b/g , match => `$${match}`);
    console.log(queryString);
    const tweet = await tweetModel.find();
    res.status(200).json({
        success:true,
        requestedData : tweet
    })
}
/*
@desc   Getting Tweets Based On Location
@route  GET /api/twitter/:location
*/
exports.TweetsByLocation= async (req,res,next)=>{
    const tweet = await tweetModel.find()
        .where("location")
        .equals(req.params.location);
    res.status(200).json({
        success:true,
        requestedData : tweet
    })
}
/*
@desc   Getting Tweets Based On FullName
@route  PUT /api/twitter/:full_name
*/
exports.TweetsByFullName= async (req,res,next)=>{
    const tweet = await tweetModel.find()
        .where("name")
        .equals(req.params.full_name);
    res.status(200).json({
        success:true,
        requestedData : tweet
    });
    next();
}
/*
@desc   Getting Tweets Based On Description
@route  PUT /api/twitter/:description
*/
exports.TweetsByDescription= async (req,res,next)=>{
    const tweet = await tweetModel.find()
        .where("description")
        .equals(req.params.description);
    res.status(200).json({
        success:true,
        requestedData : tweet
    })
}
/*
@desc   Getting Tweets Based On Date
@route  PUT /api/twitter/:date
*/
exports.TweetsByTimezone= async (req,res,next)=>{
    const tweet = await tweetModel.find()
        .where("location")
        .equals(req.params.location);
    res.status(200).json({
        success:true,
        requestedData : tweet
    })
}
/*
@desc   Getting Tweets Based On Number Of Retweets AND re-arranging it in desc order
@route  PUT /api/twitter/:t
*/
exports.TweetsByReTweetsInDscOrder= async (req,res,next)=>{
    const tweet = await tweetModel.find({
        "status.retweet_count": {
            $gt: 0
        }
    }).sort({"status.retweet_count":-1});
    res.status(200).json({
        success:true,
        requestedData : tweet
    })
}
