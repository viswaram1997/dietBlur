const mongoose = require('mongoose'),
   
Schema = mongoose.Schema;



const Add_question = new Schema({
topic:{
    type:String,
    
},
questions:{
    type:Array,
    default:[]
}

},{
timestamps:true 
});

const Addquestion = mongoose.model('allquestion',Add_question);


module.exports = Addquestion;