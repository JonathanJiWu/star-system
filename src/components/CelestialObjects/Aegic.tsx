import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Mesh } from 'three';

export default function Aegic({ radius = 4, distance = 120.6, speed = 0.069, color = 'black' }) {
    const ref = useRef<Mesh>(null);

    useFrame(({ clock }) => {
        const t = clock.getElapsedTime() * speed;
        if (ref.current) {
            ref.current.position.x = Math.cos(t) * distance;
            ref.current.position.z = Math.sin(t) * distance;
        }
    });

    return (
        <mesh ref={ref}>
            <sphereGeometry args={[radius, 32, 32]} />
            <meshStandardMaterial color={color} />
        </mesh>
    );
}
