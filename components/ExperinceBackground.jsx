"use client";

import React, { Suspense } from 'react';
import { Canvas,useThree } from '@react-three/fiber';
import { Stars } from '@react-three/drei';
import * as THREE from 'three';
import Robot from './Robot';

function BackgroundImage(){
    const { scene } = useThree();
    scene.background = new THREE.TextureLoader().load('/meky/dark-s_ny.jpg');
    return null;
}

function ExperinceBackground() {
  return (
    <div className='absolute h-screen w-full bg-black '>
        <Suspense fallback={null}>
        <Canvas shadows  >
            <ambientLight intensity={0.5} />
            <BackgroundImage />
            <Stars  radius={4} depth={80} count={2000} factor={7} saturation={0} fade={true} speed={3} />
            <Robot />      
            </Canvas>   
        </Suspense>

    </div>
  )
}

export default ExperinceBackground;