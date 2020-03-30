const mongoose = require("mongoose")

let administratorScheme = mongoose.Schema({
     __v :    {type:Number,select:false},
     userName:{type:String},
     passWord:{type:String,required:true,select:false},
     leavel:{type:String,default:'admin'},

})

let administratorModel = mongoose.model("admins",administratorScheme)
module.exports = administratorModel


