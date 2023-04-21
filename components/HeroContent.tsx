"use client";

import React from 'react';
import Link from 'next/link';
import { PageInfo } from '../typings';
import  urlFor  from '../lib/urlFor';
import Image from 'next/image';
import { motion } from 'framer-motion';
type Props = {
 pageInfo: PageInfo;
};

function HeroContent({pageInfo}: Props) {
  

  return (
    
   <div className='flex flex-col justify-center items-center'>
     <div className='absolute -top-32 flex flex-col justify-center items-center'>
     <div className='absolute border-[0.3,0.6,1.0,1.0]   -bottom-[7rem] border-8 opacity-20 rounded-full h-[200px]  w-[200px] mt-52 animate-ping  ' />
    <div className='absolute border-[0.3,0.6,1.0,1.0]  border-8  -bottom-36 opacity-20 rounded-full  h-[300px] w-[300px] mt-52 animate-ping ' />
    <motion.div
       initial={{
        opacity: 0,
        z: -200,
        scale: 0.5,
      }}
      transition={{
        duration: 1.2,
      }}
      whileInView={{
        opacity: 1,
        z: 0,
        scale: 1,
      }}
      viewport={{
        once: true,
      }}
     className='absolute -top-[5rem] w-32 '>
  
    <Image
      width={130}
      height={130}
      alt={pageInfo?.name}
      src={urlFor(pageInfo?.heroImage).url()}
      className='rounded-full opacity-80 object-cover'
    />

     
    </motion.div>
    
    
    
    <div className='flex flex-col-reverse  absolute top-[7rem] my-10  md:flex-row lg:flex-row xl:flex-row 2xl:flex-row   items-end  space-x-5'>
      <Link href="#About">
        <button className="link" >About</button>
      </Link>
      <Link href="#Projects">
        <button
          className="link"
        >projects</button>
      </Link>
      <Link href="#Experience">
        <button
          className="link"
        >Skills</button>
      </Link>
      
    </div>

  </div>
   </div>
  )
}

export default HeroContent;