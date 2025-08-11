import mongoose, { Schema } from "mongoose";

const eventSchema=new Schema({
    name:{
        type:String,
        required:true,
        unique:true,
    },
    details:{
        type:String,
    },
    location:{
        type:String,
    },
    imageUrl:{
        type:String,
    },
    interested_ids:{
        type:Array,
    },
    going_ids:{
        type:Array,
    },
    swags:{
        type:Array,
    },
})

export const events=mongoose.model.events ?? mongoose.model("events",eventSchema)