const mongoose= require ("mongoose")
const Schema = mongoose.Schema

const usermodelSchema= new Schema({
    firstname:String,
    lastname: String,
    email: String,
    password: String,
    cpassword: String,
    lat: Number,
    lng: Number
})

const usermodel= mongoose.model("usermodel",usermodelSchema)
module.exports=usermodel