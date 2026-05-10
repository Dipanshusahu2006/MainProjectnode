const express = require("express");
const Cors = require("cors");
const bodyparshar = require("body-parser");
const UserRouter = require("./Routes/Userroutes");
const ProductRouter = require("./Routes/Productroutes");
const AdminRouter = require("./Routes/AdminRoutes");
const AdminreplyRouter = require("./Routes/AdminreplyRoutes");
const EnquryRouter = require("./Routes/Enquriryroutes");
const  CartRouter = require("./Routes/CartRoutes");
const  OrderRouter = require("./Routes/Orderroutes");
const paymentrouter = require("./Routes/paymentRoutes");
require("./Mongodp/Mongodpconnect")

const server = express();


server.use(Cors({ origin: "*" }));
server.use(bodyparshar.json()); 



server.use("/user", UserRouter);
server.use("/admin", AdminRouter);
server.use("/product",ProductRouter);
server.use("/enqury",EnquryRouter);
server.use("/adminreply",AdminreplyRouter);
server.use("/cart",CartRouter);
server.use("/order",OrderRouter);
server.use("/payments",paymentrouter);

server.get("/", (req, res) => {
  res.send("🚀 Hello! Your server is working.");
});

const port = 8000;
 
server.listen(port,(req,res)=>{
    console.log(`server runnin at http://localhost:${port}`);
})