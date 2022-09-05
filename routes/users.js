var mongoose = require('mongoose');
var plm = require('passport-local-mongoose')
// import * as dotenv from 'dotenv' // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
// dotenv.config()

require('dotenv').config()


// mongoose.connect('mongodb://localhost/GEM3',{ useNewUrlParser: true,useUnifiedTopology: true });
mongoose.connect(process.env.DBLINK,{useNewUrlParser: true,useUnifiedTopology: true})



var adminModel= mongoose.Schema({
  username:String,
  email: String,
  name:String,
  isadmin:Boolean,
  password:String,
  expensename:[]
})

adminModel.plugin(plm);
module.exports=mongoose.model('user', adminModel);