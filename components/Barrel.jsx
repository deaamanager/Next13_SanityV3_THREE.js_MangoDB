"use client";
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame, useThree } from '@react-three/fiber'

export default function Barrel(props) {
  const { nodes, materials } = useGLTF('/models/barrel.glb')
  const group = useRef();
   const {viewport} = useThree();
  useFrame(() => {
     group.current.position.set(-2.9, 0.5, 0)
     group.current.scale.set(0.4, 0.4, 0.4)
      }
      )
  return (
    <group scale={(viewport.width / 8)} ref={group} {...props} dispose={null} castShadow receiveShadow>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={0.01}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <mesh geometry={nodes.defaultMaterial.geometry} material={materials.ZenUV_Generic_Material_001} position={[65.9, -13.51, 157.17]} rotation={[-Math.PI / 2, 0, 0]} scale={[63.69, 63.69, 96.79]} />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/models/barrel.glb');