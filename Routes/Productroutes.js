const express = require("express");
const  Products = require("../Usermodel/Product");
const ProductRouter = express.Router();

ProductRouter.post("/Post", async (req, res) => {
  try {
    const { ProductName } = req.body;

    if (!ProductName) {
      return res.status(400).json({ message: "ProductName is required" });
    }

    const slug = ProductName.toLowerCase()
      .replace(/\s+/g, "-")
      .replace(/[()]/g, "");

    const Myproducts = new Products({ ...req.body, slug });
    const Savedata = await Myproducts.save();

    res.status(200).json({
      message: "Product posted successfully",
      data: Savedata
    });
  } catch (error) {
    console.error("Error saving product:", error);
    res.status(400).json({ message: "Product not saved", error });
  }
});


 ProductRouter.get("/Get",async(req,res)=>{
     const ProductData = await Products.find();
      res.json({ Data: ProductData });
    })

   
    ProductRouter.get("/slug/:slug", async (req, res) => {
  try {
    const { slug } = req.params;
    const product = await Products.findOne({ slug });

    if (!product)
      return res.status(404).json({ success: false, message: "Product not found" });

    res.json({ success: true, Data: product });
  } catch (error) {
    res.status(500).json({ success: false, message: "Server error", error });
  }
});


 ProductRouter.delete("/Delete/:id", async (req, res) => {
  try {
    const ProductId = req.params.id;
    const deletedProducts = await Products.findByIdAndDelete(ProductId);

    if (!deletedProducts) {
      return res.status(404).json({ success: false, message: "Product not found" });
    }

    res.json({ success: true, message: "Product deleted successfully" });
  } catch (error) {
    res.status(500).json({ success: false, message: "Server error", error });
  }
});
      

      ProductRouter.put("/Edit/:Productname", async (req, res) => {
  try {
    const Productname = req.params.Productname;
    const updatedProduct = req.body;

    const updatedProducts = await Products.findOneAndUpdate({ ProductName: Productname }, updatedProduct);

    if (!updatedProducts) {
      return res.status(404).json({ success: false, message: "Products not found" });
    }

    res.json({
      success: true,
      message: "Products updated successfully",
      data: updatedProducts,
    });
  } catch (error) {
    console.error("Update error:", error);
    res.status(500).json({ success: false, message: "Server error", error });
  }
});


    module.exports = ProductRouter;
