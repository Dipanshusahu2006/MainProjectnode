const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://dipanshu123456v7_db_user:Ax.zDZYntmZp6B5@nodeculster.rpxhsuj.mongodb.net/?appName=Nodeculster", { family: 4 })
  .then(() => console.log("MongoDB connected successfully"))
  .catch(err => console.error("MongoDB connection error:", err));
  
