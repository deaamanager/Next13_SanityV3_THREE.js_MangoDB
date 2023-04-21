import '../app/globals.css';
import ContactBackground from "@/components/ContactBackground";
import PrivcyContent from "@/components/PrivcyContent";
import PrivcyHeader from "@/components/PrivcyHeader";

function Privce() {
  return (
    <div className='relative h-screen w-full bg-black  flex flex-col justify-center items-center'>
         <PrivcyHeader />
        < ContactBackground  />
        <PrivcyContent />
    <footer className='absolute   bottom-0  w-full text-[#e4e8ec] flex flex-col justify-end items-center backdrop-brightness-50 rounded-t-[2rem] shadow-lg shadow-slate-100 '>
         <h1 className='text-[12px] md:text-base lg:text:xl py-5 '>Copyright © 2023 - All right reserved by Deaa Aldin Alawad</h1>
    </footer>
   </div>

  )
}

export default Privce;