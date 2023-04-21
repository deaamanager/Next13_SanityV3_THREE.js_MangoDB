"use client";
import { motion } from "framer-motion";
import { CheckBadgeIcon } from "@heroicons/react/24/outline";


const Nackdrop = ({ children, onClick }) => {


    return (
    <motion.div
     initial={{ opacity: 0 }}
     animate={{ opacity: 1 }}
     exit={{ opacity: 0 }}
     className=" relative top-12 flex flex-col items-center rounded-xl bg-black opacity-80 h-full w-full z-10  "
     onClick={onClick}
    >
       {children}

    </motion.div>
    );
};




const dropIn = {
    hidden: {
      y: "-100vh",
      opacity: 0,
    },
    visible: {
      y: "0",
      opacity: 1,
      transition: {
        duration: 0.1,
        type: "spring",
        damping: 25,
        stiffness: 500,
      },
    },
    exit: {
      y: "100vh",
      opacity: 0,
    },
  };

const DropContact  = ({ handelClose }) => {

    
    return (
      <Nackdrop onClick={handelClose}>
        <motion.div
          variants={dropIn}
          initial="hidden"
          animate="visible"
          exit="exit"
          ocClick={(e) => e.stopPropagation()}
          className="  bg-black/40   rounded-xl flex flex-col items-center justify-center  w-full z-20 gap-y-5 "
        >
          <div className="flex flex-row justify-center items-center gap-x-5  ">
          
         
          <motion.div
           initial={{
            z: -500,
            opacity: 0,
            scale: 0.5,
          }}
          animate={{
            z: 0,
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 1.5,
          }}
          className="bg-gradient-to-r from-green-800 via-gray-400 to-green-400  bg-clip-text  text-transparent text-base font-bold pt-10"
          >
            Thank you for your message
          </motion.div>

          <motion.div
           initial={{
            z:-500,
            opacity: 0,
            scale: 0.5,
          }}
          animate={{
            z: 0,
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 1.5,
          }}
          >
           <CheckBadgeIcon className="h-8 w-8 text-green-500 " />
          </motion.div>
          </div>
  
          <motion.h1
            initial="hidden"
            animate="visible"
            className="text-gray-400 text-base  py-5 "
          >
            Click in the Box to Close
          </motion.h1>
        </motion.div>
      </Nackdrop>
    );
  };

  export default DropContact;