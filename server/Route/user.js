import express from "express";
import Userdetails from "../model/userLogin";
import Restaurant from "../model/UserPage/Restaurant";
var MongoClient = require('mongodb').MongoClient


let Router = express.Router();
Router.post('/login', (req, res) => {
    console.log(req.body.username)
    Userdetails.find({username:req.body.username}).then((result)=>{
        
            if(result.length===1&&result[0].password===req.body.password){
                console.log("ojk")
                res.json({Userexist:true});

            }else{
                res.json({Userexist:false})
            }
    }).catch((err)=>{
        console.log(err)
    })
 


});
Router.post('/signup', (req, res) => {
    var { email, password,username, matchpassword,mobile,location} = req.body;
    var userdetails={
        email:email,
        password:password,
        username:username,
        matchpassword:matchpassword,
        mobile:mobile,
        location:location
    }
    new Userdetails(userdetails).save().then((res)=>{
      console.log(res,"viswa")
    }).catch((err)=>{
        console.log(err)
    })
    
 


});
Router.post('/addrestaurant',(req,res)=>{
    var {restaurantName,restaurantInfo,area, city, state,contact,address,username }=req.body;
    var temp={
        restaurantName:restaurantName,
        restaurantInfo:restaurantInfo,
        area:area,
        city:city,
        state:state,
        contact:contact,
        address:address,
        username:username        
    }
console.log(username)
    new Restaurant(temp).save().then((req)=>{   
        console.log("addeds");
        res.json({status:true})
        }).catch((err)=>{
            console.log(err);
                })
})
Router.post('/getrestaurant' ,(req,res)=>{
    var{ username } = req.body;
    Restaurant.findOne({username:username}).then((doc)=>{
     res.json({doc})

    })

})
Router.post('/updaterestaurant' ,(req,res)=>{
    var {restaurantName,restaurantInfo,area, city, state,contact,address,username }=req.body;
    var temp={
        restaurantName:restaurantName,
        restaurantInfo:restaurantInfo,
        area:area,
        city:city,
        state:state,
        contact:contact,
        address:address,
        username:username        
    }
    Restaurant.update({username:username},{  restaurantName:restaurantName,
        restaurantInfo:restaurantInfo,
        area:area,
        city:city,
        state:state,
        contact:contact,
        address:address,
        username:username  }).then((doc)=>{
            console.log(doc)
     res.json({update:true})

    })

})
Router.post('/test' ,(req,res)=>{
console.log(req.body,"viswa")
res.json({dsd:"dsd"})
}
)
export default Router;