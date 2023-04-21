"use client";

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame} from '@react-three/fiber'

export default function Saturn(props) {
  const { nodes, materials } = useGLTF('/models/saturn.glb');
  const group = useRef();
 
  useFrame(() => (group.current.rotation.y += 0.01,
    group.current.scale.set(0.3, 0.3, 0.3)))
 
  return (
    <group ref={group} {...props} dispose={null}  rotation={[0,0,-0.3]} castShadow receiveShadow >
     
      <group scale={0.01}>
        <group rotation={[-1.23, -0.32, 0.84]}>
          <mesh geometry={nodes['0'].geometry} material={materials.saturn1_A} />
          <mesh geometry={nodes.Saturn2_A_saturn2_A_0.geometry} material={materials.saturn2_A} />
          <mesh geometry={nodes.Saturn2_A_saturn2_A_0_1.geometry} material={materials.saturn2_A} />
          <mesh geometry={nodes.Saturn2_A_saturn2_A_0_2.geometry} material={materials.saturn2_A} />
          <mesh geometry={nodes.Saturn2_A_saturn2_A_0_3.geometry} material={materials.saturn2_A} />
          <mesh geometry={nodes.Saturn2_A_saturn2_A_0_4.geometry} material={materials.saturn2_A} />
          <mesh geometry={nodes.Saturn2_A_saturn2_A_0_5.geometry} material={materials.saturn2_A} />
          <mesh geometry={nodes.Saturn2_A_saturn2_A_0_6.geometry} material={materials.saturn2_A} />
          <mesh geometry={nodes.Saturn2_A_saturn2_A_0_7.geometry} material={materials.saturn2_A} />
          <mesh geometry={nodes.Saturn2_A_saturn2_A_0_8.geometry} material={materials.saturn2_A} />
          <mesh geometry={nodes.Saturn2_A_saturn2_A_0_9.geometry} material={materials.saturn2_A} />
          <mesh geometry={nodes.Saturn2_A_saturn2_A_0_10.geometry} material={materials.saturn2_A} />
          <mesh geometry={nodes.Saturn2_A_saturn2_A_0_11.geometry} material={materials.saturn2_A} />
          <mesh geometry={nodes.Saturn2_A_saturn2_A_0_12.geometry} material={materials.saturn2_A} />
          <mesh geometry={nodes.Saturn2_A_saturn2_A_0_13.geometry} material={materials.saturn2_A} />
          <mesh geometry={nodes.Saturn2_A_saturn2_A_0_14.geometry} material={materials.saturn2_A} />
          <mesh geometry={nodes.Saturn2_A_saturn2_A_0_15.geometry} material={materials.saturn2_A} />
          <mesh geometry={nodes.Saturn2_A_saturn2_A_0_16.geometry} material={materials.saturn2_A} />
          <mesh geometry={nodes.Saturn2_A_saturn2_A_0_17.geometry} material={materials.saturn2_A} />
          <mesh geometry={nodes.Saturn2_A_saturn2_A_0_18.geometry} material={materials.saturn2_A} />
          <mesh geometry={nodes.Saturn2_A_saturn2_A_0_19.geometry} material={materials.saturn2_A} />
          <mesh geometry={nodes.Saturn2_A_saturn2_A_0_20.geometry} material={materials.saturn2_A} />
          <mesh geometry={nodes.Saturn2_A_saturn2_A_0_21.geometry} material={materials.saturn2_A} />
          <mesh geometry={nodes.Saturn2_A_saturn2_A_0_22.geometry} material={materials.saturn2_A} />
          <mesh geometry={nodes.Saturn2_A_saturn2_A_0_23.geometry} material={materials.saturn2_A} />
          <mesh geometry={nodes.Saturn2_A_saturn2_A_0_24.geometry} material={materials.saturn2_A} />
          <mesh geometry={nodes.Saturn2_A_saturn2_A_0_25.geometry} material={materials.saturn2_A} />
          <mesh geometry={nodes.Saturn2_A_saturn2_A_0_26.geometry} material={materials.saturn2_A} />
          <mesh geometry={nodes.Saturn2_A_saturn2_A_0_27.geometry} material={materials.saturn2_A} />
          <mesh geometry={nodes.Saturn2_A_saturn2_A_0_28.geometry} material={materials.saturn2_A} />
          <mesh geometry={nodes.Saturn2_A_saturn2_A_0_29.geometry} material={materials.saturn2_A} />
          <mesh geometry={nodes.Saturn2_A_saturn2_A_0_30.geometry} material={materials.saturn2_A} />
          <mesh geometry={nodes.Saturn2_A_saturn2_A_0_31.geometry} material={materials.saturn2_A} />
          <mesh geometry={nodes.Saturn2_A_saturn2_A_0_32.geometry} material={materials.saturn2_A} />
          <mesh geometry={nodes.Saturn2_A_saturn2_A_0_33.geometry} material={materials.saturn2_A} />
          <mesh geometry={nodes.Saturn2_A_saturn2_A_0_34.geometry} material={materials.saturn2_A} />
          <mesh geometry={nodes.Saturn2_A_saturn2_A_0_35.geometry} material={materials.saturn2_A} />
          <mesh geometry={nodes.Saturn2_A_saturn2_A_0_36.geometry} material={materials.saturn2_A} />
          <mesh geometry={nodes.Saturn2_A_saturn2_A_0_37.geometry} material={materials.saturn2_A} />
          <mesh geometry={nodes.Saturn2_A_saturn2_A_0_38.geometry} material={materials.saturn2_A} />
          <mesh geometry={nodes.saturn2_B_saturn2_B_0.geometry} material={materials.saturn2_B} position={[-0.09, 0.05, 0]} />
        </group>
        <group rotation={[-1.55, -0.44, -0.66]}>
          <mesh geometry={nodes.Mimas_Mimas_0.geometry} material={materials.Mimas} position={[-185000, 0.01, -0.01]} />
        </group>
        <group rotation={[-1.62, -0.16, 2.77]}>
          <mesh geometry={nodes.Enceladus_Enceladus_0.geometry} material={materials.Enceladus} position={[-237999.97, 0, 0]} />
        </group>
      </group>
    </group>
  )
}


 




useGLTF.preload('/models/saturn.glb');