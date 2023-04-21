"use client";

import React, { useRef } from 'react';
import { useThree, useFrame } from '@react-three/fiber';
import * as THREE from 'three';







// Erth function
export default function HeroErth() {
    const { scene, gl, viewport } = useThree();
  
    const sphere = useRef();
    const atmosphere = useRef();
  
    useFrame(() => {
      const scale = viewport.width / 5000;
      //console.log(scale);
      sphere.current.scale.set(scale, scale, scale);
      atmosphere.current.scale.set(scale * 1.1, scale * 1.1, scale * 1.1);
    });
  
    const Sphere = new THREE.Mesh(new THREE.SphereGeometry(2, 32, 32), new THREE.ShaderMaterial(
      {
  
        uniforms: {
          erthTexture: { value: new THREE.TextureLoader().load(["/pics/eth-night.jpg"]) },
  
  
        },
  
        vertexShader: `
         varying vec2 vertexUV; 
         varying vec3 vertexNormal; 
    
         void main() {
          vertexUV = uv;
          vertexNormal = normalize(normalMatrix * normal);
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); 
      
          }
    
         `,
        fragmentShader: `
         uniform sampler2D erthTexture;
    
         varying vec2 vertexUV;
         varying vec3 vertexNormal;
    
         void main() {
          float intentsity = 1.05 - dot(vertexNormal, vec3(0.0, 0.0, 1.0)); 
          vec3 atmosphere = vec3(0.4, 0.6, 1.0) * pow(intentsity, 1.5);
          gl_FragColor = vec4(atmosphere + texture2D(erthTexture, vertexUV).xyz, 0.8);
         }
    
         `,
  
      }
  
    ));
  
    const Atmosphere = new THREE.Mesh(new THREE.SphereGeometry(2, 32, 32), new THREE.ShaderMaterial(
      {
        vertexShader: `
        
        varying vec3 vertexNormal; 
    
        void main() {
        
         vertexNormal =  normalize(normalMatrix * normal);
         gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 0.93); 
     
         }
    
        `,
        fragmentShader: `
     
         varying vec3 vertexNormal;
    
         void main() {
          float intentsity = pow(0.5 - dot(vertexNormal, vec3(0,0,1.0)), 2.0);
          
          gl_FragColor = vec4(0.3,0.6,1.0,1.0) * intentsity;
         }
    
        `,
        blending: THREE.AdditiveBlending,
        side: THREE.BackSide,
  
      }
  
    ));
  
  
  
  
    Atmosphere.position.set(-2, -2, -1)
    Sphere.position.set(-2, -2, -1);
    Sphere.castShadow = true;
    Sphere.receiveShadow = true;
    Atmosphere.castShadow = true;
    Atmosphere.receiveShadow = true;
    sphere.current = Sphere;
    atmosphere.current = Atmosphere;
    scene.add(Sphere);
    scene.add(Atmosphere);
  
  
  
    return null;
  };