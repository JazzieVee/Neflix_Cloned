import React from 'react';
import { IoIosArrowForward } from "react-icons/io";


function Subscribe() {
  return (
    <div id='subscribeBox' className='flex flex-col items-center gap-5 p-10'>
        <div id='subscribeTxt' className='text-center text-sm'>
            Ready to watch? Enter your email to create or restart your membership.
        </div>
        <div className="mb-2 flex items-center">
                <input id="subscribe" className="pr-65 border p-2.5 mr-2 border-gray-400 rounded text-sm" type="text" placeholder="Email Address" />
                <button id="subscribeBtn" className="bg-red-600 text-[20px] flex items-center font-bold px-6 py-1 rounded z-20">Get Started <br/> <IoIosArrowForward /></button>
                <div></div>

            </div>
    </div>
  )
}

export default Subscribe;