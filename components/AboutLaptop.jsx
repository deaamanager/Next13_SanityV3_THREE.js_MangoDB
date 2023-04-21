"use client";

import React, { Suspense, useRef,useState } from 'react'
import { Html, useGLTF } from '@react-three/drei'
import { motion } from 'framer-motion-3d';
import { useFrame, Canvas, useThree } from '@react-three/fiber';



function Laptop(props,Open) {
    // import laptop
    const { nodes, materials } = useGLTF('/models/dealap.glb');
    // react button hook
    const [open, setOpen] = useState(true);
    //console.log(open);
    // react ref
    const ref = useRef();
    
    // motion for display laptop
    const variantMotion = {
      opened: {rotateX :-0.11 },        
      closed: {rotateX: 1.61},         
    };
    useFrame(() => {
      ref.current.rotation.y += 0.003;
      ref.current.scale.set(0.8, 0.8, 0.8);
      ref.current.position.set(-0.3, -0.7, -0.9);
      
      
      });
    
  
    return ( 
      <group
      rotation={[0.1, 0.8, 0]}
      ref={ref} {...props} dispose={null} 
      castShadow receiveShadow
      > 
        <mesh geometry={nodes.Plane.geometry} material={materials['body metal']} />
        <mesh geometry={nodes.Plane005.geometry} material={materials['total black']} />
        <motion.group 
           initial={"opened"}
           animate={open ? "opened" : "closed"}
           variants={variantMotion}
           transition={{duration: 1,delay: 0.5}}
           ref={ref} 
           position={[0, 0.11, -0.7]} >
          <mesh geometry={nodes.Plane007.geometry} material={materials.plastichead} />
          <mesh geometry={nodes.Plane007_1.geometry} material={materials['display primary']} />
          <mesh geometry={nodes.Plane007_2.geometry} material={materials['rog logo']} />
          <mesh geometry={nodes.Plane007_3.geometry} material={materials['Material.001']} />
        </motion.group>
        <mesh geometry={nodes.Plane010.geometry} material={materials['total black']} />
        <mesh geometry={nodes.Plane012.geometry} material={materials['body metal']} />
        <mesh geometry={nodes.Plane014.geometry} material={materials['body metal']} />
        <mesh geometry={nodes.Plane017.geometry} material={materials['body metal']} />
        <mesh geometry={nodes.Plane018.geometry} material={materials['body metal']} />
        <mesh geometry={nodes.rog.geometry} material={materials['rog logo']} />
        <mesh geometry={nodes.Plane020.geometry} material={materials.key} />
        <mesh geometry={nodes.Plane022.geometry} material={materials.key} />
        <mesh geometry={nodes.Plane021.geometry} material={materials.key} />
        <mesh geometry={nodes.Plane023.geometry} material={materials.key} />
        <mesh geometry={nodes.Plane024.geometry} material={materials.key} />
        <mesh geometry={nodes.Plane025.geometry} material={materials.key} />
        <mesh geometry={nodes.Plane026.geometry} material={materials.key} />
        <group position={[0, 0.11, -0.7]} rotation={[-0.05, 0, 0]}>
          <mesh geometry={nodes.Plane036.geometry} material={materials.rgb} />
          <mesh geometry={nodes.Plane036_1.geometry} material={materials['key f']} />
        </group>
        <mesh geometry={nodes.Plane031.geometry} material={materials.key} />
        <mesh geometry={nodes['rog-zephyrus-duo-se-15-ryzen-9-rtx-3080-gaming-laptop-1000px-v1'].geometry} material={materials['display blank']} />
        <mesh geometry={nodes.numpad.geometry} material={materials.numpad} />
        <mesh geometry={nodes.Plane035.geometry} material={materials['plastic black']} />
        <group rotation={[-0.24, 0, 0]}>
          <mesh geometry={nodes.Plane031_1.geometry} material={materials['body metal']} />
          <mesh geometry={nodes.Plane031_2.geometry} material={materials.panel} />
          <mesh geometry={nodes.Plane031_3.geometry} material={materials.Material} />
        </group>
        <mesh geometry={nodes.Plane002_1.geometry} material={materials['body metal']} />
        <mesh geometry={nodes.Plane002_2.geometry} material={materials['some blacc']} />
        <mesh geometry={nodes.Plane005_1.geometry} material={materials['body metal']} />
        <mesh geometry={nodes.Plane005_2.geometry} material={materials['some blacc']} />
        <mesh geometry={nodes.Plane009.geometry} material={materials['body metal']} />
        <mesh geometry={nodes.Plane009_1.geometry} material={materials['some blacc']} />
        <mesh geometry={nodes.Plane035_1.geometry} material={materials.metal} />
        <mesh geometry={nodes.Plane035_2.geometry} material={materials['plastic black']} />
        <mesh geometry={nodes.Plane035_3.geometry} material={materials.yellow} />
        <mesh geometry={nodes.Plane035_4.geometry} material={materials['total black']} />
        <mesh geometry={nodes.Plane045.geometry} material={materials.metal} />
        <mesh geometry={nodes.Plane045_1.geometry} material={materials['total black']} />
        <mesh geometry={nodes.Plane045_2.geometry} material={materials.yellow} />
        <mesh geometry={nodes.Plane045_3.geometry} material={materials['plastic black']} />
        <mesh geometry={nodes.Plane048.geometry} material={materials.metal} />
        <mesh geometry={nodes.Plane048_1.geometry} material={materials['total black']} />
        <mesh geometry={nodes.Plane048_2.geometry} material={materials['plastic black']} />
        <Html center>
          <button
          onClick={() => setOpen(!open)}
          className=' absolute -bottom-[5rem] -left-5 text-white backdrop-blur-sm w-12 h-8 rounded-full text-sm border-gray-400 border-dashed border-2 border-opacity-70 animate-bounce'>{open ? "Close" : "Open"}</button>
        </Html>
      </group>
    )
  }
  
  useGLTF.preload('/models/dealap.glb')



function Laptophandel(){
    const {viewport} = useThree();
 return (
    <>
     <mesh scale={viewport.width / 3}
     castShadow receiveShadow>
          <Laptop Open />
    </mesh>
    </>
 )
}





function AboutLaptop() {
   
  return (

    <Suspense fallback={null}>
   <Canvas shadows >
   <ambientLight intensity={0.5} />
   <pointLight position={[10, 10, 10]} color="red" />
   <pointLight position={[-10, 10, 10]} color="blue" />
   
   
     <Laptophandel />
   </Canvas>
   </Suspense>
 
  )
}

export default AboutLaptop;