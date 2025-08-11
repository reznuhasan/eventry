import mongoose from "mongoose";


export async function dbConnected() {
    try{
        const connect= await mongoose.connect(process.env.MONGO_URL)
        console.log("connected")
        return connect;
    }
    catch(err){
        console.log(err)
    }
    
}