const mongoose = require("mongoose");

const Productsmodel = new mongoose.Schema({
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
  ProductDescription: {
    type: String,
    required: true
  },
  ProductBrand: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  slug: { type: String, unique: true }, // ✅ new field for clean URLs
});


 const Products = new mongoose.model("MyProducts",Productsmodel)
  module.exports = Products