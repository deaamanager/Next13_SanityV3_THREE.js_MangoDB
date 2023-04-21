"use client";


import {  motion } from "framer-motion";
import { SocialIcon } from "react-social-icons";


function PrivcyHeader() {
  return (
    <motion.div
    initial={{ opacity: 0, scale: 0.5 }}
    whileInView={{ opacity: 1, scale: 1 }}
    transition={{ duration: 15, delay: 1, ease: 'easeInOut' }}
    className=' flex flex-row absolute top-0 z-20 py-14 '>

   

         <SocialIcon
              className='mx-2 '
              
              url="https://github.com/deaamanger"
              fgColor="gray"
              bgColor="transparent"
         />

         <SocialIcon
              className='mx-2 '
              
              url="https://api.whatsapp.com/send/?phone=491630299378&text&type=phone_number&app_absent=0"
              fgColor="gray"
              bgColor="transparent"
         />
           <SocialIcon
              className='mx-2 '
              
              url="https://www.facebook.com/profile.php?id=100078049085080"
              fgColor="gray"
              bgColor="transparent"
         />
           <SocialIcon
              className='mx-2 '
              
              url="https://www.linkedin.com/in/deaa-aldin-8a706a257/"
              fgColor="gray"
              bgColor="transparent"
         />

</motion.div>

  )
}

export default PrivcyHeader