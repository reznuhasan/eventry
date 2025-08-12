import { events } from "@/models/events.models";
import { replaceObjectId } from "@/Utlis/helper";


export async function GetAllEvents() {
    const allevents=await events.find();
    return allevents;
}

export async function  getEventById(eventId) {
    const event=await events.findById(eventId).lean()
    return replaceObjectId(event)
    
}