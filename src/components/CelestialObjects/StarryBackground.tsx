import { Stars } from '@react-three/drei';

//what are these? Stars is a component from @react-three/drei that creates a starry background in the scene. 
//The props control the appearance of the stars, such as radius, depth, count, factor, saturation, and fade.

export default function StarryBackground() {
    return (
        <Stars radius={300} depth={30} count={1000} factor={10} saturation={1} fade speed={1} />
    );
}

// type StarProps = {
//     radius?: number;//Props representing the size and appearance of the star
//     depth?: number;// Depth of the star field, affecting how stars are rendered in the scene,
//     count?: number;// Number of stars to generate in the star field, influencing the density and visual complexity of the starry background
//     factor?: number;// Factor to control the density or distribution of stars, // affecting how clustered or spread out they appear
//     saturation?: number;// Saturation level of the star color, affecting its brightness and vibrancy
//     fade?: boolean;// Whether to apply a fade effect to the stars, creating a more subtle or atmospheric appearance
// };