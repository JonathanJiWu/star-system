import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';

export default function Narrum({ radius = 0.3, distance = 4, speed = 0.5, color = 'red' }) {
    const ref = useRef();

    useFrame(({ clock }) => {
        const t = clock.getElapsedTime() * speed;
        ref.current.position.x = Math.cos(t) * distance;
        ref.current.position.z = Math.sin(t) * distance;
    });

    return (
        <mesh ref={ref}>
            <sphereGeometry args={[radius, 32, 32]} />
            <meshStandardMaterial color={color} />
        </mesh>
    );
}
