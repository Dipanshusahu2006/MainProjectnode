const mongoose = require("mongoose");

  const  Enqurirymodel = new mongoose.Schema({
    userId: { type: String, required: true },
      CustomerName: String,
      Emaileaddress: String,
      BillNumber: String,
      CustomerNumber: String,
      Customerenquarirs: String
    
  })

  const Enquriry = new mongoose.model("MyEnquriry", Enqurirymodel)
  module.exports = Enquriry