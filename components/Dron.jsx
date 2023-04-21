"use client";
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Dron(props) {
  const group = useRef()
  const { nodes, materials  } = useGLTF('/models/DRON1.glb')
 // const { actions } = useAnimations(animations, group)
  return (
    <group ref={group} {...props} dispose={null}  position={[1,-1,-2]} rotation={[1,5,1]}   scale={[0.03,0.03,0.03]} castShadow receiveShadow >
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
          <group name="bdd6ab80758240739c0f32ea2da06a5bfbx" rotation={[Math.PI / 2, 0, 0]}>
            <group name="Object_2">
              <group name="RootNode">
                <group name="TPhotometricLight001" position={[98.72, 50.46, 33.7]} rotation={[1.41, 0.42, -1.2]} />
                <group name="TPhotometricLight002" position={[-108.17, 47.16, 80.29]} rotation={[1.36, -0.27, 0.9]} />
                <group name="TPhotometricLight003" position={[0.07, 73.86, -73.64]} rotation={[2.36, 0, 3.14]} />
                <group name="TPhotometricLight004" position={[122.75, 53.75, -85.91]} rotation={[1.77, 0.28, -2.21]} />
                <group name="TPhotometricLight005" position={[-108.17, 75.72, -75.93]} rotation={[1.89, -0.42, 2.25]} />
                <group name="TPhotometricLight006" position={[0.07, 73.86, 73.41]} rotation={[0.79, 0, 0]} />
                <group name="K07_Drone_1" position={[0.02, 6.63, -5.34]} rotation={[-Math.PI / 2, 0, 0]}>
                  <group name="K07_Drone" position={[0.02, -19.2, -6.65]} rotation={[Math.PI / 2, 0, 0]}>
                    <group name="Plasma_02" position={[15.66, -9.6, -30.92]} rotation={[-Math.PI / 2, 0, 0]}>
                      <group name="Plasma004" position={[0, -5.5, 0]} rotation={[0, -1.51, 0]} scale={1.3}>
                        <group name="Fire_011" position={[0, 4.07, 0]} rotation={[-Math.PI / 2, 0, -Math.PI / 6]} scale={[1.48, 1.48, 0.6]}>
                          <group name="Object_48" position={[0, 0, -8.17]}>
                            <mesh name="Fire_011_Mat_PlasmaTurbine_0" geometry={nodes.Fire_011_Mat_PlasmaTurbine_0.geometry} material={materials.Mat_PlasmaTurbine} />
                          </group>
                        </group>
                        <group name="Fire_012" position={[0, 2.67, 0]} rotation={[-Math.PI / 2, 0, -Math.PI / 6]} scale={[1.48, 1.48, 0.6]}>
                          <group name="Object_51" position={[0, 0, -4.9]}>
                            <mesh name="Fire_012_Mat_PlasmaTurbine_0" geometry={nodes.Fire_012_Mat_PlasmaTurbine_0.geometry} material={materials.Mat_PlasmaTurbine} />
                          </group>
                        </group>
                      </group>
                      <group name="Group002" position={[0, 0.97, 0]} scale={[0.32, 1.31, 0.33]}>
                        <group name="Plasma006" position={[0, -1.66, 0]} rotation={[0, 0.24, 0]}>
                          <group name="Fire_022" position={[0, 4.07, 0]} rotation={[-Math.PI / 2, 0, -Math.PI / 6]} scale={[1.48, 1.48, 0.6]}>
                            <group name="Object_56" position={[0, 0, -8.17]}>
                              <mesh name="Fire_022_Mat_PlasmaTurbine_0" geometry={nodes.Fire_022_Mat_PlasmaTurbine_0.geometry} material={materials.Mat_PlasmaTurbine} />
                            </group>
                          </group>
                          <group name="Fire_023" position={[0, 2.67, 0]} rotation={[-Math.PI / 2, 0, -Math.PI / 6]} scale={[1.48, 1.48, 0.6]}>
                            <group name="Object_59" position={[0, 0, -4.9]}>
                              <mesh name="Fire_023_Mat_PlasmaTurbine_0" geometry={nodes.Fire_023_Mat_PlasmaTurbine_0.geometry} material={materials.Mat_PlasmaTurbine} />
                            </group>
                          </group>
                          <group name="Fire_024" position={[0, -1.68, 0]} rotation={[-Math.PI / 2, 0, -Math.PI / 6]} scale={[1.48, 1.48, 0.6]}>
                            <group name="Object_62" position={[0, 0, -1.63]}>
                              <mesh name="Fire_024_Mat_PlasmaTurbine_0" geometry={nodes.Fire_024_Mat_PlasmaTurbine_0.geometry} material={materials.Mat_PlasmaTurbine} />
                            </group>
                          </group>
                        </group>
                        <group name="Plasma007" position={[0, 2.73, 0]} rotation={[-Math.PI, 0.02, -Math.PI]} scale={0.59}>
                          <group name="Fire_019" position={[0, 4.07, 0]} rotation={[-Math.PI / 2, 0, -Math.PI / 6]} scale={[1.48, 1.48, 0.6]}>
                            <group name="Object_66" position={[0, 0, -8.17]}>
                              <mesh name="Fire_019_Mat_PlasmaTurbine_0" geometry={nodes.Fire_019_Mat_PlasmaTurbine_0.geometry} material={materials.Mat_PlasmaTurbine} />
                            </group>
                          </group>
                          <group name="Fire_020" position={[0, 2.67, 0]} rotation={[-Math.PI / 2, 0, -Math.PI / 6]} scale={[1.48, 1.48, 0.6]}>
                            <group name="Object_69" position={[0, 0, -4.9]}>
                              <mesh name="Fire_020_Mat_PlasmaTurbine_0" geometry={nodes.Fire_020_Mat_PlasmaTurbine_0.geometry} material={materials.Mat_PlasmaTurbine} />
                            </group>
                          </group>
                          <group name="Fire_021" position={[0, -1.68, 0]} rotation={[-Math.PI / 2, 0, -Math.PI / 6]} scale={[1.48, 1.48, 0.6]}>
                            <group name="Object_72" position={[0, 0, -1.63]}>
                              <mesh name="Fire_021_Mat_PlasmaTurbine_0" geometry={nodes.Fire_021_Mat_PlasmaTurbine_0.geometry} material={materials.Mat_PlasmaTurbine} />
                            </group>
                          </group>
                        </group>
                      </group>
                      <group name="Group001" position={[0, 1.13, 0]}>
                        <group name="Plasma005" position={[0, 2.73, 0]} rotation={[-Math.PI, 0.02, -Math.PI]} scale={0.59}>
                          <group name="Fire_013" position={[0, 4.07, 0]} rotation={[-Math.PI / 2, 0, -Math.PI / 6]} scale={[1.48, 1.48, 0.6]}>
                            <group name="Object_77" position={[0, 0, -8.17]}>
                              <mesh name="Fire_013_Mat_PlasmaTurbine_0" geometry={nodes.Fire_013_Mat_PlasmaTurbine_0.geometry} material={materials.Mat_PlasmaTurbine} />
                            </group>
                          </group>
                          <group name="Fire_014" position={[0, 2.67, 0]} rotation={[-Math.PI / 2, 0, -Math.PI / 6]} scale={[1.48, 1.48, 0.6]}>
                            <group name="Object_80" position={[0, 0, -4.9]}>
                              <mesh name="Fire_014_Mat_PlasmaTurbine_0" geometry={nodes.Fire_014_Mat_PlasmaTurbine_0.geometry} material={materials.Mat_PlasmaTurbine} />
                            </group>
                          </group>
                          <group name="Fire_015" position={[0, -1.68, 0]} rotation={[-Math.PI / 2, 0, -Math.PI / 6]} scale={[1.48, 1.48, 0.6]}>
                            <group name="Object_83" position={[0, 0, -1.63]}>
                              <mesh name="Fire_015_Mat_PlasmaTurbine_0" geometry={nodes.Fire_015_Mat_PlasmaTurbine_0.geometry} material={materials.Mat_PlasmaTurbine} />
                            </group>
                          </group>
                        </group>
                        <group name="Plasma003" position={[0, -1.66, 0]} rotation={[0, 0.24, 0]}>
                          <group name="Fire_016" position={[0, 4.07, 0]} rotation={[-Math.PI / 2, 0, -Math.PI / 6]} scale={[1.48, 1.48, 0.6]}>
                            <group name="Object_87" position={[0, 0, -8.17]}>
                              <mesh name="Fire_016_Mat_PlasmaTurbine_0" geometry={nodes.Fire_016_Mat_PlasmaTurbine_0.geometry} material={materials.Mat_PlasmaTurbine} />
                            </group>
                          </group>
                          <group name="Fire_017" position={[0, 2.67, 0]} rotation={[-Math.PI / 2, 0, -Math.PI / 6]} scale={[1.48, 1.48, 0.6]}>
                            <group name="Object_90" position={[0, 0, -4.9]}>
                              <mesh name="Fire_017_Mat_PlasmaTurbine_0" geometry={nodes.Fire_017_Mat_PlasmaTurbine_0.geometry} material={materials.Mat_PlasmaTurbine} />
                            </group>
                          </group>
                          <group name="Fire_018" position={[0, -1.68, 0]} rotation={[-Math.PI / 2, 0, -Math.PI / 6]} scale={[1.48, 1.48, 0.6]}>
                            <group name="Object_93" position={[0, 0, -1.63]}>
                              <mesh name="Fire_018_Mat_PlasmaTurbine_0" geometry={nodes.Fire_018_Mat_PlasmaTurbine_0.geometry} material={materials.Mat_PlasmaTurbine} />
                            </group>
                          </group>
                        </group>
                      </group>
                    </group>
                    <group name="Plasma_01" position={[-15.65, -9.6, -30.92]} rotation={[-Math.PI / 2, 0, 0]}>
                      <group name="Plasma002" position={[0, 3.86, 0]} rotation={[0, -1.38, 0]} scale={0.59}>
                        <group name="Fire_008" position={[0, 4.07, 0]} rotation={[-Math.PI / 2, 0, -Math.PI / 6]} scale={[1.48, 1.48, 0.6]}>
                          <group name="Object_98" position={[0, 0, -8.17]}>
                            <mesh name="Fire_008_Mat_PlasmaTurbine_0" geometry={nodes.Fire_008_Mat_PlasmaTurbine_0.geometry} material={materials.Mat_PlasmaTurbine} />
                          </group>
                        </group>
                        <group name="Fire_009" position={[0, 2.67, 0]} rotation={[-Math.PI / 2, 0, -Math.PI / 6]} scale={[1.48, 1.48, 0.6]}>
                          <group name="Object_101" position={[0, 0, -4.9]}>
                            <mesh name="Fire_009_Mat_PlasmaTurbine_0" geometry={nodes.Fire_009_Mat_PlasmaTurbine_0.geometry} material={materials.Mat_PlasmaTurbine} />
                          </group>
                        </group>
                        <group name="Fire_010" position={[0, -1.68, 0]} rotation={[-Math.PI / 2, 0, -Math.PI / 6]} scale={[1.48, 1.48, 0.6]}>
                          <group name="Object_104" position={[0, 0, -1.63]}>
                            <mesh name="Fire_010_Mat_PlasmaTurbine_0" geometry={nodes.Fire_010_Mat_PlasmaTurbine_0.geometry} material={materials.Mat_PlasmaTurbine} />
                          </group>
                        </group>
                      </group>
                      <group name="Plasma" position={[0, -0.53, 0]} rotation={[-Math.PI, 1.12, -Math.PI]}>
                        <group name="Fire_04" position={[0, 2.67, 0]} rotation={[-Math.PI / 2, 0, -Math.PI / 6]} scale={[1.48, 1.48, 0.6]}>
                          <group name="Object_108" position={[0, 0, -4.9]}>
                            <mesh name="Fire_04_Mat_PlasmaTurbine_0" geometry={nodes.Fire_04_Mat_PlasmaTurbine_0.geometry} material={materials.Mat_PlasmaTurbine} />
                          </group>
                        </group>
                        <group name="Fire_05" position={[0, -1.68, 0]} rotation={[-Math.PI / 2, 0, -Math.PI / 6]} scale={[1.48, 1.48, 0.6]}>
                          <group name="Object_111" position={[0, 0, -1.63]}>
                            <mesh name="Fire_05_Mat_PlasmaTurbine_0" geometry={nodes.Fire_05_Mat_PlasmaTurbine_0.geometry} material={materials.Mat_PlasmaTurbine} />
                          </group>
                        </group>
                        <group name="Fire_03" position={[0, 4.07, 0]} rotation={[-Math.PI / 2, 0, -Math.PI / 6]} scale={[1.48, 1.48, 0.6]}>
                          <group name="Object_114" position={[0, 0, -8.17]}>
                            <mesh name="Fire_03_Mat_PlasmaTurbine_0" geometry={nodes.Fire_03_Mat_PlasmaTurbine_0.geometry} material={materials.Mat_PlasmaTurbine} />
                          </group>
                        </group>
                      </group>
                      <group name="Plasma001" position={[0, -5.5, 0]} rotation={[0, 0.27, 0]} scale={1.3}>
                        <group name="Fire_006" position={[0, 4.07, 0]} rotation={[-Math.PI / 2, 0, -Math.PI / 6]} scale={[1.48, 1.48, 0.6]}>
                          <group name="Object_118" position={[0, 0, -8.17]}>
                            <mesh name="Fire_006_Mat_PlasmaTurbine_0" geometry={nodes.Fire_006_Mat_PlasmaTurbine_0.geometry} material={materials.Mat_PlasmaTurbine} />
                          </group>
                        </group>
                        <group name="Fire_007" position={[0, 2.67, 0]} rotation={[-Math.PI / 2, 0, -Math.PI / 6]} scale={[1.48, 1.48, 0.6]}>
                          <group name="Object_121" position={[0, 0, -4.9]}>
                            <mesh name="Fire_007_Mat_PlasmaTurbine_0" geometry={nodes.Fire_007_Mat_PlasmaTurbine_0.geometry} material={materials.Mat_PlasmaTurbine} />
                          </group>
                        </group>
                      </group>
                      <group name="Group003" position={[0.12, 0.97, 0]} scale={[0.32, 1.31, 0.33]}>
                        <group name="Plasma008" position={[0, -1.66, 0]} rotation={[0, 0.24, 0]}>
                          <group name="Fire_028" position={[0, 4.07, 0]} rotation={[-Math.PI / 2, 0, -Math.PI / 6]} scale={[1.48, 1.48, 0.6]}>
                            <group name="Object_126" position={[0, 0, -8.17]}>
                              <mesh name="Fire_028_Mat_PlasmaTurbine_0" geometry={nodes.Fire_028_Mat_PlasmaTurbine_0.geometry} material={materials.Mat_PlasmaTurbine} />
                            </group>
                          </group>
                          <group name="Fire_029" position={[0, 2.67, 0]} rotation={[-Math.PI / 2, 0, -Math.PI / 6]} scale={[1.48, 1.48, 0.6]}>
                            <group name="Object_129" position={[0, 0, -4.9]}>
                              <mesh name="Fire_029_Mat_PlasmaTurbine_0" geometry={nodes.Fire_029_Mat_PlasmaTurbine_0.geometry} material={materials.Mat_PlasmaTurbine} />
                            </group>
                          </group>
                          <group name="Fire_030" position={[0, -1.68, 0]} rotation={[-Math.PI / 2, 0, -Math.PI / 6]} scale={[1.48, 1.48, 0.6]}>
                            <group name="Object_132" position={[0, 0, -1.63]}>
                              <mesh name="Fire_030_Mat_PlasmaTurbine_0" geometry={nodes.Fire_030_Mat_PlasmaTurbine_0.geometry} material={materials.Mat_PlasmaTurbine} />
                            </group>
                          </group>
                        </group>
                        <group name="Plasma009" position={[0, 2.73, 0]} rotation={[-Math.PI, 0.02, -Math.PI]} scale={0.59}>
                          <group name="Fire_025" position={[0, 4.07, 0]} rotation={[-Math.PI / 2, 0, -Math.PI / 6]} scale={[1.48, 1.48, 0.6]}>
                            <group name="Object_136" position={[0, 0, -8.17]}>
                              <mesh name="Fire_025_Mat_PlasmaTurbine_0" geometry={nodes.Fire_025_Mat_PlasmaTurbine_0.geometry} material={materials.Mat_PlasmaTurbine} />
                            </group>
                          </group>
                          <group name="Fire_026" position={[0, 2.67, 0]} rotation={[-Math.PI / 2, 0, -Math.PI / 6]} scale={[1.48, 1.48, 0.6]}>
                            <group name="Object_139" position={[0, 0, -4.9]}>
                              <mesh name="Fire_026_Mat_PlasmaTurbine_0" geometry={nodes.Fire_026_Mat_PlasmaTurbine_0.geometry} material={materials.Mat_PlasmaTurbine} />
                            </group>
                          </group>
                          <group name="Fire_027" position={[0, -1.68, 0]} rotation={[-Math.PI / 2, 0, -Math.PI / 6]} scale={[1.48, 1.48, 0.6]}>
                            <group name="Object_142" position={[0, 0, -1.63]}>
                              <mesh name="Fire_027_Mat_PlasmaTurbine_0" geometry={nodes.Fire_027_Mat_PlasmaTurbine_0.geometry} material={materials.Mat_PlasmaTurbine} />
                            </group>
                          </group>
                        </group>
                      </group>
                    </group>
                    <mesh name="K07_Drone_Mat_Lens_0" geometry={nodes.K07_Drone_Mat_Lens_0.geometry} material={materials.Mat_Lens} />
                    <mesh name="K07_Drone_Solid_Glass_0" geometry={nodes.K07_Drone_Solid_Glass_0.geometry} material={materials.Solid_Glass} />
                    <mesh name="K07_Drone_Mat_Drone_0" geometry={nodes.K07_Drone_Mat_Drone_0.geometry} material={materials.Mat_Drone} />
                  </group>
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/models/DRON1.glb');