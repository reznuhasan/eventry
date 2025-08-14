import { events } from "@/models/events.models";
import { users } from "@/models/users.models";
import { replaceObjectId } from "@/Utlis/helper";


export async function GetAllEvents() {
    const allevents=await events.find();
    return allevents;
}

export async function  getEventById(eventId) {
    const event=await events.findById(eventId).lean()
    return replaceObjectId(event)
    
}

export async function createUser(user){
    return await users.create(user)
}