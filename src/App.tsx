import './App.css'
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { useRef } from 'react';
import { Mesh } from 'three';

import Star from './components/Star';
import Narrum from './components/Narrum';
import Balen from './components/Balen';
import Selin from './components/Selin';
import StarryBackground from './components/StarryBackground';


function App() {
  const balenRef = useRef<Mesh>(null);

  return (
    <Canvas
      camera={{ position: [0, 5, 10], fov: 60 }}
      style={{ background: '#000000' }}
    >
      <ambientLight intensity={.3} />
      <pointLight position={[0, 0, 0]} intensity={200} color="white" />
      <Star />
      <Narrum />
      <Balen ref={balenRef} />
      <Selin parentRef={balenRef} />
      <OrbitControls />
      <StarryBackground />
    </Canvas>
  )
}

export default App
