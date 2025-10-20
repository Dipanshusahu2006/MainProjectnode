const express = require("express");
const Enquriry  = require("../Usermodel/Enqurity");
const EnquryRouter = express.Router();

 EnquryRouter.post("/Post", async(req,res)=>{
    const MyEnquriry = new Enquriry(req.body);
      const SaveEnquriry = await MyEnquriry.save();
      if (SaveEnquriry) {
      res.status(200).json({
        message: "Enqury post successfully",
        data: SaveEnquriry
      });
    } else {
      res.status(400).json({
        message: "Enqury not saved "
      });
    }
 })

  EnquryRouter.get("/Get",async(req,res)=>{
     const EnquryData = await Enquriry.find();
      res.json({ Data: EnquryData });
    })

   
   EnquryRouter.get("/Get/:id", async (req, res) => {
    const EnquryId = req.params.id;
    const Enqury = await Enquriry.findById(EnquryId);
    res.json({ success: true, Data: Enqury });


});

 module.exports = EnquryRouter;
