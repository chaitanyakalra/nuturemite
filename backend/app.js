const express= require("express")
const userRouter= require("./routes/userRoutes")
const vendorRouter= require("./routes/vendorRoutes")
const app= express()
const cors= require("cors")

app.use(express.json())

app.use(cors())

app.use("/api", userRouter)
app.use("/api",vendorRouter)

module.exports= app





