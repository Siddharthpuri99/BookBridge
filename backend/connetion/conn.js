const mongoose = require("mongoose");
const con = async() => {
    try{
       await  mongoose.connect(`${process.env.URI}`);
       console.log("Mongo connected successfully");
    }catch(err){
        console.log(err);
    }
}
con();
