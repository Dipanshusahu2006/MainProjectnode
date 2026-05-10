require("dotenv").config();
const { Razorpayinstance } = require("../config/razorpay.config");
const crypto = require("crypto");


 const  Razorpayinstances =    Razorpayinstance();
exports.creatOrder = async (req,res) =>{
    const {orderid,amount} = req.body;


    
    const option ={
        amount : amount * 100 ,
        currency :"INR",
        receipt: `receipt_order_${Date.now()}`
    } ;


    try{
      Razorpayinstances.orders.create(option,(err,order)=>{
        if(err){
            return res.status(500).json({
                success: false,
                messege : "something went wrong"
            }) 
        }    return res.status(200).json(order);
      });
    }catch (error) {
        return res.status(500).json({
            success: false,
            message :"something went wrong"
        });

    }
}
 
 exports.verifypayment = async (req,res) =>{
     const {order_id, payment_id,signature} = req.body;

     const secret = process.env.RAZORPAY_KEY_SECRET ;

     const hmac = crypto.createHmac("Shoporder1",secret)
     
     hmac.update(order_id + "|" +payment_id );
      
     const generatedsignature = hmac.digest("hex");

     if (generatedsignature === signature) {
        return res.status(200).json({
            success : true,
            message : "payment verified",
        });
     }else {
        return res.status(400).json({
            success : false,
            message : "payment not verified",
        })
     }
 }
