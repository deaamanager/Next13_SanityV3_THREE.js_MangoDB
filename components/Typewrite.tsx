"use client";
import React from 'react';
import { useTypewriter ,Cursor } from 'react-simple-typewriter';
import { PageInfo } from "../typings";


type Props = {
 pageInfo: PageInfo;  
};
const Typewrite = ({pageInfo} : Props ) => {
  const [write, conut] = useTypewriter({
    words: [`Hi, The Name's ${pageInfo?.name}`,
      "I'm-a-Full-Stack-3D-Developer",
      "<ReactHeroDeveloper/>",],
    loop: true,
    delaySpeed: 2000,
  });
    
  return <h1 className='font-[900] text-xl  absolute top-[23rem] text-center py-5
  bg-gradient-to-r from-[#428dd4] via-gray-400 to-[#4b9ae3]  bg-clip-text  text-transparent'>
       <span>{write}  </span>
        
       <Cursor  cursorColor='#4b9ae3' />
  </h1>;
  };
 

export default Typewrite;