const express = require("express");
const Cors = require("cors");
const bodyparshar = require("body-parser");
const UserRouter = require("./Routes/Userroutes");
const ProductRouter = require("./Routes/Productroutes");


require("./Mongodp/Mongodpconnect")

const server = express();


server.use(Cors({ origin: "*" }));
server.use(bodyparshar.json()); 



server.use("/user", UserRouter);
server.use("/product",ProductRouter);

server.get("/", (req, res) => {
  res.send("🚀 Hello! Your server is working.");
});

const port = 8000;
 
server.listen(port,(req,res)=>{
    console.log(`server runnin at http://localhost:${port}`);
})