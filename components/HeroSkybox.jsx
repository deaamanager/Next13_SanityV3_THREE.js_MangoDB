"use client";

import  { useEffect } from 'react';
import { useCubeTexture } from '@react-three/drei';
import { useThree } from '@react-three/fiber';


// skybox function 
export default function HeroSkybox() {
  const { scene } = useThree();
  
    const texture =  useCubeTexture([
      '/meky/dark-s_px.jpg',
      '/meky/dark-s_nx.jpg',
      '/meky/dark-s_py.jpg',
      '/meky/dark-s_ny.jpg',
      '/meky/dark-s_pz.jpg',
      '/meky/dark-s_nz.jpg'
    ],{path:""});
  
  
    useEffect(() => {
     
      const animate = () => {
        requestAnimationFrame(animate);
        setTimeout(() => {
            texture.castShadow= true;
            texture.receiveShadow= true;
          scene.background = texture;
        });
      };
  
      animate();
    }, [scene, texture]);
  
    return null;
  };