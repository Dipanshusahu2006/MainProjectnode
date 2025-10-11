const express = require("express");
const Cors = require("cors");
const bodyparshar = require("body-parser");

require("./Mongodp/Mongodpconnect")

const server = express();


server.use(Cors({ origin: "*" }));
server.use(bodyparshar.json()); 

const UserRouter = require("./Routes/Userroutes");

server.use("/user", UserRouter);

server.get("/", (req, res) => {
  res.send("🚀 Hello! Your server is working.");
});

const port = 8000;
 
server.listen(port,(req,res)=>{
    console.log(`server runnin at http://localhost:${port}`);
})