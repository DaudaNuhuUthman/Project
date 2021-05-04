const { response } = require("express")
const express= require("express")
const usermodel=require("./usermodel")
const router=express() 

router.post ("/signin", async function(request,response){
    const {email, password} = request.body
    let responseData = await usermodel.findOne ({email})
    if (responseData) {
        if (password===responseData.password) {
            response.status(200).send({success:true, message: "successful"})
            
        } else {
            response.status(300).send({failed:true, message:"username or password incorrect" })
        }
        
    } else {
        response.status(400).send({notexist: true, message: "user does not exist!"})
        
    } 
    res.status(200).send("this is the login api")
})


router.post("/signup", async function(request, response){
    const {values : {firstname, lastname,password,email,cpassword},lat,lng} = request.body

    let newUser= new usermodel({firstname, lastname, password, email,cpassword,lat,lng})
    let responseData= await newUser.save()

    if (responseData) {
        response.status(200).send({success:true, message:responseData})
        
    } else {
        response.status(400).send({success:false, message:"user already exist"})
    }
})


module.exports= router;