"use client";

import React,{useEffect} from 'react';
import {  useLoader,useThree } from '@react-three/fiber';
import { MeshReflectorMaterial } from '@react-three/drei';
import {TextureLoader ,RepeatWrapping ,LinearEncoding} from 'three';

export default function Ground() {
    const [normal , roughness] =  useLoader(TextureLoader, [
           '/pics/normal.jpg',
         '/pics/roughness.jpg',
      ]);

      useEffect(() => {
        [normal , roughness].forEach((t) => {
            t.wrapS = RepeatWrapping;
            t.wrapT = RepeatWrapping;
            t.repeat.set(5, 5);
        });
        normal.encoding = LinearEncoding ;
      }, [normal , roughness])

      const {viewport} = useThree();

    return (
      <mesh rotation-x={-Math.PI * 0.5} scale={(viewport.width / 8)} castShadow receiveShadow >
         <planeGeometry args={[30,30]} />
            <MeshReflectorMaterial
            envMapIntensity={0}
            normalMap={normal}
            normalScale={[0.15,0.15]}
            roughnessMap={roughness}
            dithering={true}
            color={[0.015,0.015,0.015]}
            roughness={0.7}
            blur={[1000, 400]}
            mixBlur={30}
            mixstrength={80}
            mixContrast={1}
            resolution={1024}
            mirror={0}
            depthScale={0.01}
            mindepthThreshold={0.9}
            maxdepthThreshold={1}
            depthToBlurRatioBias={0.25}
            debug={0}
            reflectorOffset={0.2}
            />

        </mesh>
    )
}