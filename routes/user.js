const express = require('express')
const { userCart, 
    getUserCart, 
    emptyCart, 
    saveAddress, 
    applyCouponToUserCart, 
    createOrder, 
    orders,
    addToWishlist,
    wishlist,
    removeFromWishlist,
    createCashOrder,
} = require('../controllers/user')
const { authCheck } = require('../middlewares/auth')
const router = express.Router()

router.post('/user/cart', authCheck, userCart) //save cart

router.get('/user/cart', authCheck, getUserCart)  //get cart

router.delete('/user/cart', authCheck, emptyCart ) //emptyCart

router.post('/user/address', authCheck, saveAddress ) //saveAddress

router.post('/user/cart/coupon', authCheck, applyCouponToUserCart ) //applydiscount

router.post('/user/order', authCheck, createOrder ) //create order in backend

router.post("/user/cash-order", authCheck, createCashOrder); // cod

router.get('/user/orders', authCheck, orders)  //get orders

// wishlist
router.post("/user/wishlist", authCheck, addToWishlist);
router.get("/user/wishlist", authCheck, wishlist);
router.put("/user/wishlist/:productId", authCheck, removeFromWishlist);

// router.get("/user", (req,res) => {
//     res.json({
//         data: "Hey you hit the user API endpoint",
//     })
// })

module.exports = router