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
