"use client";

import { AnimatePresence } from "framer-motion";
import React,{useState} from "react";
import { useForm } from "react-hook-form";
import { useTypewriter ,Cursor } from 'react-simple-typewriter';
import DropContact from "./DropContact";
import { useRouter } from 'next/navigation';
import Link from "next/link";
type ContactFields = {
    [key: string]: string | boolean | undefined,
    name:string|undefined,
    email: string| undefined,
    message: string|undefined,
    checkbox: boolean|undefined
  }

export default function ContactForm() {
    // typewriter effect
    const [write , conut ] = useTypewriter({
        words: ['Contact me Now !'],
        loop: true,
        delaySpeed: 2000,
    });

    /// router with Click-function

    const router = useRouter();

   
    const handleClick = (e : any) => {
        e.preventDefault()

        router.push('/Privce');
    }


    // react-hook-form
    const { register, handleSubmit, formState: { errors } } = useForm();

    // initial state
    const initialContactState: ContactFields ={
        name:"",
        email:"",
        message:"",
        checkbox:false
     }
     // state privacy policy click
     

     // state for data form
     const [dataSend, setDataSend] = useState<ContactFields>(initialContactState);
     const[status, setStatus] = useState<Boolean>(false);
     const[success, setSuccess] = useState<Boolean>(false);
     const [drop, setDrop] = useState<Boolean>(false);
     const[result, setResult] = useState("");
    
        // submit function
        const onSubmit = async (e:any ) => {
            // set data to state
            setStatus(true);

            // send data to MongoDB
          const res = await fetch("/api/contact", {
                method:"POST",
                body: JSON.stringify(dataSend)
            });

            // data validation
            const delay = (ms:number) => new Promise(
                resolve => setTimeout(resolve, ms)
              );

            // get response from MongoDB
            const data = await res.json();
            setResult(data.message);
            setSuccess(true);
            setDrop(true);
            setStatus(false);
            setDataSend(initialContactState);

            // delay seconds
            await delay(7000);

            // set success to false
            setSuccess(false);
           
        }
    return (

        <div>
          

        <AnimatePresence
         initial={false}
              //exitBeforeEnter={true}
          onExitComplete={() => null}
         >
            {drop && <DropContact handelClose={() => setDrop(!drop)} />}
        </AnimatePresence>
            <h1 className="text-center pb-5 tracking-wider text-xl font-[900]
              bg-gradient-to-r from-[#428dd4] via-gray-400 to-[#4b9ae3]  bg-clip-text  text-transparent">
                <span>{write}</span>
                <Cursor cursorColor='#4b9ae3' />
            </h1>
     
        <div className="w-full mt-8 lg:m-0 backdrop-brightness-50 rounded-2xl p-8">
        <form onSubmit={handleSubmit(onSubmit)}
        className="w-full flex flex-col text-white text-sm font-semibold space-y-3">
            {/*Nmae faild */}
            <input className="text-white bg-gray-800 opacity-30 md:text-xl border-b py-3 border-[#4b9ae3] outline-none"
             value={dataSend.name}   type="text" placeholder="Name" {...register("name", { required: true })} 
             onChange={(e)=> setDataSend((prevData) => ({...prevData, name:e.target.value}))}
             />
            {errors.name && <span className="mx-6 my-2 text-pink-500 text-sm">please write your fullname</span>}

            {/*Email faild */}
            <input className="'text-white bg-gray-800 opacity-30 md:text-xl border-b py-3 border-[#4b9ae3] outline-none"
             value={dataSend.email}  type="email" placeholder="Email" {...register("email", { required: true,  pattern: /\S+@\S+\.\S+/ })} 
             onChange={(e)=> setDataSend((prevData) => ({...prevData, email:e.target.value}))}
             />
            {errors.email && <span className="mx-6 my-2 text-pink-500 text-sm">please write a valid email</span>}
          
            {/*message faild */}
            <textarea className="text-white bg-gray-800 opacity-30 md:text-xl border-b py-3 border-[#4b9ae3] outline-none"
             value={dataSend.message}  placeholder="Message" {...register("message", { required: true })} 
             onChange={(e)=> setDataSend((prevData) => ({...prevData, message:e.target.value}))}
             />
            {errors.message && <span className="mx-6 my-2 text-pink-500 text-sm">please write your message</span>}
            
            {/*checkbox faild */}
           <div className="flex flex-row space-x-2 py-[18px] ">
           <input 
             checked={dataSend.checkbox} type="checkbox" {...register("checkbox", { required: true })}
              onChange={(e)=> setDataSend((prevData) => ({...prevData, checkbox:e.target.checked}))}
             />
            <label className="text-white text-sm font-semibold">I agree to the <button type="button" onClick={handleClick} className="text-[#4b9ae3]/40 font-[800] cursor-pointer hover:text-[#4b9ae3]">privacy policy</button></label>
           </div>
           {errors.checkbox && <span className="mx-3 pb-4  text-pink-500 text-sm ">please agree to the privacy policy</span>}
           
            
            {/*submit button */}
            <button  className="link " type="submit">Submit</button>

            {/*status */}
            {status && <div className='my-8 text-center md:text-xl text-white transition ease-in-out duration-300'>Sending....</div>}
           
            {/*success */}
            {success && <div className={`${success ?"text-sky-500":"text-pink-500"} my-8 text-center md:text-xl`}>{result}</div>}
            {/*drop component  */}
           
                </form>
               
        </div>
    
        </div>
    )
}