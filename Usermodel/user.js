const mongoose = require("mongoose");

  const  Usersmodel = new mongoose.Schema({
    
      username: {
    type: String,
    required: true,
    trim: true
  },

  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true
  },

  password: {
    type: String,
    required: true,
    minlength: 6
  },

  phone: {
    type: String,
    required: true,
    match: /^[0-9]{10}$/ // optional: ensures 10-digit mobile
  },

  Useraddress: {
    type: String,
    default: ""
  },

  Userpincode: {
    type: String,
    default: ""
  },

  Userstate: {
    type: String,
    default: ""
  },

  Usercity: {
    type: String,
    default: ""
  },

  profileimage: {
    type: String,
    default: "" // you can store Cloudinary or URL path
  },

  role: {
    type: String,
    enum: ["Users", "Admin"],
    default: "Users"
  },

  createdAt: {
    type: Date,
    default: Date.now
  }
  })

  const Userss = new mongoose.model("MyUsers",Usersmodel)
  module.exports = Userss