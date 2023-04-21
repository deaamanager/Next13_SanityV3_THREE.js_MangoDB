"use client";

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame,useThree } from '@react-three/fiber';

export default function ContactFlugzeug(props) {
  const { nodes, materials } = useGLTF('/models/flugzeug.glb')
  const ref = useRef();
  const {viewport} = useThree();
  useFrame(() => {
   ref.current.scale.set(0.07,0.07,0.07)
  })

  return (
    <group ref={ref} scale={(viewport.width / 8)} position={[0,0,-1.2]} {...props} dispose={null} castShadow receiveShadow>
      <group position={[0, -2.37, 1.97]} rotation={[-0.41, 0, 0]} scale={[0.68, 0.18, 0.18]}>
        <mesh geometry={nodes.Object_4.geometry} material={materials['Material.004']} />
        <mesh geometry={nodes.Object_5.geometry} material={materials['Material.005']} />
      </group>
      <group position={[0, 11.06, -1.06]} rotation={[-0.22, 0, 0]}>
        <mesh geometry={nodes.Object_7.geometry} material={materials['Material.008']} />
        <mesh geometry={nodes.Object_8.geometry} material={materials['Material.009']} />
        <mesh geometry={nodes.Object_9.geometry} material={materials['Material.009']} />
      </group>
      <group position={[0, 11.06, -1.06]} rotation={[-0.22, 0, 0]}>
        <mesh geometry={nodes.Object_11.geometry} material={materials['Material.007']} />
        <mesh geometry={nodes.Object_12.geometry} material={materials['Material.007']} />
      </group>
      <group position={[0, 11.06, -1.06]} rotation={[-0.22, 0, 0]}>
        <mesh geometry={nodes.Object_14.geometry} material={materials.Material} />
        <mesh geometry={nodes.Object_15.geometry} material={materials.Material} />
        <mesh geometry={nodes.Object_16.geometry} material={materials.Material} />
      </group>
      <group position={[0, 11.06, -1.06]} rotation={[-0.22, 0, 0]}>
        <mesh geometry={nodes.Object_20.geometry} material={materials.Material} />
        <mesh geometry={nodes.Object_21.geometry} material={materials.Material} />
      </group>
      <mesh geometry={nodes.Object_18.geometry} material={materials.Material} position={[0, 3.41, -13.85]} rotation={[-0.22, 0, 0]} scale={[0.21, 0.53, 0.21]} />
    </group>
  )
}

useGLTF.preload('/models/flugzeug.glb');