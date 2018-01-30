import express from "express";
import Addquestion from "../model/addquestion";
 var nanoid = require('nanoid')
var MongoClient = require('mongodb').MongoClient;

let Router = express.Router();
Router.get('/getallquestion', (req, res) => {
       console.log("dsdsad")
       Addquestion.find().then((doc)=>{
        
   
            res.json({doc})
      
     
    })

        
    })
    Router.get('/addquestion', (req, res) => {
      

        var final={
            topic:"Numerical Ability",
            question:[{
                subcategory:"essay",
                id:"5298125111",
                question:"how to do this?"
            },{
                subcategory:"numerical",
                id:"5298225",
                question:"how to do this?"
            },{
                subcategory:"multiple choice",
                id:"2655148920",
                question:"how to do this?"
            }]
        }
         new Addquestion(final).save().then((doc)=>{
                console.log(doc)
         })
       
    
            
        })
        export default Router;