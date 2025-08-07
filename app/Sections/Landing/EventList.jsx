import EventCard from '@/components/EventCard'
import React from 'react'

const EventList = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8 px-8">
         <EventCard/>
        </div>
    )
}

export default EventList
