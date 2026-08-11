require("dotenv").config()
const connecttoDB =require('./src/config/database');
const app=require("./src/app")

connecttoDB();

module.exports=app