import './App.css'
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { useRef } from 'react';
import { Mesh } from 'three';

import Star from './components/CelestialObjects/Star';
import Narrum from './components/CelestialObjects/Narrum';
import Balen from './components/CelestialObjects/Balen';
import Selin from './components/CelestialObjects/Selin';
import Heptus from './components/CelestialObjects/Heptus';
import Kyb from './components/CelestialObjects/Kyb';
import Aegic from './components/CelestialObjects/Aegic';
import IceBelt from './components/CelestialObjects/IceBelt';
import StarryBackground from './components/CelestialObjects/StarryBackground';


function App() {
  const balenRef = useRef<Mesh>(null);

  return (
    <Canvas
      camera={{ position: [0, 5, 10], fov: 60 }}
      //style={{ background: '#000000' }}
      style={{ background: '' }}//test to remove background color
    >
      <ambientLight intensity={.3} />
      <pointLight position={[0, 0, 0]} intensity={666} color="white" />
      <Star />
      <Narrum />
      <Balen ref={balenRef} />
      <Selin parentRef={balenRef} />
      <Heptus />
      <Kyb />
      <Aegic />
      <IceBelt />

      <OrbitControls />
      <StarryBackground />
    </Canvas>
  )
}

export default App
