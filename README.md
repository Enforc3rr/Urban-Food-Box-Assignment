# Urban-Food-Box-Assignment
Assignment to create REST API end points in Nodejs given by Urban Food Box.

## What does this Backend App do ?  
This App uses a third party library based On Node js called Twitter-Api-client to take in tweets and save it to database
and performs various kinds queries on those tweets to get data.

## To Start The Server Type in -> npm run start

## End Points of the Application are as follows ->  

###### To Store Tweets By A Particular Handle To Database -> POST /api/twitter/:twitterhandle  

###### To Get Every Tweet ->  GET /api/twitter/gettweets
###### To Pass-in Query   ->  GET /api/twitter/gettweets?yourquery=goeshere&attachqueries=using&

###### To Get Tweets Based On Location -> GET /api/twitter/:location
###### To Get Tweets Based On Full-Name -> GET /api/twitter/:full_name
###### To Get Tweets Based On Description -> GET /api/twitter/:description


###### To Get Tweets Based On Descending Order Of Number Of Re-Tweets -> GET /api/twitter/retweets


### Application Uses Following Packages ->
1) Express
2) Mongoose
3) Twitter-Api-Client
4) Moment

