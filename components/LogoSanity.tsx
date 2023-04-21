import React from 'react'
import {ArrowUturnLeftIcon  } from '@heroicons/react/24/solid';
import Link from 'next/link'



const LogoSanity =(props:any) => {
  return <div>
   <div className='flex items-center justify-between p-5'>
   <Link href="/" className='flex items-center text-[#ffbf00]  '>
    <ArrowUturnLeftIcon  className='h-5 w-5 mr-2 text-[#ffbf00]' />
      <h1>Go To Website</h1>
        
    </Link>
   </div>
    <>{props.renderDefault(props)} </>
       </div>
  
}

export default LogoSanity;