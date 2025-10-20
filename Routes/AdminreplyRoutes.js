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
     const Data = await AdminsReply.find();
      res.json({ Data: Data });
    })

