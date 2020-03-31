const mongoose = require("mongoose")

let menutypesScheme = mongoose.Schema({
     __v :    {type:Number,select:false}, // 数据不返回 __v
     menutypesName:{type:String,required:true}
})

let menuTypesModel = mongoose.model("menutypes",menutypesScheme)
module.exports = menuTypesModel


