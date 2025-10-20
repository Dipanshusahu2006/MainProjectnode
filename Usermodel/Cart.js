const mongoose = require("mongoose");

const Cartmodel = new mongoose.Schema({
  ProductName: {
    type: String,
    required: true,
    trim: true
  },
  ProductPrice: {
    type: Number,
    required: true
  },
  ProductImage: {
    type: String,
    required: true
  },
  ProductCategory: {
    type: String,
    required: true,
    trim: true
  },
  ProductQuantity: {
    type: Number,
    default: 1
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});


 const Cart = new mongoose.model("MyCart",Cartmodel)
  module.exports = Cart