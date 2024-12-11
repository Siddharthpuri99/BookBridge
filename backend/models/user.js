const mongoose = require("mongoose");
const user = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    avator: {
      type: String,
      default:
        "https://www.strasys.uk/wp-content/uploads/2022/02/Depositphotos_484354208_S.jpg",
    },
    role:{
        type:String,
        default:"user",
        enum:["user","admin"],
    },
    favourite: [
      {
        type: mongoose.Types.ObjectId,
        ref: "books",
      },
    ],
    cart: [
      {
        type: mongoose.Types.ObjectId,
        ref: "books",
      },
    ],
    orders: [
      {
        type: mongoose.Types.ObjectId,
        ref: "orders",
      },
    ],
  },
  { timestamps: true };
);
module.exports = mongoose.model("user", user);
