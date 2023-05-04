const Coupon = require("../models/coupon")


exports.create = async (req, res) => {
    try {
        // console.log(req.body.coupon);
        // return;
        const{name, expiry, discount} = req.body.coupon
        const couponRes = await new Coupon({name,expiry,discount}).save() 

        res.json(couponRes)
    } catch (err) {
        console.log("create coupon failed", err)
    }
}

exports.remove = async(req, res) => {
    try {
        res.json(await Coupon.findByIdAndDelete(req.params.couponId).exec())
    } catch (err) {
        console.log(err)
    }
}

exports.list = async (req, res) => {
    try {
        res.json(await Coupon.find({}).sort({createdAt: -1}).exec())
    } catch (err) {
        console.log(err)
    }
}