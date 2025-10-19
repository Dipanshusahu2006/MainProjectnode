const mongoose = require("mongoose");

  const  Adminmodel = new mongoose.Schema({
      Username: String,
      UserEmail: String,
      Userpassword: String,
      Usernumber: String,
      role: String
    
  })

  const Admins = new mongoose.model("MyAdmin",Adminmodel)
  module.exports = Admins