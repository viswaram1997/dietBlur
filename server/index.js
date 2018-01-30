import mongoose from "mongoose";
import chalk from "chalk";
// var User = require("./models/user");
import bodyParser from "body-parser";
import express from "express";
import UserRoute from "./Route/user";
import Discussion from "./Route/Discussion";
import Admin from "./Route/Admin";
import cors from "cors";
let app=express();
app.use(bodyParser.json());
app.use(cors());

mongoose.connect('mongodb://localhost:27017/zomato', { useMongoClient: true }, (err) => {
    if (err === null) {
        console.log(chalk.green('connected'));
    }
    else {
        console.log(err);
    }

})
mongoose.connection.on('error', (err) => {
    console.log('%s MongoDB connection error. Please make sure MongoDB is running.', chalk.red('✗'));
    process.exit();

});
mongoose.Promise = global.Promise;
    

app.use('/user',UserRoute);
app.use('/discussion', Discussion);
app.use('/admin',Admin);
app.get('/calc',(req,res)=>{
    res.sendFile(__dirname +'/ff.html');
})



app.set('port', process.env.PORT || 7000);
app.set('host', process.env.HOST || '192.168.10.61');

app.listen(app.get('port'),  function(){
  console.log("Express server listening on port " + app.get('port'));
});




