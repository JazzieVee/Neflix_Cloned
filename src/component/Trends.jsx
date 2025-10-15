import popcornImg from '../assets/popcornImg.jpg';
import trend1 from '../assets/trend1.webp';
import trend2 from '../assets/trend2.webp';
import trend3 from '../assets/trend3.webp';
import trend4 from '../assets/trend4.webp';
import trend5 from '../assets/trend5.webp';
import trend6 from '../assets/trend6.webp';
import trend7 from '../assets/trend7.webp';
import trend8 from '../assets/trend8.webp';
import trend9 from '../assets/trend9.webp';
import trend10 from '../assets/trend10.webp';

 function Trends() {
    const movies = [
        {
            "id":1,
            "url":trend1
        },
         {
            "id":2,
            "url":trend2
        },
         {
            "id":3,
            "url":trend3
        },
         {
            "id":4,
            "url":trend4
        },
         {
            "id":5,
            "url":trend5
        },
         {
            "id":6,
            "url":trend6
        },
         {
            "id":7,
            "url":trend7
        },
         {
            "id":8,
            "url":trend8
        },
         {
            "id":9,
            "url":trend9
        },
         {
            "id":10,
            "url":trend10
        },
    ]
  return (
    <>
    <div className='bg-black text-white'>
      <div className='flex items-center justify-center hover-button py-8 opacity-60'>
        <img src={popcornImg} alt="" className='w-25 rounded-4xl relative' />
        <div id="popcornBox" className='z-0 flex justify-between w-[90%] bg-gradient-to-r from-blue-950 to-purple-950 rounded-2xl'>
            <div id='popcornTxt' className='flex flex-col text-white justify-center ml-8'>
            <p className='text-xl font-bold my-text-element-too'>The Netflix you love for just $7.99.</p>
            <p className='text-md'>Get our most affordable, ad-supported plan.</p>
            </div>
            <div id='learnMore' className='flex justify-center bg-gray-600 text-white m-5 mr-8 px-4 py-1 rounded'>
                <button className='font-bold text-lg'>Learn More</button>
            </div>
        </div>
      </div>
     
        <div id='trend' className='my-10 mx-10'>
             <div id='trendTitle' className='font-bold text-[24px] mb-4'>Trending Now</div>
              <div id='trendMovie' className='flex gap-10 overflow-x-scroll hide-scrollbar px-8'>
                {movies.map((movie, index) => {
                    return(
            <div key={index} className='pt-2 relative overflow-y-clip'> 
                <img className="rounded-xl min-w-[180px]"  src={movie.url} 
                alt="" />
                <div id='number' className='absolute bottom-0 left-[-25px] text-stroke-white text-9xl 
                font-bold'>
                    {movie.id}
                </div>
             </div> 
                    )
                })}
              
             </div>
          </div>
      </div>
    
    
     
    </>
  )
}

export default Trends;