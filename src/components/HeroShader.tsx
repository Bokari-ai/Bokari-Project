'use client';
import { useEffect, useState } from 'react';
import { ShaderGradientCanvas, ShaderGradient } from '@shadergradient/react';

const DARK = {
  color1: '#06245B', color2: '#0A3A8C', color3: '#328CE3',
  cAzimuthAngle: 180, cDistance: 3.5, cPolarAngle: 80,
  reflection: 0.1, lightType: '3d' as const, brightness: 1.2,
};

const LIGHT = {
  color1: '#d5f4fb', color2: '#326fb4', color3: '#4981e3',
  cAzimuthAngle: 170, cDistance: 4.4, cPolarAngle: 70,
  reflection: 0.3, lightType: 'env' as const, brightness: 1.2,
};

export default function HeroShader() {
  const [dark, setDark] = useState(true);

  useEffect(() => {
    const html = document.documentElement;
    setDark(html.classList.contains('dark'));
    const obs = new MutationObserver(() => setDark(html.classList.contains('dark')));
    obs.observe(html, { attributeFilter: ['class'] });
    return () => obs.disconnect();
  }, []);

  const g = dark ? DARK : LIGHT;

  return (
    <ShaderGradientCanvas
      style={{ position: 'absolute', inset: 0, zIndex: -2, pointerEvents: 'none' }}
      pixelDensity={1}
      fov={45}
    >
      <ShaderGradient
        animate="on"
        brightness={g.brightness}
        cAzimuthAngle={g.cAzimuthAngle}
        cDistance={g.cDistance}
        cPolarAngle={g.cPolarAngle}
        cameraZoom={1}
        color1={g.color1}
        color2={g.color2}
        color3={g.color3}
        envPreset="city"
        grain="off"
        lightType={g.lightType}
        positionX={0}
        positionY={0.9}
        positionZ={-0.3}
        reflection={g.reflection}
        rotationX={45}
        rotationY={0}
        rotationZ={0}
        type="waterPlane"
        uAmplitude={0}
        uDensity={1.2}
        uFrequency={0}
        uSpeed={0.2}
        uStrength={3.4}
        uTime={0}
        wireframe={false}
      />
    </ShaderGradientCanvas>
  );
}
