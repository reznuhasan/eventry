import mongoose, { Schema } from "mongoose";

const userSchema=new Schema({
    name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    password:{
        type:String,
        required:true,
    },
    phone:{
        type:string,
        required:true,
    },
    bio:{
        type:string,
    }
})

export const users=mongoose.model("users",userSchema)