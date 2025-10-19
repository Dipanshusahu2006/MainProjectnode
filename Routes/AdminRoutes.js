const express = require("express");
const Admins = require("../Usermodel/Admin");
const AdminRouter = express.Router();

 AdminRouter.post("/Post", async(req,res)=>{
    const Myadmins = new Admins(req.body);
      const Savedata = await Myadmins.save();
      if (Savedata) {
      res.status(200).json({
        message: "Admin post successfully",
        data: Savedata
      });
    } else {
      res.status(400).json({
        message: "Admin not saved "
      });
    }
 })

  AdminRouter.get("/Get",async(req,res)=>{
     const AdminData = await Admins.find();
      res.json({ Data: AdminData });
    })

   
   AdminRouter.get("/Get/:id", async (req, res) => {
    const AdminId = req.params.id;
    const Admin = await Admins.findById(AdminId);
    res.json({ success: true, Data: Admin });


});

   AdminRouter.delete("/Delete/:id", async (req, res) => {
  try {
    const AdminId = req.params.id;
    const deleteAdmin = await Admins.findByIdAndDelete(AdminId);

    if (!deleteAdmin) {
      return res.status(404).json({ success: false, message: "Admin not found" });
    }

    res.json({ success: true, message: "Admin deleted successfully" });
  } catch (error) {
    res.status(500).json({ success: false, message: "Server error", error });
  }
});
      

     AdminRouter.put("/Edit/:id", async (req, res) => {
  try {
    const AdminId = req.params.id;
    const updatedAdminData = req.body;
    const updateAdmin = await Admins.findByIdAndUpdate(AdminId, updatedAdminData);

    if (!updateAdmin) {
      return res.status(404).json({ success: false, message: "Admin not found" });
    }
      res.json({
      success: true,
      message: "Admin updated successfully",
      data: updateAdmin,
    });
  } catch (error) {
    console.error("Update error:", error);
    res.status(500).json({ success: false, message: "Server error", error });
  }
});


    module.exports = AdminRouter;
