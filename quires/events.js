import { events } from "@/models/events.models";


export async function GetAllEvents() {
    const allevents=await events.find();
    return allevents;
}