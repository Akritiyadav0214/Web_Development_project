const mongoose=require('mongoose');

async function connecttoDB(){
    try{
 await    mongoose.connect(process.env.MONGO_URI)
 console.log("database is connect");
    }
    catch(err){
        console.log(err);
    }
}


module.exports=connecttoDB;