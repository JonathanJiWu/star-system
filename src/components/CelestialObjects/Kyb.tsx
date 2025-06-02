import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Mesh } from 'three';

export default function Kyb ({ radius = 4, distance = 70, speed = 0.086, color = 'olive' }) {
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
//       type: "planetoid",
//       orbitsAround: "Solara Mortis (WD)",
//       // Actual Values
//       orbitalDistanceAU: 0.3,
//       radiusKm: 250,
//       orbitalPeriodEarthDays: 30.37,
//       rotationPeriod: 0.4, // Earth days
//       axialTiltDegrees: 10,
//       // Render Values (Normalized)
//       renderedOrbitalDistance: (0.3 / 0.025) * 6,  // 72
//       renderedRadius: (250 / 5097) * 0.9,         // ~0.044
//       renderSpeedHint: 0.3 * Math.sqrt(6 / ((0.3 / 0.025) * 6)), // ~0.086
//       // Visuals & Info
//       color: "olive",
//       textureHint: "irregular_shape_dark_surface_crystalline_patches_chemical_deposits_geysers_hint",
//       description: "Chemically rich planetoid. Source of complex non-metallic minerals and compounds."
//     },