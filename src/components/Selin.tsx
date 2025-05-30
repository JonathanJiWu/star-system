import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Mesh } from 'three';

type MoonProps = {
    radius?: number;
    distance?: number;
    speed?: number;
    color?: string;
    parentRef: React.RefObject<Mesh | null>;
};

export default function Selin({
    radius = 0.153,
    distance = 1.5,
    speed = 0.1,
    color = 'lightgrey',
    parentRef,
}: MoonProps) {
    const ref = useRef<Mesh>(null);

    useFrame(({ clock }) => {
        if (ref.current && parentRef.current) {
            const t = clock.getElapsedTime() * speed;
            ref.current.position.x = parentRef.current.position.x + Math.cos(t) * distance;
            ref.current.position.z = parentRef.current.position.z + Math.sin(t) * distance;
            ref.current.position.y = parentRef.current.position.y;
        }
    });

    return (
        <mesh ref={ref} >
            <sphereGeometry args={[radius, 32, 32]} />
            < meshStandardMaterial color={color} />
        </mesh>
    );
}