import GoingButton from "@/components/GoingButton"
import Image from "next/image"

const HeroSection = ({event}) => {
    // const {imageUrl,name,location,interested_ids,going_ids}=event
    console.log(event)
    return (
        <div className="container flex flex-col justify-between items-center px-8">
            <div className="bg-gradient-to-b from-slate-200/20 to-slate-800/30">
            
                <Image src={event?.imageUrl} alt="Event 1" width={1200} height={550} className=" w-full h-auto" />

            
            </div>
            <div className="flex items-center justify-between w-full">
                <div className="flex-auto py-4">
                    <h1 className="font-bold text-2xl">{event?.name}</h1>
                    <p className="text-[#9C9C9C] text-base mt-1">{event?.location}</p>
                    <div className="text-[#737373] text-sm mt-1">
                        <span>{event?.interested_ids?.length ?? 0} Interested </span>
                        <span>|</span>
                        <span> {event?.going_ids?.length ?? 0} Going</span>
                    </div>
                </div>

                <div className="w-full flex gap-4 mt-4 flex-1 ">
                    <button className="w-full">Interested</button>
                    <GoingButton/>
                </div>
            </div>
        </div>
    )
}

export default HeroSection
