const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
  ProductName: { type: String, required: true },
  ProductPrice: { type: String, required: true },
  ProductImage: { type: String, required: true },
  ProductCategory: { type: String, required: true },
  ProductQuantity: { type: Number, required: true },
  ProductDescription: { type: String },
  ProductBrand: { type: String },
  Status: { type: String, default: "Pending" },
});

const OrderSchema = new mongoose.Schema({
  username: { type: String, required: true }, // ✅ changed from userId to username
  products: [ProductSchema],
  TotalAmount: { type: Number, required: true },
});

const Order = mongoose.model("MyOrder", OrderSchema);
module.exports = Order;
