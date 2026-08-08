require("dotenv").config()
const connecttoDB =require('./src/config/database');
const app=require("./src/app")

connecttoDB();

app.listen(3000,()=>{
    console.log("Server is running on port")
})