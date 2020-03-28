const mongoose = require("mongoose")

let menutypesScheme = mongoose.Schema({
     // __v :    {type:Number,select:false},
     menutypesName:{type:String,required:true},
     // 菜谱属于哪一大类
     classes:{type:String,require:true}
})

let menuTypesModel = mongoose.model("menutypes",menutypesScheme)
module.exports = menuTypesModel


