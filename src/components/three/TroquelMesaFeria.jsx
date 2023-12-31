/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/
import { ContactShadows, OrbitControls, useGLTF } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { Suspense } from 'react'


export function Dav(props) {
	const { nodes, materials } = useGLTF("/gltf/TroquelMesaFeria.gltf");
	return (
	  <group {...props} dispose={null} scale={.5} position={[0,.1,0]}>
		{/* <mesh
		  castShadow
		  receiveShadow
		  geometry={nodes.Plane.geometry}
		  material={nodes.Plane.material}
		  position={[-0.011, 0.133, -0.021]}
		  scale={[3.267, 1, 3.267]}
		/> */}
		<mesh
		  castShadow
		  receiveShadow
		  geometry={nodes["TQPATA222_ARD-geom"].geometry}
		  material={materials.TQPATA222_ARD_front}
		/>
		<mesh
		  castShadow
		  receiveShadow
		  geometry={nodes["TQPATA222_ARD-geom_1"].geometry}
		  material={materials.TQPATA222_ARD_back}
		/>
		<mesh
		  castShadow
		  receiveShadow
		  geometry={nodes["TQPATA222_ARD-geom_2"].geometry}
		  material={materials.TQPATA222_ARD_edge}
		/>
		<mesh
		  castShadow
		  receiveShadow
		  geometry={nodes["TQPATA222_ARD-geom_3"].geometry}
		  material={materials.TQMESA_ARD_front}
		/>
		<mesh
		  castShadow
		  receiveShadow
		  geometry={nodes["TQPATA222_ARD-geom_4"].geometry}
		  material={materials.TQMESA_ARD_back}
		/>
		<mesh
		  castShadow
		  receiveShadow
		  geometry={nodes["TQPATA222_ARD-geom_5"].geometry}
		  material={materials.TQMESA_ARD_edge}
		/>
		<mesh
		  castShadow
		  receiveShadow
		  geometry={nodes["TQPATA222_ARD-geom_6"].geometry}
		  material={materials.TQPATA_ARD_front}
		/>
		<mesh
		  castShadow
		  receiveShadow
		  geometry={nodes["TQPATA222_ARD-geom_7"].geometry}
		  material={materials.TQPATA_ARD_back}
		/>
		<mesh
		  castShadow
		  receiveShadow
		  geometry={nodes["TQPATA222_ARD-geom_8"].geometry}
		  material={materials.TQPATA_ARD_edge}
		/>
	  </group>
	);
  }

// useGLTF.preload('D:/_DIL/WEB/GALAAT/public/gltf/Troquel1G0102.gltf');

const Troquel1g0102 = ({}) => {
	return (

			<Canvas
				style={{  }}
				camera={{
					view: {
						enabled: true,
						fullWidth: 100,
						fullHeight: 100,
						offsetX: 0,
						offsetY: -30,
						width: 100,
						height: 100
					},
					focus: 10,
					fov: 80,
					zoom: 2.5
          ,
					position: [0, 1, 1.5]
				}} >
				<ambientLight intensity={2} />
				{/* <pointLight position={[10, 10, 2]} /> */}
				<Suspense fallback={null}>

					<Dav/>

				</Suspense>
				<OrbitControls autoRotate autoRotateSpeed={1} />
				<ContactShadows resolution={512} scale={1} position={[0, -0.03, 0]} blur={2} opacity={0.6} far={1} color='#202020' />
			</Canvas>
	)
}
export default Troquel1g0102
