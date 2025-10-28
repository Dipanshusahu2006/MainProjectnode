const mongoose = require("mongoose");

  const  AdminReplymodel = new mongoose.Schema({
     userId: { type: String, required: true },
      CustomerName: String,
      Emaileaddress: String,
      BillNumber: String,
      CustomerNumber: String,
      Reply: String
    
  })

  const AdminsReply = new mongoose.model("MyAdminReply",AdminReplymodel)
  module.exports = AdminsReply