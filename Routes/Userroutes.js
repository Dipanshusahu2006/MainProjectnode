const express = require("express");
const  Userss = require("../Usermodel/user");
const UserRouter = express.Router();

 UserRouter.post("/Post", async(req,res)=>{
    const Myusers = new Userss(req.body);
      const Savedata = await Myusers.save();
      if (Savedata) {
      res.status(200).json({
        message: "User saved successfully",
        data: Savedata
      });
    } else {
      res.status(400).json({
        message: "User not saved "
      });
    }
 })

  UserRouter.get("/Get",async(req,res)=>{
     const Data = await Userss.find();
      res.json({ Data: Data });
    })

   
   UserRouter.get("/Get/:id", async (req, res) => {
    const userId = req.params.id;
    const user = await Userss.findById(userId);
    res.json({ success: true, Data: user });


});

UserRouter.delete("/Delete/:id", async (req, res) => {
  try {
    const userId = req.params.id;
    const deletedUser = await Userss.findByIdAndDelete(userId);

    if (!deletedUser) {
      return res.status(404).json({ success: false, message: "User not found" });
    }

    res.json({ success: true, message: "User deleted successfully" });
  } catch (error) {
    res.status(500).json({ success: false, message: "Server error", error });
  }
});
      

     UserRouter.put("/Edit/:id", async (req, res) => {
  try {
    const userId = req.params.id;
    const updatedData = req.body;

    const updatedUser = await Userss.findByIdAndUpdate(userId, updatedData);

    if (!updatedUser) {
      return res.status(404).json({ success: false, message: "User not found" });
    }

    res.json({
      success: true,
      message: "User updated successfully",
      data: updatedUser,
    });
  } catch (error) {
    console.error("Update error:", error);
    res.status(500).json({ success: false, message: "Server error", error });
  }
});


    module.exports = UserRouter;
