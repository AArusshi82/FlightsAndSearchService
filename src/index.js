const express=require("express");
const bodyParser=require("body-parser");
const {PORT}=require('./config/severConfig');
require('dotenv').config()
const setupAndStartServer=async()=>{
    const app=express();
    const PORT=3000;
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended:true}));
    app.listen(PORT,()=>{
        console.log("Server started at $(PORT)");
 //  console.log(process.env.PORT);
    });

}
setupAndStartServer();