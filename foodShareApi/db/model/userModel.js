const mongoose = require("mongoose")

let userScheme = mongoose.Schema({
    __v: { type: Number, select: false },
    userName: { type: String, required: true },
    passWord: { type: String, required: true, select: true },
    leavel: { type: String, default: 'user' },

})

let userModel = mongoose.model("user", userScheme)
module.exports = userModel