"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { PageInfo } from '../typings';
type Props = {
  pageInfo: PageInfo;
}

function AboutDics({pageInfo}: Props) {
  return (
    <motion.div
    initial={{opacity:0 , y:100}}
    whileInView={{opacity:1, y:0}}
    transition={{duration:1.2}}
    viewport={{ once: true }}  
     className='  backdrop-brightness-50 about-box-shadow flex flex-col  items-center rounded-xl w-72 md:w-full h-[28rem] transition space-y-5 md:mr-12 md:mt-32 py-5 px-5 '>
    <h4 className='py-2'><span className='bg-gradient-to-r from-blue-400 via-gray-400 to-purple-400  bg-clip-text  text-transparent text-[19px] md:text-2xl underline decoration-white/50  font-bold'>Here some infos About me</span>{" "}:</h4>    
    <p className='text-sm md:text-lg font-bold text-gray-400  tracking-wide'>{pageInfo?.backgroundInformation} </p>
    </motion.div>
  )
}

export default AboutDics;
