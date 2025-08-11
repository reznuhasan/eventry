import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import GoingButton from './GoingButton'

const EventCard = ({event}) => {
    const {imageUrl,name,location,_id}=event;
    const id=_id.toString()
    return (
        <div className="overflow-hidden rounded-md bg-[#242526]">
            <Image src={imageUrl} alt="Event 1" width="200" height="200" className="w-full" />

            <div className="p-3">
                <Link href={`/details/${id}`} className="font-bold text-lg">{name}</Link>
                <p className="text-[#9C9C9C] text-sm mt-1">{location}</p>
                <div className="text-[#737373] text-sm mt-1">
                    <span>1k Interested</span>
                    <span>|</span>
                    <span>40K Going</span>
                </div>

                <div className="w-full flex gap-4 mt-4">
                    <button className="w-full bg-indigo-600 hover:bg-indigo-800">Interested</button>
                    <GoingButton/>
                </div>
            </div>
        </div>
    )
}

export default EventCard
