import { useRef, forwardRef, useImperativeHandle } from 'react';
import { useFrame } from '@react-three/fiber';
import { Mesh } from 'three';

const Balen = forwardRef<Mesh, { radius?: number; distance?: number; speed?: number; color?: string }>(
  ({ radius = 0.9, distance = 6, speed = 0.3, color = 'grey' }, ref) => {
    const localRef = useRef<Mesh>(null);

    useImperativeHandle(ref, () => localRef.current as Mesh);

    useFrame(({ clock }) => {
      const t = clock.getElapsedTime() * speed;
      if (localRef.current) {
        localRef.current.position.x = Math.cos(t) * distance;
        localRef.current.position.z = Math.sin(t) * distance;
      }
    });

    return (
      <mesh ref={localRef}>
        <sphereGeometry args={[radius, 32, 32]} />
        <meshStandardMaterial color={color} />
      </mesh>
    );
  }
);

export default Balen;
