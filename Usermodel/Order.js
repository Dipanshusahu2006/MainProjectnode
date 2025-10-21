const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
  id: { type: String, required: true },
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
  id: { type: String, required: true, unique: true }, // cart ID (like 'dd90', '35dd')
  products: [ProductSchema], // array of product objects
});

const Order = mongoose.model("Orders", OrderSchema);

module.exports = Order;
