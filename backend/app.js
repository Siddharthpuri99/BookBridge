const express = require("express");
const app = express();
const cors = require("cors");
app.use(express.json());
app.use(cors());
require("dotenv").config();
require("./connetion/conn");

const userroute = require("./routes/user");
const bookroute = require("./routes/book");
const favouriteRoute = require("./routes/favourite");
const cartRoute = require("./routes/cart");
const orderRoute = require("./routes/order");

app.use("/api/v1",userroute);
app.use("/api/v1",bookroute);
app.use("/api/v1",favouriteRoute);
app.use("/api/v1",cartRoute);
app.use("/api/v1",orderRoute);


app.get("/",(req,res)=>{
    res.send({message:"hello from server"});
})
app.listen(process.env.PORT , ()=>{
    console.log(`Server is listening on ${process.env.PORT}`)
})

