import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';

export default function Star() {
    const ref = useRef();// what is this? useRef creates a mutable object that persists for the lifetime of the component

    return (
        <mesh ref={ref}>
            <sphereGeometry args={[1, 64, 64]} />
            {/* args={[radius, widthSegments, heightSegments]} defines the geometry of the sphere */}
            {/* radius: Size of the sphere, widthSegments: Number of horizontal segments, heightSegments: Number of vertical segments */}
            {/* widthSegments and heightSegments control the detail level of the sphere's surface */}
            <meshStandardMaterial emissive="white" emissiveIntensity={100} color="white" />
        </mesh>
    );
}
