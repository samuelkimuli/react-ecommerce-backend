const express = require('express')

const router = express.Router()

//middleware
const { authCheck } = require('../middlewares/auth')

//controller method
const {createPaymentIntent} = require('../controllers/stripe')

//route
router.post('/create-payment-intent', authCheck, createPaymentIntent)

module.exports = router