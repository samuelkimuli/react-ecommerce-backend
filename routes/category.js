const express = require('express')
const router = express.Router()

//Middlewares
const{authCheck,adminCheck} = require('../middlewares/auth')

//controllers
const {
    create,
    read,
    update,
    list,
    remove,
    getSubs
} = require('../controllers/category')

//routes
router.post("/category",authCheck,adminCheck,create)
router.get("/categories",list)
router.get("/category/:slug",read)
router.put("/category/:slug",authCheck,adminCheck,update)
router.delete("/category/:slug",authCheck,adminCheck,remove)
router.get("/category/subs/:_id",getSubs)

module.exports = router