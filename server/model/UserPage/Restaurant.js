

const mongoose = require('mongoose'),
   
Schema = mongoose.Schema;



const Restaurant = new Schema({
    restaurantName:{
    type:String 
   
},
restaurantInfo :{
    type:String,
    default:''
},
area : {
    type: String,
    
},
city: {
    type: String
},
state:{
    type:String
},
contact:{
    type:Number
},
address:{
    type:String
},
username:{
    type:String

}

},{
timestamps:true 
});

const User = mongoose.model('restaurantDetails',Restaurant);


module.exports = User;