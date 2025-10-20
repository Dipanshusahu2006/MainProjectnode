const mongoose = require("mongoose");

  const  AdminReplymodel = new mongoose.Schema({
      CustomerName: String,
      Emaileaddress: String,
      BillNumber: String,
      CustomerNumber: String,
      Reply: String
    
  })

  const AdminsReply = new mongoose.model("MyAdminReply",AdminReplymodel)
  module.exports = AdminsReply