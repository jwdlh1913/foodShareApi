const mongoose = require("mongoose")

let menuScheme = mongoose.Schema({
		__v :    {type:Number,select:false},
		userId:{type:Number,required:true},
		title:{type:String,required:true},
		tags:{type:String,required:false},
		imtro:{type:String,required:true},
		// kind:{type:String,required:true},
		kind:{type:mongoose.Schema.Types.ObjectId,ref:"menutypesName"},
		ingredients:{type:String,required:false},
		burden:{type:String,required:true},
		albums:{type:String,required:true},
		steps:{type:Array,require:false},
		createTime: {
				type: Date,
				default: new Date().getTime()
				},
				updateTime: {
				type: Date,
				default: new Date().getTime()
		}
	},
	{
		versionKey: false,
		timestamps: { createdAt: 'createTime', updatedAt: 'updateTime' }
	}
)

let menuModel = mongoose.model("menus",menuScheme)
module.exports = menuModel


