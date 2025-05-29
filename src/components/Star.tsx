import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';

type StarProps = {
    radius?: number;
    depth?: number;
    count?: number;
    factor?: number;
    saturation?: number;
    fade?: boolean;
};

export default function Star({
    radius = 100,
    depth = 50,
    count = 5000,
    factor = 4,
    saturation = 0,
    fade
}: StarProps) {
    const ref = useRef();// what is this? useRef creates a mutable object that persists for the lifetime of the component
    const distance = 0; // or your desired value
    const speed = 0;    // or your desired value

    // useFrame(({ clock }) => {//what is this? useFrame is a hook that allows you to run code on every frame render
    //     const t = clock.getElapsedTime() * speed;// what is this? clock.getElapsedTime() returns the elapsed time since the start of the clock, multiplied by speed to control the animation speed
    //     ref.current.position.x = Math.cos(t) * distance;//ref.current.position.x sets the x position of the mesh based on a cosine function, creating a circular motion
    //     ref.current.position.z = Math.sin(t) * distance;// ref.current.position.z sets the z position of the mesh based on a sine function, creating a circular motion
    // });

    return (
        <mesh ref={ref}>
            <sphereGeometry args={[2, 64, 64]} />
            <meshStandardMaterial emissive="white" emissiveIntensity={2} color="white" />
        </mesh>
    );
}
