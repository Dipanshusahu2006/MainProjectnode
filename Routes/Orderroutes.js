const express = require("express");
const Order  = require("../Usermodel/Order");
const OrderRouter = express.Router();

 OrderRouter.post("/Post", async(req,res)=>{
    const MyOrder = new Order(req.body);
      const SaveOrder = await MyOrder.save();
      if (SaveOrder) {
      res.status(200).json({
        message: "Order post successfully",
        data: SaveOrder
      });
    } else {
      res.status(400).json({
        message: "Order not saved "
      });
    }
 })

  OrderRouter.get("/Get",async(req,res)=>{
     const OrderData = await Order.find();
      res.json({ Data: OrderData });
    })

   
   OrderRouter.get("/Get/:id", async (req, res) => {
    const OrderId = req.params.id;
    const Orders = await Order.findById(OrderId);
    res.json({ success: true, Data: Orders });


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
