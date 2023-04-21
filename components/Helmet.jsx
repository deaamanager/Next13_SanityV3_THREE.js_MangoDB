"use client";

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame,useThree } from '@react-three/fiber'

export default function Helmet(props) {
  const { nodes, materials } = useGLTF('/models/helmet.glb')
  const group = useRef();
  const {viewport} = useThree();
  useFrame(() => {
     group.current.position.set(-2.7, 0.9, 0.7)
     group.current.scale.set(0.1, 0.1, 0.1)
      }
      )
  return (
    <group scale={(viewport.width /8)} ref={group} {...props} dispose={null} castShadow receiveShadow>
      <group scale={0.01}>
        <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh geometry={nodes.Cube021_Material003_0.geometry} material={materials['Material.003']} />
          <mesh geometry={nodes.Cube020_Material003_0.geometry} material={materials['Material.003']} />
        </group>
        <mesh geometry={nodes.Sphere005_Material001_0.geometry} material={materials['Material.001']} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.Sphere004_Material003_0.geometry} material={materials['Material.003']} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.Sphere002_Material003_0.geometry} material={materials['Material.003']} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.Sphere_Material003_0.geometry} material={materials['Material.003']} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.Circle_Material001_0.geometry} material={materials['Material.001']} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.Sphere006_Material003_0.geometry} material={materials['Material.003']} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.Sphere024_Material003_0.geometry} material={materials['Material.003']} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.Sphere029_Material003_0.geometry} material={materials['Material.003']} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.Sphere001_Material003_0.geometry} material={materials['Material.003']} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.Sphere007_Material003_0.geometry} material={materials['Material.003']} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.Cube001_Material003_0.geometry} material={materials['Material.003']} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.Cube002_Material003_0.geometry} material={materials['Material.003']} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.Cylinder_Material003_0.geometry} material={materials['Material.003']} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.Cylinder001_Material003_0.geometry} material={materials['Material.003']} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.Cylinder002_Material003_0.geometry} material={materials['Material.003']} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.Cylinder003_Material003_0.geometry} material={materials['Material.003']} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.Sphere008_Material003_0.geometry} material={materials['Material.003']} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.Sphere009_Material003_0.geometry} material={materials['Material.003']} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.Cylinder005_Material003_0.geometry} material={materials['Material.003']} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.Sphere010_Material003_0.geometry} material={materials['Material.003']} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.Cylinder004_Material003_0.geometry} material={materials['Material.003']} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.Cube005_Material003_0.geometry} material={materials['Material.003']} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.Cube006_Material003_0.geometry} material={materials['Material.003']} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.Cube007_Material003_0.geometry} material={materials['Material.003']} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.Cube008_Material003_0.geometry} material={materials['Material.003']} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.Cube009_Material003_0.geometry} material={materials['Material.003']} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.Sphere011_Material003_0.geometry} material={materials['Material.003']} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.Cylinder007_Material003_0.geometry} material={materials['Material.003']} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.Cube003_Material003_0.geometry} material={materials['Material.003']} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.Cube010_Material003_0.geometry} material={materials['Material.003']} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.Sphere012_Material003_0.geometry} material={materials['Material.003']} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.Sphere013_Material003_0.geometry} material={materials['Material.003']} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.Sphere014_Material003_0.geometry} material={materials['Material.003']} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.Sphere015_Material003_0.geometry} material={materials['Material.003']} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.Sphere016_Material003_0.geometry} material={materials['Material.003']} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.Sphere017_Material003_0.geometry} material={materials['Material.003']} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.Sphere018_Material003_0.geometry} material={materials['Material.003']} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.Sphere019_Material003_0.geometry} material={materials['Material.003']} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.Sphere020_Material003_0.geometry} material={materials['Material.003']} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.Sphere021_Material003_0.geometry} material={materials['Material.003']} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.Sphere022_Material003_0.geometry} material={materials['Material.003']} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.Plane_Material003_0.geometry} material={materials['Material.003']} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.Cylinder006_Material003_0.geometry} material={materials['Material.003']} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.Cube011_Material003_0.geometry} material={materials['Material.003']} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.Cube013_Material003_0.geometry} material={materials['Material.003']} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.Cube012_Material003_0.geometry} material={materials['Material.003']} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.Cube014_Material003_0.geometry} material={materials['Material.003']} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.Sphere003_Material003_0.geometry} material={materials['Material.003']} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.Cylinder008_Material003_0.geometry} material={materials['Material.003']} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.Cylinder009_Material003_0.geometry} material={materials['Material.003']} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.Cube015_Material003_0.geometry} material={materials['Material.003']} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.Cylinder010_Material003_0.geometry} material={materials['Material.003']} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.Cylinder012_Material003_0.geometry} material={materials['Material.003']} position={[0, 0.56, 0]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.Cube016_Material003_0.geometry} material={materials['Material.003']} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.Cylinder013_Material003_0.geometry} material={materials['Material.003']} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.Cube017_Material003_0.geometry} material={materials['Material.003']} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.Cube018_Material003_0.geometry} material={materials['Material.003']} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.Cylinder011_Material003_0.geometry} material={materials['Material.003']} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.Cube019_Material003_0.geometry} material={materials['Material.003']} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.Cylinder014_Material003_0.geometry} material={materials['Material.003']} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.Cylinder015_Material003_0.geometry} material={materials['Material.003']} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.Cylinder016_Material003_0.geometry} material={materials['Material.003']} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.Cylinder017_Material003_0.geometry} material={materials['Material.003']} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.Cylinder018_Material003_0.geometry} material={materials['Material.003']} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.Cylinder019_Material003_0.geometry} material={materials['Material.003']} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.Cylinder020_Material003_0.geometry} material={materials['Material.003']} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.Cube022_Material003_0.geometry} material={materials['Material.003']} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.Cube023_Material003_0.geometry} material={materials['Material.003']} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.Cube024_Material003_0.geometry} material={materials['Material.003']} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.Sphere030_Material003_0.geometry} material={materials['Material.003']} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.Sphere031_Material003_0.geometry} material={materials['Material.003']} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.Cylinder021_Material003_0.geometry} material={materials['Material.003']} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.Sphere032_Material003_0.geometry} material={materials['Material.003']} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.Sphere028_Material003_0.geometry} material={materials['Material.003']} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.Sphere027_Material003_0.geometry} material={materials['Material.003']} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.Sphere026_Material003_0.geometry} material={materials['Material.003']} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.Sphere025_Material003_0.geometry} material={materials['Material.003']} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.Sphere033_Material003_0.geometry} material={materials['Material.003']} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.Cube025_Material003_0.geometry} material={materials['Material.003']} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.Cylinder022_Material003_0.geometry} material={materials['Material.003']} position={[-22.11, 80.32, 92.33]} rotation={[-1.22, -0.38, 1.12]} scale={100} />
        <mesh geometry={nodes.Cylinder023_Material003_0.geometry} material={materials['Material.003']} position={[0, 0.56, 0]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.Cylinder024_Material003_0.geometry} material={materials['Material.003']} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.Cylinder025_Material003_0.geometry} material={materials['Material.003']} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.craneo_Material014_0.geometry} material={materials['Material.014']} position={[0, 5.13, -10.32]} scale={100} />
      </group>
    </group>
  )
}

useGLTF.preload('/models/helmet.glb');