"use client";

import React from 'react';
import AboutBackground from './AboutBackground';
import AboutDics from './AboutDisc';
import AboutLaptop from './AboutLaptop';
import { PageInfo } from '../typings';

type Props = {
  pageInfo: PageInfo;
}

function About({pageInfo}:Props) {
  return (
    <div className=' relative h-screen w-full  flex-col  text-white flex justify-center items-center'>

     <AboutBackground />

     <div className=' absolute -top-[10rem]  flex  md:flex-row flex-col justify-center items-center h-full w-full my-10 '>
     <AboutLaptop />
     <AboutDics pageInfo={pageInfo} />
     </div>
    </div>
  )
}

export default About;