const mongoose = require("mongoose")

let kindScheme = mongoose.Schema({
     __v :    {type:Number,select:false},
     kindName:{type:String,required:true},

})

let kindModel = mongoose.model("menutypes",kindScheme)
module.exports = kindModel


