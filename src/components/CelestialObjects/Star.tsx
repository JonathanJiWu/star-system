import { useRef } from 'react';
import { Mesh, TextureLoader } from 'three';
import { useLoader } from '@react-three/fiber';
//import starImg from '../../assets/2k_sun.jpg';
import starImg from '../../assets/2k_sun.jpg';

export default function Star() {
    const ref = useRef<Mesh>(null);
    // const texture = useLoader(TextureLoader, '/assets/2k_sun.jpg');
    const texture = useLoader(TextureLoader, starImg);

    return (
        <mesh ref={ref}>
            <sphereGeometry args={[1.1, 64, 64]} />
            {/* args={[radius, widthSegments, heightSegments]} defines the geometry of the sphere */}
            {/* radius: Size of the sphere, widthSegments: Number of horizontal segments, heightSegments: Number of vertical segments */}
            {/* widthSegments and heightSegments control the detail level of the sphere's surface */}
            {/* <meshStandardMaterial emissive="white" emissiveIntensity={100} color="paleblue" /> */}
            <meshStandardMaterial
                map={texture}
                emissive="white"
                emissiveIntensity={0.07}
                color="white"
            />
        </mesh>
    );
}
