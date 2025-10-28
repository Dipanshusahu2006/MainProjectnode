const mongoose = require("mongoose");

const Cartmodel = new mongoose.Schema({
  userId: {
    type: String, // or mongoose.Schema.Types.ObjectId if you have a User collection
    required: true,
  },
  ProductName: { type: String, required: true, trim: true },
  ProductPrice: { type: Number, required: true },
  ProductImage: { type: String, required: true },
  ProductCategory: { type: String, required: true, trim: true },
  ProductQuantity: { type: Number, default: 1 },
  createdAt: { type: Date, default: Date.now },
});

const Cart = new mongoose.model("MyCart", Cartmodel);
module.exports = Cart;
