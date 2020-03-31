const mongoose = require("mongoose")

let administratorScheme = mongoose.Schema({
     __v :    {type:Number,select:false},
     userName:{type:String,required:true},
     passWord:{type:String,required:true,select:true},
     leavel:{type:String,default:'admin'},

})

let administratorModel = mongoose.model("admins",administratorScheme)
module.exports = administratorModel


