const express = require("express");
const  AdminsReply = require("../Usermodel/Adminreply");
const AdminreplyRouter = express.Router();

 AdminreplyRouter.post("/Post", async(req,res)=>{
    const MyEnqury = new AdminsReply(req.body);
      const Savedata = await MyEnqury.save();
      if (Savedata) {
      res.status(200).json({
        message: "adminreply post successfully",
        data: Savedata
      });
    } else {
      res.status(400).json({
        message: "Reply not saved "
      });
    }
 })

  AdminreplyRouter.get("/Get",async(req,res)=>{
    try {
    const userId = req.params.userId;
     const Data = await AdminsReply.find({ userId });
      res.json({ Data: Data });
      } catch (error) {
    res.status(500).json({ message: "Error fetching Enquryreply", error });
  }
    })

   module.exports = AdminreplyRouter;