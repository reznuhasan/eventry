import EventCard from '@/components/EventCard'
import { GetAllEvents } from '@/quires/events'
import React from 'react'

const EventList = async() => {
    const events=await GetAllEvents()
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8 px-8">
        {
            events.map((event,index)=><EventCard key={index} event={event}/>)
        }
        </div>
    )
}

export default EventList
