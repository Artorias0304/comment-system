var mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/user-info', { useNewUrlParser: true } )

var Schema = mongoose.Schema

var userSchema = new Schema({
	username:{
		type:String,
		required:true
	},
	email:{
		type:String,
		required:true
	},
	password:{
		type:String,
		required:true
	},
	create_time:{
		type:Date,
		default:Date.now
	},
	last_modified_time:{
		type:Date,
		default:Date.now
	}
//	avatar:{
//		type:String,
//		default:'/public/img/asdhf.png'
//	}
})

module.exports=mongoose.model('User',userSchema)

