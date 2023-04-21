"use client";

import React,{Suspense,} from 'react';
import { Canvas} from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera,Cloud} from '@react-three/drei';
import Ground from './GroundContact';
import ContactFlugzeug from './ContactFlugzeug';
import Helmet from './Helmet';
import Barrel from './Barrel';


function View() {
    return (
        <>
        <OrbitControls target={[0,0.35,0]} maxPolarAngle={1.45} autoRotate={true} enableRotate={false} autoRotateSpeed={6}  enableZoom={false} />
        <PerspectiveCamera makeDefault fov={50} position={[3,2,5]} />
         <ambientLight intensity={0.5} />
         {/* new color  */}
         <color attach="background" args={[0,0,0]} />

         {/* spotlight left and right  */}
            <spotLight
             position={[5, 5, 0]}
              angle={0.6}
             penumbra={0.5}
             color={[1,0.35,0.7]}
             intensify={1.5}
             castShadow
             shadow-bias={-0.0001}
              />
             <spotLight
             position={[-5, 5, 0]}
              angle={0.6}
             penumbra={0.5}
             color={[0.14,0.5,1]}
             intensify={2}
             castShadow
             shadow-bias={-0.0001}
              />
            <Ground />
            <ContactFlugzeug />
            <mesh position={[1.6,0,0]}>
            <Helmet />
            <Barrel />
            </mesh>
            <Cloud  position={[0.7,8.5,-4]} color="red" 
             depth={1.5} // Z-dir depth
             segments={20}
             scela={[0.1,0.1,0.1]} 
             castShadow receiveShadow
            />
            <Cloud  
               // Rotation speed
              // Width of the full cloud
              position={[-0.7,8.5,-4]} color="blue" scela={[0.1,0.1,0.1]} castShadow receiveShadow  />
        </>
    )
}

function ContactBackground() {
  return (
     <>
     <Suspense fallback={null}>
        <Canvas shadows>
            <View />
      </Canvas>
        </Suspense>
     </>
  )
}

export default ContactBackground;