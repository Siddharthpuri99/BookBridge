const express = require("express");
const router = express.Router();
const User = require("../models/user");
const jwt = require("jsonwebtoken");
const {authenticateToken} = require("./userAuth");
const Book = require("../models/book");

//addbook
router.post("/add-book", authenticateToken,async (req,res)=>{
    try{
        const {id} = req.headers;
        const user = await User.findById(id);
        if(user.role !== "admin" ){
            return res.status(400).json({message:"only Admin Can Perform Operations!!!"});
        }
        const book =  new Book({
            url:req.body.url,
            title:req.body.title,
            author:req.body.author,
            price:req.body.price,
            desc:req.body.desc,
            language:req.body.language,
        });
        await book.save();
        return res.status(200).json({message:"Book is Added successfully!!!!"});
    }
    catch(err){
        return res.status(500).json({message:"Internal server err"+err});
    }
});

//update book
router.put("/update-book", authenticateToken, async (req,res)=>{
    try{
        const {bookid} = req.headers;
        await Book.findByIdAndUpdate(bookid,{
            url:req.body.url,
            title:req.body.title,
            author:req.body.author,
            price:req.body.price,
            desc:req.body.desc,
            language:req.body.language,
        });
        return res.status(200).json({message:"Book is Updated Successfully!!!"});
    } catch(err){
        return res.status(500).json({message:"Internal server error"+err});
    }
});

//get-all-book
router.get("/get-allbook",async(req,res)=>{
    try{
        const books = await Book.find().sort({createdAt:-1});
        return res.json({status:"success",data:books});
    }catch(err){
        return res.status(500).json({message:"Internal server err"+err});
    }
});

//delete

router.delete("/delete-book",authenticateToken, async(req,res)=>{
    try{
        const {bookid} = req.headers;
        await Book.findByIdAndDelete(bookid);
        return res.status(200).json({message:"book is deleted successfully!!!!"});
    }catch(err){
        return res.status(500).json({message:"Internal server is error"+err});
    }
});

//getone-book-by-id

router.get("/get-book-byid/:id",async (req,res)=>{
    try{
            const {id} = req.params;
            const book = await Book.findById(id);
            return res.json({status:"success",data:book});
    }catch(err){
        return res.status(500).json({message:"Internal server error " + err});
    }
});

//recentbook
router.get("/get-recentbook",async (req,res)=>{
    try{
            const books = await Book.find().sort({createdAt:-1}).limit(4);
            return res.json({status:"success",data:books});
    }catch(err){
        return res.status(500).json({message:"Internal server error " + err});
    }
});

module.exports = router;
