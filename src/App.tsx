import './App.css'
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stars } from '@react-three/drei';
import Planet from './components/Planets';

function Star() {
  return (
    <mesh>
      <sphereGeometry args={[2, 64, 64]} />
      <meshStandardMaterial emissive="yellow" emissiveIntensity={2} color="orange" />
    </mesh>
  );
}

function App() {
  return (
    <Canvas camera={{ position: [0, 5, 10], fov: 60 }}>
      <ambientLight intensity={0.2} />
      <pointLight position={[0, 0, 0]} intensity={2} color="white" />
      <Star />
      <Planet />
      <OrbitControls />
      <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade />
    </Canvas>
  )
}

export default App


// 🌍 PLANET PROPERTIES
// 1. Visual
// radius: Size of the planet

// color: Surface color or texture

// texture map: Add a detailed surface (e.g. Earth map, Mars terrain)

// roughness, metalness: Surface reflectivity

// emissive: Glow (e.g. lava planets, city lights at night)

// wireframe: For stylized looks

// 2. Motion
// orbit distance: How far from the star

// orbit speed: How fast it revolves around the star

// rotation speed: How fast it spins on its axis

// tilt: Axial tilt (for realism)

// orbit inclination: Slanted orbits

// 🌟 STAR PROPERTIES
// size: Radius of the star

// color: Yellow, red giant, blue dwarf, etc.

// emissiveIntensity: Brightness/glow

// light intensity and color: Affects planets' lighting

// flare, corona, or shaders (advanced): For realism

// 🌌 SCENE ELEMENTS
// Stars background: Adjust @react-three/drei <Stars /> options (density, colors, fade)

// Ambient light: Sets global light tone

// Point/Directional light: Simulates sun rays

// Fog: Add distance-based fade

// Skybox or background image: Space nebula, galaxy panorama

// 🎥 CAMERA & CONTROLS
// Free camera: Use <OrbitControls />

// Fly camera: Use <FlyControls /> for spaceship-like movement

// Zoom behavior: Customize limits

// Follow a planet: Animate the camera target

// 🌙 MOONS & RINGS
// Add a <Moon /> that orbits a <Planet />

// Use torus geometry or texture maps for planetary rings (like Saturn)

// 🎯 INTERACTIONS
// Click a planet to zoom in

// Hover effects (highlight, show info)

// Labels with <Html /> from @react-three/drei

// 🧱 Example customization:
// jsx
// Copy
// Edit
// <Planet
//   radius={1.2}
//   distance={10}
//   speed={0.3}
//   color="#6699ff"
//   rotationSpeed={0.01}
//   tilt={0.4}
// />