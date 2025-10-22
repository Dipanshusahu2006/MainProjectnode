const mongoose = require("mongoose");

// Product schema
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

// Order schema
const OrderSchema = new mongoose.Schema(
  {
    orderId: {
      type: String,
      unique: true,
      default: () => `ORD-${Date.now()}`, // auto-generated order ID
    },
    username: { type: String, required: true },
    email: { type: String, default: "" },
    address: { type: String, default: "" },
    products: { type: [ProductSchema], required: true },
    TotalAmount: { type: Number, required: true },
    paymentStatus: { type: String, default: "Pending" },
    orderStatus: { type: String, default: "Processing" },
  },
  { timestamps: true }
);

const Order = mongoose.model("MyOrder", OrderSchema);
module.exports = Order;
