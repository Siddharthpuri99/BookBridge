const router = require("express").Router();
const User = require("../models/user");
const Book = require("../models/book");
const Order = require("../models/order");
const {authenticateToken} = require("./userAuth");

router.post("/placed-order",authenticateToken,async(req,res)=>{
    try{
        const{id} = req.headers;
        const{order} = req.body;
        for(const orderdata of order){
            const neworder = await new Order({user:id,book:orderdata._id});
            const orderdatafromdb = await neworder.save();
            //saving orders in user model.............................................
            await User.findByIdAndUpdate(id,{$push:{orders:orderdatafromdb._id}});

            //clearing orders from cart.............................
            await User.findByIdAndUpdate(id,{$pull:{cart:orderdatafromdb._id}});

        }
        return res.json({status:"Success",message:"Order placed successfully"});
    }
    catch(err){
        return res.status(500).json({message:"Internal server error",err});
    }
})
router.get("/get-order-history",authenticateToken,async(req,res)=>{
    try{
            const{id} = req.headers;
            const userdata = await User.findById(id).populate({
                path:"orders",
                populate:{path:"book"},
            });
            const orderdata = userdata.orders.reverse();
            return res.json({status:"success",data:orderdata});
    }
    catch(err){
        return res.status(500).json({message:"Internal server error",err});
    }
});
router.get("/get-all-orders",authenticateToken,async(req,res)=>{
    try{
        const userdata = await Order.find().populate({path:"book"}).populate({path:"user"}).sort({createdAt:-1});
        return res.json({status:"success",data:userdata});

    }
    catch(err){
        return res.status(500).json({message:"Internal server error",err});
    }
});
router.put("/update-status/:id",authenticateToken,async(req,res)=>{
    try{
            const{id} = req.params;
            await Order.findByIdAndUpdate({id,status:req.body.status});
            return res.json({status:"success",message:"status updated successfully"});
    }
    catch(err){
        return res.status(500).json({message:"Internal server error",err});
    }
})
module.exports = router;
