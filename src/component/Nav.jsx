import netflix_login_background from '../assets/netflix_login_background.jpg';
import { IoIosArrowForward } from "react-icons/io";



const Nav = () => {
  return (
    <> 
       <div className="z-20">
        <div id='navBanner' className="absolute inset-0 bg-cover bg-center opacity-20" style={{backgroundImage: `url(${netflix_login_background})`}}>
        </div>
            <div className='relative z-10'>
                <div className="flex justify-between items-center">
                <div className="text-3xl font-bold text-red-600">
                 NETFLIX CLONED!
                </div>
                <div className="flex">
                    <div>
                        <select className="text-xs pr-10 border p-1 mr-2 border-gray-500 rounded" id="">
                            <option className="text-black" value="English">English</option>
                            <option className="text-black" value="Spanish">Spanish</option>
                        </select>
                    </div>
                  <button className="text-xs bg-red-600 px-5 py-1 rounded">Sign In</button>
                </div>
            </div>
            <div className="py-55 flex flex-col items-center">
            <div className="text-[55px] font-bold w-160 text-center my-text-element">
                Unlimited movies, TV shows, and more            
            </div>
            <div id='navPrice' className="p-5 font-bold text-xl">Starts at $7.99. Cancel anytime.</div>
            <p id="navSubTxt" className="text-[16px] mt-2">Ready to watch? Enter your email to create or restart your membership.</p>
            <div className="m-4 flex items-center">
                <input id='navInput' className="pr-50 border p-3.5 mr-2 border-gray-400 rounded text-lg" type="text" placeholder="Email Address" />
                <button id="navBtn" className="bg-red-600 text-[24px] flex items-center justify-between font-bold px-8 py-3 rounded z-20">Get Started <br/> <IoIosArrowForward /></button>
            </div>
            </div>
            </div>
            </div>
    </>
  )
}


export default Nav; 