"use server"

import { createUser } from "@/quires/events"
import { redirect } from "next/navigation"
async function registerUser(formdata) {
    const user=Object.fromEntries(formdata)
    const created=await createUser(user)
    if(created){
        redirect("/login")
    }
}

export {
    registerUser
}