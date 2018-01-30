import express from "express";
import Discussion from "../model/discussion";
 var nanoid = require('nanoid')
var MongoClient = require('mongodb').MongoClient


let Router = express.Router();
Router.post('/getQuestion', (req, res) => {
    console.log(req.body);
    Discussion.find({topic:req.body.topic}).then((doc)=>{
        console.log(doc);
        res.json({doc})
    })
   
 });
Router.post('/addQuestion', (req, res) => {
    
    var {question,date,name,topic }=req.body;
      var  data={
          question:question,
          date:date,
          name:name,
          topic:topic,
          id:nanoid(10)
      }
      new Discussion(data).save().then(()=>{
        Discussion.find({topic:topic}).then((doc)=>{
            res.json({doc})
        })
      })
 


});
Router.post('/addreply', (req, res) => {
    var {questionId,name,replay,date} = req.body;
    var replyData={
        name:name,
        date:date,
        replay:replay
    }
    Discussion.findOneAndUpdate({id:req.body.questionId},{ $push: { comment:replyData}},{new:true}).then((doc)=>{
        Discussion.find({topic:req.body.topic}).then((doc)=>{
   
            res.json({doc})
        })
     
    })

        
    })
    
   

export default Router;