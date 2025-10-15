import React, { useState } from 'react';
import { BsPlusLg } from "react-icons/bs";


function FAQ() {
        const [activeIndex, setActiveIndex] = useState(null) 
        const toggleAnswer = (index) => {
            setActiveIndex((prevIndex) =>(prevIndex === index ? null : index))
        }
    const questionAns = [
        {   
            question: "What is Netflix?",
            answer: ["Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.", <br key="space2" />,
            <br key="space1" />, "You can watch as much as you want, whenever you want – all for one low monthly price. There's always something new to discover and new TV shows and movies are added every week!"],
        },
        {   
            question: "How much does Netflix cost?",
            answer: "Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from $7.99 to $24.99 a month (pre-tax). No extra costs, no contracts."
        },
         {
            question: "Where can I watch?",
            answer: ["Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.", <br key="space4" />,
            <br key="space5"/>, "You can also download your favorite shows with the iOS or Android app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere."]
        },
         {
            question: "How do I cancel?",
            answer: "Netflix is flexible. There are no pesky contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime."
        },
        {
            question: "What can I watch on Netflix?",
            answer: "Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want."
        },
        {
            question: "Is Netflix good for kids?",
            answer: ["The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and movies in their own space.", <br key="space3" />, 
                <br key="space4" />, "Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see."]
        },
    ];

  return (
    <div id='faqBox' className='mx-10 pt-5'>
        <div id='faqTitle' className='font-bold text-[24px] my-5'>Frequently Asked Questions</div>
         {questionAns.map((item, index) => {
            return(
             <div key={index} className='hover-facts opacity-70'>
          <div id='question' onClick={() => toggleAnswer(index)} className='text-xl cursor-pointer bg-gray-700 p-3 flex justify-between items-center px-6'>
            <div id='questionFont' >{item.question}</div>
          <div id='plus' className='text-4xl'>
            {activeIndex === index? <BsPlusLg style={{transform: 'rotate(45deg)',}}/> : <BsPlusLg /> }
          </div>
          </div>
          <div id='answer' className={`bg-gray-700 my-1 overflow-hidden ${activeIndex === index ? "max-h-[500px]" : "max-h-0"} duration-500`}>
           <div className='p-5'>{item.answer} </div>
          </div>
          </div>
            )
         })}
    </div>
  )
}

export default FAQ;