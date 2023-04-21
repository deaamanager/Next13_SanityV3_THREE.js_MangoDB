"use client";

import React from 'react';
import ProjectsBackground from './ProjectsBackground';
import Image from 'next/image';
import { Project } from '../typings';
import  urlFor  from '../lib/urlFor';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { GlobeAltIcon } from '@heroicons/react/24/solid';





type Props = {
  projects: Project[];
}






function SliderCard({projects}: Props) {
  const [selectedCardIndex, setSelectedCardIndex] = React.useState(0);

  const handlePrevClick = () => {
   
      
      setSelectedCardIndex( selectedCardIndex === 0 ? projects.length - 1 : selectedCardIndex - 1);
      
    
  };

  const handleNextClick = () => {
    
   setSelectedCardIndex((selectedCardIndex + 1) % projects.length );
   
    
  };

  return (
    <div className='overflow-y-hidden overflow-x-scroll items-center  snap-x snap-mandatory  touch-pan-x z-20 ' >
    <div
        className="flex transition-all ease-out duration-300   "
        style={{ transform: `translateX(-${selectedCardIndex * 100}%)` }}  
       >
        {projects?.map((project, i) => (
          <div
            key={project?._type}
            className=" w-screen snap-start  px-8 my-24  flex-shrink-0 flex items-center justify-center flex-col space-y-5 "
           >
            {/*w-screen flex-shrink-0 snap-center' p-20 md:-p44 h-screen */}
            <motion.div
            initial={{
              y: -200,
              opacity: 0,
            }}
              transition={{ duration: 1, }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >  
            <Image 
            src={urlFor(project?.image).url()}
            width={200}
            height={200}
            alt="My projects"
            className="h-32 mt-2"   />
            </motion.div>
            
            <div className='space-y-5 px-0 md:px-10 max-w-6xl flex flex-col justify-center items-center'>
             <h2 className="text-3xl font-semibold text-gray-400" ><span>{project?.title}</span></h2>
             <div className='flex items-center justify-center space-x-4'> 
             {project?.technologies?.map((technolgy)=>(
               <Image
               height={35}
               width={35}
               key={technolgy._id}
               src={urlFor(technolgy?.image).url()}
               alt={technolgy?.title}
               className='rounded-full object-cover hover:scale-[1.5] transition-transform duration-150 ease-out cursor-pointer '
               />
               ))}
              </div>     

              <p className="text-gray-500 text-left font-bold">{project?.summary}</p>   
            </div> 
             
             <Link href={(project?.linkToBuild).toString()}
             >
             
             <div className='grid gap-8 items-end justify-center pt-16'>
               <div className="relative group ">
                 <div className="absolute -inset-0.5   opacity-75 bg-gradient-to-r from-[#4b9ae3] to-[#fff]  rounded-xl blur-xl
                    group-hover:opacity-100 transition duration-1000 group-hover:duration-200 overflow-hidden btnCard"></div>

                 <button className=' relative divide-x divide-gray-600 px-4 py-4 bg-black rounded-xl leading-none flex items-center'>
                   <span className='flex justify-center  items-start '>  
                     <GlobeAltIcon fill="currentColor" className=" text-blue-600  w-6 h-6 pr-1   text-center " />
                   </span>
                   <span className='text-gray-100 px-2  '>Go Live To Project</span>
                   <span className='text-indigo-400 px-3 group-hover:text-gray-100 transition duration-200'>See Whats new</span>
                 </button>

               </div>
               </div>     
             </Link>
             
          </div>
        ))}
      </div>
      {(selectedCardIndex && projects.length) > 0 && (
        <button
          className="absolute z-40  left-10 bottom-5 transform opacity-50 -translate-y-1/2 bg-[#4b9ae3]/50 hover:bg-[#4b9ae3]/80 text-white px-4 py-2 rounded-full focus:outline-none"
          onClick={handlePrevClick}
        >
          Previous
        </button>
      )}
      {(selectedCardIndex && projects.length ) - 1 && (
        <button
          className="absolute z-40 right-10 bottom-5 transform opacity-50 -translate-y-1/2 bg-[#4b9ae3]/50 hover:bg-[#4b9ae3]/80 text-white px-4 py-2 rounded-full focus:outline-none"
          onClick={handleNextClick}
        >
         <span className='z-10'> Next</span>
        </button>
      )}
     
    </div>
  
  );
}






function Projects({ projects}: Props) {
 
  return (
    <div className='relative h-screen w-full bg-black flex flex-col justify-center items-center'>
      <ProjectsBackground />

      <div className='absolute top-[8rem]  w-full flex '>
        {/*absolute top-[10rem] */}
       <SliderCard projects={projects} />
      </div>

    </div>
  )
}

export default Projects;