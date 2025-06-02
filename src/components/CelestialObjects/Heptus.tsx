import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Mesh } from 'three';

export default function Heptus({ radius = 0.02, distance = 6, speed = 0.3, color = 'white' }) {
    const ref = useRef<Mesh>(null);

    useFrame(({ clock }) => {
        const t = clock.getElapsedTime() * speed;
        const lagrangeAngle = t + Math.PI / 3; // L4: +60 degrees
        if (ref.current) {
            ref.current.position.x = Math.cos(lagrangeAngle) * distance;
            ref.current.position.z = Math.sin(lagrangeAngle) * distance;
        }
    });

    return (
        <mesh ref={ref}>
            <sphereGeometry args={[radius, 32, 32]} />
            <meshStandardMaterial color={color} />
        </mesh>
    );
}


//       name: "Hephaestus Station",
//       type: "station",
//       orbitsAround: "Solara Mortis (WD)",
//       // Actual Values
//       orbitalDistanceAU: 0.025, // Same as Balen (L4/L5)
//       radiusKm: 3, // Symbolic actual size
//       orbitalPeriodEarthDays: 1.862, // Same as Balen
//       lagrangePointInfo: "Solara Mortis-Balen L4 or L5",
//       // Render Values (Normalized)
//       renderedOrbitalDistance: 6.0, // Same as Balen
//       renderedRadius: (3 / 5097) * 0.9, // ~0.00053 (will be very small, may need minimum size clamp in Three.js)
//       renderSpeedHint: 0.3, // Moves with Balen
//       // Visuals & Info
//       color: "darkgrey",
//       textureHint: "metallic_industrial_ports_shipyards_refineries_structural_rings_docking_arms",
//       description: "Orbital Industrial Hub & Shipyard at a Solara Mortis-Balen Lagrange point."
//     },