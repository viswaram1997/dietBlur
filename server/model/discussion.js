const mongoose = require('mongoose'),
   
Schema = mongoose.Schema;



const Discussion_Schema = new Schema({
topic:{
    type:String,
    
},
name:{
    type:String
},
id:{
    type:String

},
date:{
    type:String
},
comment:{
    type:Array,
    default:[]  
},
question:{
    type:String
}
},{
timestamps:true 
});

const Discussion = mongoose.model('Discussion',Discussion_Schema);


module.exports = Discussion;