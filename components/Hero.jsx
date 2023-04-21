"use client";

import React, { Suspense, useRef} from 'react';
import { Float, Html, Stars,PerspectiveCamera} from '@react-three/drei';
import { Canvas, useThree, extend, useFrame } from '@react-three/fiber';
import { OrbitControls as OrbitControlsThree } from 'three/examples/jsm/controls/OrbitControls';
import { Dron } from './Dron';
import HeroContent from './HeroContent';
import HeroSkybox from './HeroSkybox';
import HeroErth from './HeroErth';
import Typewrite from './Typewrite';



extend({ OrbitControls: OrbitControlsThree });
// camera controls 
const CameraControls = () => {
  const { camera, gl: { domElement } } = useThree();
  const controls = useRef();

  useFrame(() => controls.current.update());

  return (
    <orbitControls
      ref={controls}
      args={[camera, domElement]}
      autoRotate={true}
      enableZoom={false}
      enableRotate={false}
      autoRotateSpeed={4}
      maxPolarAngle={1.45}
    />
  );
};


function Hero( {pageInfo}) {

  return (
    <div className='relative h-screen w-full flex flex-col '>

      <Suspense fallback={null}>
        <Canvas shadows >
          <ambientLight intensity={0.5} />
          <PerspectiveCamera makeDefault fov={50} position={[3,0,10]} />
          <Stars radius={400} depth={80} count={20000} factor={7} saturation={0} fade={true} speed={3} />
          <HeroSkybox />
          <CameraControls />
          <HeroErth />
          <Float floatIntensity={10} castShadow receiveShadow >
            <Dron />
          </Float>
          <Html center castShadow receiveShadow>
            <HeroContent pageInfo={pageInfo} />           
          </Html>
        </Canvas>
      </Suspense>
      <div className='flex justify-center '>
      <Typewrite pageInfo={pageInfo} />
      
      </div>
    </div>
  );
}

export default Hero;
