"use client";

import React from 'react'
import { motion } from 'framer-motion'
import { Skill } from '../typings'
import  urlFor  from '../lib/urlFor'
import Image from 'next/image';

type Props = {
  skill : Skill;
  directionleft?: boolean;
};

function Skills({skill, directionleft}: Props) {
  return (
    <div className='relative group flex cursor-pointer w-full '>
        <motion.img
          initial={{
            x: directionleft ? -150 : 150,
            opacity: 0
          }}
          transition={{ duration: 1 }}
          whileInView={{ opacity: 1, x: 0 }}
          src={urlFor(skill?.image).url()} alt="deaa"
          className=' rounded-full border w-12 h-12 md:w-14 md:h-14   border-gray-500 object-cover  filter group-hover:grayscale transition duration-300 ease-in-out'  />

         <div className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white md:w-14 md:h-14  w-12 h-12  rounded-full z-0 flex justify-center items-center">
        <div className="flex items-center justify-center h-full">
          <p className="text-md font-bold text-black opacity-100">{skill?.progress}%</p>
        </div>
      </div>

    </div>
  )
}

export default Skills;