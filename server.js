const express = require('express')
const mongoose = require('mongoose')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const cors = require('cors')
require('dotenv').config()

//import routes
const authRoutes = require('./routes/auth')
const userRoutes = require('./routes/user')
const categoryRoutes = require('./routes/category')
const subRoutes = require('./routes/sub')
const productRoutes = require('./routes/product')
const cloudinaryRoutes = require('./routes/cloudinary')
const couponRoutes = require('./routes/coupon')
const stripeRoutes = require('./routes/stripe')
const adminRoutes = require('./routes/admin')



//app
const app = express()

//db
mongoose.connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
})
.then(() => console.log("DB Connected"))
.catch((err) => console.log("DB Connection err", err))

//middleware
app.use(morgan("dev"))
app.use(express.json({limit: "2mb"}))
app.use(cors())

//route middleware
app.use("/api", authRoutes)
app.use("/api", userRoutes)
app.use("/api", categoryRoutes)
app.use("/api", subRoutes)
app.use("/api", productRoutes)
app.use("/api", cloudinaryRoutes)
app.use("/api", couponRoutes)
app.use("/api", stripeRoutes)
app.use("/api", adminRoutes)
//fs.readdirSync("/routes").map((r) => app.use("/api", require("./routes/" + r)))


//port
const port = process.env.PORT || 8000
app.listen(port, console.log(`The server is listening on port ${port}`))
