"use client";

import React from 'react'
import ExperinceBackground from './ExperinceBackground'
import Skills from './Skills'
import { Skill as skillType } from '../typings'
import { motion } from 'framer-motion'

type Props = {
  skills: skillType[] ;
};


function Experience({skills}: Props) {
  return (
    <div className='relative h-screen w-full flex flex-col justify-center items-center text-white'>
     <ExperinceBackground />
     <motion.div  
     initial={{opacity:0,scale:0.5 }}
     whileInView={{opacity:1, scale:1}}
      transition={{duration:1.7}} 
     className='absolute grid grid-cols-4 gap-4 md:gap-6 '>
      {skills?.slice(0,skills.length/2).map( (skill) => (
        <Skills key={skill._type} skill={skill} />
      ))}
      {skills?.slice(skills.length/2,skills.length).map( (skill) => (
        <Skills key={skill._type}  skill={skill} directionleft />
      ))}
      
     </motion.div>
    </div>
  )
}

export default Experience;