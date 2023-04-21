import '../app/globals.css';
import React from 'react';
import PrivcyHeader from "@/components/PrivcyHeader";
import ContactBackground from "@/components/ContactBackground";
import { motion } from "framer-motion";
import { GlobeAltIcon } from '@heroicons/react/20/solid';

import Link from 'next/link';
function unfand() {
  return (
    <div className='relative h-screen w-full bg-black  flex flex-col justify-center items-center'> 
       <PrivcyHeader />
       < ContactBackground  />
       <motion.div
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2 }}
              viewport={{ once: true }}
              className='grid gap-8 items-end justify-center mt-16 absolute top-32'>
               <Link href="/" >
              <div className=" group ">
               <div className="absolute -inset-0.5   opacity-30 bg-gradient-to-r from-[#4b9ae3] to-[#fff]  rounded-xl blur-xl
                  group-hover:opacity-100 transition duration-1000 group-hover:duration-200 overflow-hidden btnCard"></div>
            
                   <button
                  
                   type='button'
                   className=' relative divide-x divide-gray-600 px-3 py-3 bg-black bg-opacity-80 rounded-xl leading-none flex items-center'>
                    <span className='flex justify-center  items-start '>  
                          <GlobeAltIcon fill="currentColor" className=" text-blue-600  w-6 h-6 pr-1   text-center " />
                    </span>
                       
                   <span className='text-indigo-400 px-3 group-hover:text-gray-100 transition duration-200'> Back to Home page</span>
                   </button>  
              </div>
              </Link>
         </motion.div>

      <footer className='absolute   bottom-0  w-full text-[#e4e8ec] flex flex-col justify-end items-center backdrop-brightness-50 rounded-t-[2rem] shadow-lg shadow-slate-100 '>
         <h1 className='text-[12px] md:text-base lg:text:xl py-5 '>Copyright © 2023 - All right reserved by Deaa Aldin Alawad</h1>
       </footer>
    </div>
  )
}

export default unfand;