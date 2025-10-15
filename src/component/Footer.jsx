import { HiLanguage } from "react-icons/hi2";


function Footer() {
  return (
    <div id="footerRow" className='text-[16px] p-10 text-gray-400'>
        <div id="contactNum" className='mb-10'>Questions? Call <span className='underline cursor-pointer'>1-866-952-4456</span></div>
        <div id="footerLinks" className='flex justify-between underline'>
            <div>
            <ul className='text-xs'>
                <li>FAQ</li>
                <li>Media Center</li>
                <li>Redeem Gift Cards</li>
                <li>Privacy</li>
                <li>Speed Test</li>
                <li>Ad Choices</li>
            </ul>
            </div>
            <div>
            <ul className='text-xs'>
                <li>Help Center</li>
                <li>Investor Relations</li>
                <li>Buy Gift Cards</li>
                <li>Cookie Preferences</li>
                <li>Legal Notices</li>
            </ul>
            </div>
            <div>
            <ul id="lastLink" className='text-xs'>
                <li>Account</li>
                <li>Jobs</li>
                <li>Ways to Watch</li>
                <li>Corporate Information</li>
                <li>Only on Netflix</li>
            </ul>
            </div>
            <div>
            <ul id="lastLink" className='text-xs'>
                <li>Netflix House</li>
                <li>Netflix Shop</li>
                <li>Terms of Use</li>
                <li>Contact Us</li>
                <li>Do No Sell or Share My Personal Information</li>
            </ul>
            </div>
        </div>
        <select className="text-xs pr-10 border p-1 mr-2 mt-15 border-white rounded">
                            <option className="text-black" value="English">English</option>
                            <option className="text-black" value="Spanish">Spanish</option>
        </select>
        <div id="captcha" className='text-xs my-10 flex gap-1'>
            This page is protected by Google reCAPTCHA to ensure you're not a bot. <br/>  <div id="span" className='text-blue-600 underline cursor-pointer'>Learn more.</div>
        </div>
    </div>
  )
}

export default Footer