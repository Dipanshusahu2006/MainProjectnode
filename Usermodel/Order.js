// models/OrderModel.js
const mongoose = require("mongoose");

// ✅ Define Product Schema
const ProductSchema = new mongoose.Schema({
  ProductName: { type: String, required: true },
  ProductPrice: { type: Number, required: true },
  ProductImage: { type: String, required: true },
  ProductCategory: { type: String, required: true },
  ProductQuantity: { type: Number, required: true },
  ProductDescription: { type: String, default: "" },
  ProductBrand: { type: String, default: "" },
  Status: { type: String, default: "Pending" },
});

// ✅ Define Order Schema
const OrderSchema = new mongoose.Schema(
  {
    orderId: {
      type: String,
      unique: true,
      default: () => `ORD-${Date.now()}`, // Example: ORD-1761036701078
    },
    username: { type: String, required: true },
    email: { type: String, default: "" },
    address: { type: String, default: "" },
    products: { type: [ProductSchema], required: true },
    TotalAmount: { type: Number, required: true },
    paymentStatus: { type: String, default: "Pending" }, // New: track payments
    orderStatus: { type: String, default: "Processing" }, // New: track order flow
  },
  { timestamps: true } // adds createdAt and updatedAt
);

// ✅ Create model
const Order = mongoose.model("MyOrder", OrderSchema);
module.exports = Order;
