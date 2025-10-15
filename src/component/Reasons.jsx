import { GrMonitor } from "react-icons/gr";
import { MdOutlineDownloading } from "react-icons/md";
import { IoTelescopeOutline } from "react-icons/io5";
import { FaChildren } from "react-icons/fa6";





function Reasons() {
    const reasons = [
        {
            "title": "Enjoy on your TV",
            "para": "Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.",
            "icon": <GrMonitor />
        },
        {
            "title": "Download your shows to watch offline",
            "para": "Save your favorites easily and always have something to watch.",
            "icon": <MdOutlineDownloading />

        },
        {
            "title": "Watch everywhere",
            "para": "Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.",
            "icon": <IoTelescopeOutline />
        },
        {
            "title": "Create profiles for kids",
            "para": "Send kids on adventures with their favorite characters in a space made just for them — free with your membership.",
            "icon": <FaChildren />
        }
    ]
  return (
    <div id="reasonsBox" className='mx-8 py-5'>
        <div id="reasonTop" className='font-bold text-[24px] mb-5'>
            More Reasons to Join
        </div>

        <div id="Reasons" className='flex gap-4'>
            
            {reasons.map((reason, index) => {
                return(
                    <div key={index} className='w-[320px] h-[260px] py-8 px-4 
        bg-gradient-to-br from-blue-950 to-purple-950 
        opacity-80 rounded-2xl relative'>
                <div id="reasonTitle" className='font-bold text-lg my-text-element-too'>
                    {reason.title}
                </div>
                <div id="reasonPara" className='py-6 text-xs text-gray-400 my-text-element'>
                    {reason.para}
                </div>
                <div id="reasonIcon" className='text-6xl right-0 mr-5 bottom-5 absolute opacity-60'>
                    {reason.icon}
                 </div>
            </div>
                )
            })}

        </div>
    </div>
  )
}

export default Reasons;