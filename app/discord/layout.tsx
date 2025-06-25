'use client'

import Particles from "@/components/Particles/Particles";
import '@/app/(site)/styles/globals.css'

export default function discord({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-stone-950"> 
          <div className="fixed top-0 left-0 w-full h-[140vh] -z-10">
            <Particles
              particleColors={["#ffffff", "#ffffff"]}
              particleCount={200}
              particleSpread={10}
              speed={0.1}
              particleBaseSize={100}
              moveParticlesOnHover={false}
              alphaParticles={true}
              disableRotation={false}
            />
          </div>
        {children}
      </body>
    </html>
  );
}
