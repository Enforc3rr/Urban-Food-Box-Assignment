const express  = require("express");
const dotenv = require("dotenv");
dotenv.config({path:"./config/config.env"});
const twitterRouter = require("./router/twitterRouter");
const database = require("./config/db");
const moment = require("moment");

//Initializing Express
const app = new express();

//parsing passed data as json
app.use(express.json());

//Port
const PORT = process.env.PORT || 8080;

//starting server
const server = app.listen(PORT , ()=> console.log(`Server Started At Port ${PORT}`));

//connecting to db
database();

//Custom Logger
const logger = (req , res , next)=>{
    console.log(`API was hit with ${req.method} method at ${req.protocol}://${req.hostname}:${PORT}${req.url} on ${moment().format()}`);
    next();
}
app.use(logger);
//Router
app.use("/api/twitter",twitterRouter);

//handling unhandled promise rejections
process.on("unhandledRejection" , (err , promise)=>{
    console.log(`Error Message : ${err}`);
    server.close(()=>process.exit(1));
});

