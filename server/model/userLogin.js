

const mongoose = require('mongoose'),
   
    Schema = mongoose.Schema;



const Users = new Schema({
    username:{
        type:String,
        unique:true
    },
    email :{
        type:String,
        default:''
    },
    name : {
        type: String,
        
    },
    password: {
        type: String
    },
    mobile:{
        type:String
    },
    location:{
        type:String
    }

},{
    timestamps:true 
});

const User = mongoose.model('UserDetails',Users);


module.exports = User;