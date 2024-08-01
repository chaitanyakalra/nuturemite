
const Vendor= require("../models/vendorSchema")

const register= async (req,res)=>{
    try{
        // const {}
        const user= await Vendor.create(req.body)
        res.status(201).json({
            status: "success",
            data: user
        })
    }catch (err){
        res.status(400).json({
            status: "fail",
            message: err.message
        })

    }
}

const login= async (req,res)=>{
   try{
const {email,password}= req.body
const user= await Vendor.findOne({email}).select("+password")
if( password=== user.password){
res.status(201).json({
    status: "success",
    data: user
})
}else{
    res.status(400).json({
        status: "fail",
        message: "invalid email or password "
    })
}

   }catch(err){
    res.status(400).json({
        status: "fail",
        message: err.message
    })
   }
}
module.exports= {
    login,
    register
}