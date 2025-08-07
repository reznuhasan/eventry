import Image from "next/image"

const HeroSection = () => {
    return (
        <div className="container flex flex-col justify-between items-center px-8">
            <div className="bg-gradient-to-b from-slate-200/20 to-slate-800/30">
                <Image src="/google-io-2023-1.png" alt="Event 1" width={1200} height={550} className=" w-full h-auto" />
            </div>
            <div className="flex items-center justify-between w-full">
                <div className="flex-auto py-4">
                    <h1 className="font-bold text-2xl">Google I/O Extended</h1>
                    <p className="text-[#9C9C9C] text-base mt-1">Rangpur, Dhaka, Bangladesh, Rangpur, Bangladesh</p>
                    <div className="text-[#737373] text-sm mt-1">
                        <span>1k Interested</span>
                        <span>|</span>
                        <span>40K Going</span>
                    </div>
                </div>

                <div className="w-full flex gap-4 mt-4 flex-1 ">
                    <button className="w-full">Interested</button>
                    <button className="w-full">Going</button>
                </div>
            </div>
        </div>
    )
}

export default HeroSection
