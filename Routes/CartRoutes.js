const express = require("express");
const  Cart = require("../Usermodel/Cart");
const CartRouter = express.Router();

CartRouter.post("/Post", async (req, res) => {
  try {
    const { userId } = req.body;
    if (!userId)
      return res.status(400).json({ message: "Missing userId in request body" });

    const MyCart = new Cart(req.body);
    const SaveCart = await MyCart.save();

    res.status(200).json({ message: "Cart posted successfully", data: SaveCart });
  } catch (error) {
    res.status(500).json({ message: "Error saving cart", error });
  }
});


 CartRouter.get("/Get/:userId", async (req, res) => {
  try {
    const userId = req.params.userId;
    const ProductCart = await Cart.find({ userId });
    res.json({ Data: ProductCart });
  } catch (error) {
    res.status(500).json({ message: "Error fetching cart", error });
  }
});

     

    CartRouter.delete("/Delete/:userId", async (req, res) => {
  try {
    const userId = req.params.userId;
    const result = await Cart.deleteMany({ userId });
    if (result.deletedCount === 0) {
      return res.status(404).json({ success: false, message: "No cart found for this user" });
    }
    res.json({ success: true, message: "User cart deleted successfully" });
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
