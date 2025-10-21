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

 module.exports = OrderRouter;
