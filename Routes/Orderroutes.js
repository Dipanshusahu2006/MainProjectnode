const express = require("express");
const Order  = require("../Usermodel/Order");
const OrderRouter = express.Router();

 OrderRouter.post("/Post", async (req, res) => {
  try {
    const { userId } = req.body;
    if (!userId)
      return res.status(400).json({ message: "Missing userId in request body" });

    const MyOrder = new Order(req.body);
    const SaveOrder = await MyOrder.save();
    res.status(200).json({ message: "Order posted successfully", data: SaveOrder });
  } catch (error) {
    console.log("🔥 Order Post Error:", error.message);

    return res.status(500).json({
      success: false,
      message: "Error saving order",
      error: error.message   // ✅ important
    });
  }
});


  OrderRouter.get("/Get",async(req,res)=>{
     const OrderData = await Order.find();
      res.json({ Data: OrderData });
    })
    
    OrderRouter.get("/Get/:userId", async (req, res) => {
  try {
    const userId = req.params.userId;
    const orders = await Order.find({ userId });
    res.json({ Data: orders });
  } catch (error) {
    res.status(500).json({ message: "Error fetching orders", error });
  }
});

   
   // Get a specific order by MongoDB ID
OrderRouter.get("/Get/:Ordername", async (req, res) => {
  try {
     const Ordername = req.params.Ordername; 
    const order = await Order.findOne({ Ordername: Ordername });
    if (!order) return res.status(404).json({ success: false, message: "Order not found" });
    res.json({ success: true, Data: order });
  } catch (error) {
    res.status(500).json({ success: false, message: "Error fetching order", error });
  }
});


OrderRouter.delete("/Delete/:id", async (req, res) => {
  try {
    const { id } = req.params;

    // ✅ Validate MongoDB ObjectId
    if (!id || id.length !== 24) {
      return res.status(400).json({
        success: false,
        message: "Invalid Order ID format",
      });
    }

    // ✅ Attempt to delete order
    const deletedOrder = await Order.findByIdAndDelete(id);

    if (!deletedOrder) {
      return res.status(404).json({
        success: false,
        message: "Order not found",
      });
    }

    // ✅ Return success with order details (optional)
    res.status(200).json({
      success: true,
      message: "Order deleted successfully",
      deletedOrder, // you can remove this line if you don’t want to expose deleted data
    });
  } catch (error) {
    console.error("Error deleting order:", error);
    res.status(500).json({
      success: false,
      message: "Internal server error while deleting order",
      error: error.message,
    });
  }
});


 module.exports = OrderRouter;
