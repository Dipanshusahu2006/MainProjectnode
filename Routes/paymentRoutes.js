const express = require("express");
const paymentrouter = express.Router();

const {creatOrder,verifypayment} = require('../contrroler/payment.conttrooler');

paymentrouter.post('/createorder',creatOrder);
paymentrouter.post('/verifypayments',verifypayment);

module.exports = paymentrouter ;
