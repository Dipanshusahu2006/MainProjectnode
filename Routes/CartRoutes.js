const express = require("express");
const  Cart = require("../Usermodel/Cart");
const CartRouter = express.Router();

CartRouter.post("/Post", async(req,res)=>{
    const MyCart = new Cart(req.body);
      const SaveCart = await MyCart.save();
      if (SaveCart) {
      res.status(200).json({
        message: "Cart post succesfully",
        data: SaveCart
      });
    } else {
      res.status(400).json({
        message: "products not saved "
      });
    }
 })

 CartRouter.get("/Get",async(req,res)=>{
     const ProductCart = await Cart.find();
      res.json({ Data: ProductCart });
    })
     

    CartRouter.delete("/Delete", async (req, res) => {
  try {
    const result = await Cart.deleteMany({});

     if (!result) {
      return res.status(404).json({ success: false, message: "Cart not deleted" });
    }
    res.json({ success: true, message: "Cart deleted successfully" });
  } catch (error) {
    res.status(500).json({ success: false, message: "Server error", error });
  }
});

 CartRouter.delete("/Delete/:id", async (req, res) => {
  try {
    const CarttId = req.params.id;
    const deletedCart = await Cart.findByIdAndDelete(CarttId);

    if (!deletedCart) {
      return res.status(404).json({ success: false, message: "Cart not found" });
    }

    res.json({ success: true, message: "Cart deleted successfully" });
  } catch (error) {
    res.status(500).json({ success: false, message: "Server error", error });
  }
});
      

      CartRouter.put("/Edit/:id", async (req, res) => {
  try {
    const CarttId = req.params.id;
    const { ProductQuantity } = req.body;

    // ✅ Ensure only quantity is updated
    const updatedCart = await Cart.findByIdAndUpdate(
      CarttId,
      { $set: { ProductQuantity } },
      { new: true } // return updated doc
    );

    if (!updatedCart) {
      return res.status(404).json({ success: false, message: "Cart not found" });
    }

    res.json({
      success: true,
      message: "Cart quantity updated successfully",
      data: updatedCart,
    });
  } catch (error) {
    console.error("Update error:", error);
    res.status(500).json({ success: false, message: "Server error", error });
  }
});


    module.exports = CartRouter;
