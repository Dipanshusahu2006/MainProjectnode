const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://dipanshu123456v7_db_user:jNAt3QCNIaCG4keA@cluster0.ukaoaix.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0", { family: 4 })
  .then(() => console.log("MongoDB connected successfully"))
  .catch(err => console.error("MongoDB connection error:", err));
