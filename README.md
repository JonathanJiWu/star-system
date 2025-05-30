# 🌟 Star System Visualization

A 3D interactive star system built with [React](https://react.dev/), [@react-three/fiber](https://docs.pmnd.rs/react-three-fiber/), and [@react-three/drei](https://docs.pmnd.rs/drei/). Explore a simple solar system with animated planets, a glowing star, and a starry background—all rendered in your browser.

## Features

- **Central Star**: Bright, emissive star at the center of the system.
- **Orbiting Planets**: Multiple planets with customizable radius, color, orbit distance, and speed.
- **Starry Background**: Realistic star field using Drei's `<Stars />` component.
- **3D Controls**: Orbit the camera freely with mouse/touch (via `<OrbitControls />`).
- **Responsive**: Fills the entire browser window.

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v16+ recommended)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Installation

```bash
git clone https://github.com/your-username/star-system.git
cd star-system
npm install
# or
yarn
```

### Running the App

```bash
npm start
# or
yarn start
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
src/
  components/
    Star.tsx         # The central star
    Narrum.tsx       # Example planet
    Balen.tsx        # Another planet
    StarryBackground.tsx # Star field
  App.tsx            # Main scene setup
  App.css            # Global styles
```

## Customization

- **Add Planets**: Copy and modify `Narrum.tsx` or `Balen.tsx` for more planets.
- **Change Orbits**: Adjust `distance` and `speed` props.
- **Visuals**: Tweak colors, radii, and materials for different looks.
- **Background**: Edit `StarryBackground.tsx` for denser or sparser stars.

## Dependencies

- [react](https://react.dev/)
- [@react-three/fiber](https://docs.pmnd.rs/react-three-fiber/)
- [@react-three/drei](https://docs.pmnd.rs/drei/)

## License

MIT

---

*Made with 🪐 and React Three Fiber.*
