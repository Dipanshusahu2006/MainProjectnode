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
    const OrderId = req.params.id;
    const deletedorder = await Order.findByIdAndDelete(OrderId);

    if (!deletedorder) {
      return res.status(404).json({ success: false, message: "Order not found" });
    }

    res.json({ success: true, message: "Order deleted successfully" });
  } catch (error) {
    res.status(500).json({ success: false, message: "Server error", error });
  }
});


 module.exports = OrderRouter;
