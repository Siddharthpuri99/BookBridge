const router = require("express").Router();
const User = require("../models/user");
const {authenticateToken} = require("./userAuth");

router.put("/add-book-to-favourite",authenticateToken,async(req,res)=>{
    try{
            const{bookid,id} = req.headers;
            const userdata = await User.findById(id);
            const isbookfavourite = userdata.favourite.includes(bookid);
            if(isbookfavourite){
                return res.status(400).json({message:"Book is already added to favourite.."});
            }
            await User.findByIdAndUpdate(id,{$push:{favourite:bookid}});
            return res.status(200).json({message:"Book is successfully added to favourite...."});
    }
    catch(err){
        return res.status(500).json({message:"Internal server error"+err});
    }
})

router.delete("/remove-favourite-book",authenticateToken,async(req,res)=>{
    try{
            const{bookid , id} = req.headers;
            const userdata = await User.findById(id);
            const isbookFavourite = userdata.favourite.includes(bookid);
            if(isbookFavourite){
                await User.findByIdAndUpdate(id,{$pull:{favourite:bookid}});
            }
            return res.status(200).json({message:"book is successfully removed from favourite..."});
    }
    catch(err){
        return res.status(500).json({message:"Internal Server error",err});
    }
})

router.get("/get-favouriteBook",authenticateToken,async (req,res)=>{
    try{
        const {id} = req.headers;
        const userdata = await User.findById(id).populate("favourite")
        const books = userdata.favourite;
        return res.json({status:"success",data:books});
    } 
    catch(err){
        return res.status(500).json({message:"Internal server err"+err});
    }
})
module.exports = router;
