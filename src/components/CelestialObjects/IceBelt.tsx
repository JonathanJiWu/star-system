import { useMemo, useRef } from 'react';
import { useFrame } from '@react-three/fiber';
//import { Color, Mesh } from 'three';
import { Mesh } from 'three';

const NUM_PARTICLES = 500;
const renderedInnerRadius = 170;
const renderedOuterRadius = 250;
const color = 'skyblue';

export default function IceBelt({ distance = 1, speed = 0.39 }) {
    const ref = useRef<Mesh>(null);

    useFrame(({ clock }) => {
        const t = clock.getElapsedTime() * speed;
        if (ref.current) {
            ref.current.position.x = Math.cos(t) * distance;
            ref.current.position.z = Math.sin(t) * distance;
        }
    });

    // Generate random positions for particles in the belt
    type Particle = { position: [number, number, number]; scale: number };
    const particles = useMemo<Particle[]>(() => {
        const arr: Particle[] = [];
        for (let i = 0; i < NUM_PARTICLES; i++) {
            const angle = Math.random() * Math.PI * 2;
            const radius = renderedInnerRadius + Math.random() * (renderedOuterRadius - renderedInnerRadius);
            const x = Math.cos(angle) * radius;
            const z = Math.sin(angle) * radius;
            const y = (Math.random() - 0.5) * 2; // small vertical spread
            arr.push({ position: [x, y, z], scale: 0.5 + Math.random() * 1.5 });
        }
        return arr;
    }, []);

    return (
        <>
            {particles.map((p, i) => (
                <mesh key={i} position={p.position} scale={p.scale}>
                    <sphereGeometry args={[1, 8, 8]} />
                    <meshStandardMaterial color={color} />
                </mesh>
            ))}
        </>
    );
}
