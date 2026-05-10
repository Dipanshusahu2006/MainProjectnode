const razorpay = require('razorpay');
 
const dotenv =require('dotenv');
dotenv.config();

    exports.Razorpayinstance = () =>{
    return new razorpay({
        key_id : process.env.Razorpay_key_id,
        key_secret : process.env.Razorpay_key_Secret
    });
}