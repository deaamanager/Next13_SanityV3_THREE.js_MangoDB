"use client";
import React, { useRef } from 'react'
import {   useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { motion } from 'framer-motion-3d'



export default function Robot(props) {
 
  const { nodes, materials } = useGLTF('/models/deaa.glb')
  const group = useRef()
  useFrame(() => (group.current.rotation.y += 0.01
    ))
  return (
    <motion.group
    
    initial={{ z: -500, opacity: 0 }}
    animate={{ z: 0, opacity: 1 }}
    transition={{ duration: 2  ,delay:0.5 ,ease: "easeOut" }}
    scale={[3,3,3]} position={[0,2.5,0]} rotation={[0.5,0,0]} {...props} ref={group} dispose={null}
    castShadow receiveShadow
    >
      <mesh  geometry={nodes.model.geometry} material={materials.material_0} rotation={[Math.PI / 2, 0, 0]} />
     
    </motion.group>
  )
}

useGLTF.preload('/models/deaa.glb');