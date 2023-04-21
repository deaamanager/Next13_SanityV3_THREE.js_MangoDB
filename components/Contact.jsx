"use client";

import React from 'react';
import ContactBackground from './ContactBackground';
import ContactForm from './ContactForm';

function Contact() {
  return (
    <div className='relative h-screen w-full  flex flex-col justify-center items-center '>
    <ContactBackground />
      <div className='absolute text-white '>
      <ContactForm />
      </div>
      <footer className='absolute w-full text-[#e4e8ec]   bottom-0 flex flex-col justify-center items-center backdrop-brightness-50 rounded-t-[2rem] shadow-lg shadow-slate-100 '>
       
      
       <h1 className='text-[12px] md:text-base lg:text:xl py-5 '>Copyright © 2023 - All right reserved by Deaa Aldin Alawad</h1>
      
     
   </footer>
      </div>
  )
}

export default Contact;