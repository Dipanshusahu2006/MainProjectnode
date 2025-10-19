const express = require("express");
const  Products = require("../Usermodel/Product");
const ProductRouter = express.Router();

ProductRouter.post("/Post", async(req,res)=>{
    const Myproducts = new Products(req.body);
      const Savedata = await Myproducts.save();
      if (Savedata) {
      res.status(200).json({
        message: "Product post succesfully",
        data: Savedata
      });
    } else {
      res.status(400).json({
        message: "products not saved "
      });
    }
 })

 ProductRouter.get("/Get",async(req,res)=>{
     const ProductData = await Products.find();
      res.json({ Data: ProductData });
    })

   
    ProductRouter.get("/Get/:Productname", async (req, res) => {
     const Productname = req.params.Productname;
    const Product = await Products.findOne(Productname);
    res.json({ success: true, Data: Product });
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

    const updatedProducts = await Products.findOneAndUpdate(Productname, updatedProduct);

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
