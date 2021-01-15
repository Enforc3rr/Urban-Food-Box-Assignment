const mongoose = require("mongoose");

const db = async ()=>{
    const connect = await mongoose.connect(process.env.DB , {
        useNewUrlParser:true,
        useUnifiedTopology:true,
        useCreateIndex:true,
        useFindAndModify:false
    })
    console.log(`Connected To MongoDB Database || Hostname = ${connect.connection.host}`);
}

module.exports = db;