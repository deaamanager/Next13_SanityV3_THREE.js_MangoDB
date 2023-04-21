"use client";

import { Cloud,Sparkles,PerspectiveCamera} from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React, { Suspense } from 'react'
import { motion } from 'framer-motion-3d';
import Saturn from './Saturn';






function ProjectsBackground() {
  return (
    <>
    <Suspense fallback={null}>
    <Canvas shadows >
    <PerspectiveCamera makeDefault fov={50} />
     <ambientLight intensity={0.5} />

     <mesh position={[0,200,-1200]} 
     castShadow receiveShadow
     >
      
     <Saturn />
     </mesh>

     <motion.mesh
     initial={{ z: -500, opacity: 0 }}
      animate={{ z: 0, opacity: 1 }}
      transition={{ duration: 1.5 ,delay:2.0 ,ease: "easeOut" }}
      castShadow receiveShadow
     >
     <Sparkles  count={200} speed={0.5} color="blue" size={5} position={[0, 0, -10]} opacity={0.8} scale={[10,10,10]} noise={[1,1,1]} />
     <Sparkles  count={200} speed={0.5} color="lightorange" size={5} position={[0, 0, -10]} opacity={0.8} scale={[10,10,10]} noise={[1,1,1]} />
     </motion.mesh>

     <motion.mesh
          initial={{ x: 500, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1  ,delay:1.5 ,ease: "easeOut" }}
       
         >
        <Cloud
            position={[0, -10, -12]}
            args={[100, 50, 20]}
            scale={[4, 1.8, 0.2]}
            speed={0.8}
            opacity={0.30}
            color="#4b9ae3"
            
          />
        </motion.mesh>
        <motion.mesh 
        initial={{ x: -500, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1  ,delay:1.5 ,ease: "easeOut" }}
      
        >
          <Cloud
            position={[0, 0, -12]}
            args={[100, 50, 20]}
            scale={[1.8, 1.8, 0.5]}
            speed={0.8}
            opacity={0.1}
            color="#4b9ae3"
          />
        </motion.mesh>
   
        
    </Canvas>
    </Suspense>
    </>
  )
}

export default ProjectsBackground;