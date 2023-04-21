"use client";

import React from 'react'
import {  motion } from "framer-motion";
import { SocialIcon } from "react-social-icons";
import { useRouter } from 'next/navigation';
import { useTypewriter,Cursor } from 'react-simple-typewriter';
import { GlobeAltIcon } from '@heroicons/react/24/solid';



function PrivcyContent() {

    const [write, conut] = useTypewriter({
        words: ['Privacy Policy'],
        loop: true,
        delaySpeed: 2000,
      });

    const router = useRouter();
    const handleClick = () => {
        router.push('/');
    }
  return (
    <div className='absolute flex flex-col justify-center items-center  text-white  '>

    <motion.div
         initial={{ opacity: 0, y: 100 }}
         whileInView={{ opacity: 1, y: 0 }}
         transition={{ duration: 1.2 }}
         viewport={{ once: true }}
         className='backdrop-brightness-50 about-box-shadow flex flex-col items-center rounded-xl
           w-[22rem] md:w-[29rem] lg:w-[40rem] h-full transition space-y-5 px-5'>
           <h1 className='pt-5 bg-gradient-to-r from-[#428dd4] via-gray-400 to-[#4b9ae3]  bg-clip-text  text-transparent font-[900]'>
            <span>{write}</span> :
            <Cursor  cursorColor='#4b9ae3' />
           </h1>
         <p className='text-[15px] md:text-lg py-5 font-bold tracking-wide text-gray-200'>Thank you for considering sharing your data with MongoDB Atlas.
          My privacy policy is straightforward and designed to protect your personal information.
          I will not share your personal information with third parties without your consent, except as required by law.
          I take reasonable steps to ensure the security of your personal information and protect it from unauthorized access, use, or disclosure.
          By submitting your data to MongoDB Atlas, you agree to my privacy policy.
          If you have any questions or concerns, please contact me at social media or via email.</p>

          <p className='text-rigt pb-3 font-[800] text-blue-300'>Deaa Aldin Alawad</p>
    </motion.div>

         <motion.div
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2 }}
              viewport={{ once: true }}
              className='grid gap-8 items-end justify-center mt-16'>
               
              <div className="relative group ">
               <div className="absolute -inset-0.5   opacity-75 bg-gradient-to-r from-[#4b9ae3] to-[#fff]  rounded-xl blur-xl
                  group-hover:opacity-100 transition duration-1000 group-hover:duration-200 overflow-hidden btnCard"></div>
            
                   <button
                  onClick={handleClick}
                   type='button'
                   className=' relative divide-x divide-gray-600 px-3 py-3 bg-black rounded-xl leading-none flex items-center'>

                    <span className='flex justify-center  items-start '>  
                          <GlobeAltIcon fill="currentColor" className=" text-blue-600 w-6 h-6 pr-1 text-center " />
                        </span>
                   <span className='text-indigo-400 px-3 group-hover:text-gray-100 transition duration-200'> Back to Contact page</span>
                   </button>  
             

              </div>
            
         </motion.div>

</div>
  )
}

export default PrivcyContent