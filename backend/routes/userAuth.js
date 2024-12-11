const jwt = require("jsonwebtoken");
const authenticateToken = (req,res,next)=>{
    const authHeader = req.headers["authorization"];
    const token = authHeader && authHeader.split(" ")[1];

    if(token==null){
        return res.status(400).json({message:"authorization token is required....."});

    }
    jwt.verify(token,"bookstore123",(err,user)=>{
        if(err){
            return res.status(400).json({message:"token expire pls sign again"});
        }
        req.user = user;
        next();
    })
};
module.exports = {authenticateToken};
