const express = require("express");
const router = express.Router();
const User = require("../models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const {authenticateToken} = require("./userAuth");

//sign-up................................................
router.post("/signUp",async (req,res)=>{
    try{
        const{name,email,password,address} = req.body;
        if(name.length <=2){
            return res.status(400).json({message:"name length should be greater than 2"});
        }
        const existingusername = await User.findOne({name:name});
        if(existingusername){
            return res.status(400).json({message:"username already exist"});
        }
        const existEmail = await User.findOne({email:email});
        if(existEmail){
            return res.status(400).json({message:"email is already exist"});
        }
        if(password.length<=5){
            return res.status(400).json({message:"password length should be grt than equal to 8"});
        }
        const hashPassword = await bcrypt.hash(password,10);
        const newuser = await new User({
            name:name,
            email:email,
            password:hashPassword,
            address:address,
        })
       await  newuser.save();
        return res.status(200).json({message:"SignUp successfully"});
    }
    catch(err){
        return res.status(500).json({message:err});
    }
})

//sign-In..............................................

router.post("/sign-In",async(req,res)=>{
    try{
        const{name,password} = req.body;
        const existinguser = await User.findOne({name});
        if(!existinguser){
            return res.status(400).json({message:"invalid credential"});
        }
       await bcrypt.compare(password,existinguser.password,(err,data)=>{
        const authclaims = [{name:existinguser.name},{role:existinguser.role}]
            if(data){
                const token =  jwt.sign({authclaims},"bookstore123",{expiresIn:"30d"});
                return res.status(200).json({id:existinguser._id , role:existinguser.role,token:token});
            }
            if(err){
                return res.status(400).json({message:err});
            }
       });
    }catch(err){
        return res.status(500).json({message:"Internal Server Error"});
    }
})

router.get("/get-user-info", authenticateToken , async (req,res)=>{
    try{
        const {id} = req.headers;
        const data = await User.findById(id).select("-password");
        return res.status(200).json(data);


    } catch(err){
        return res.status(400).json({message:"err is "+err});
    }
})

router.put("/update-address",authenticateToken,async(req,res)=>{
    try{
        const {id} = req.headers;
        const {address} = req.body;
        await User.findByIdAndUpdate(id,{address:address});
        return res.status(200).json({message:"address updated successfully"});
    }
    catch(err){
        return res.status(400).json({message:err});
    }
})
module.exports = router;
