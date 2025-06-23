import './styles/globals.css'
import {Button} from "@/components/ui/button"
import Particles from "@/components/Particles/Particles"
import Navbar from '@/components/ui/navbar';
import { TextLoop } from '@/components/ui/text-loop';

export default function Home() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-[140vh] -z-10">
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
      <Navbar/>
<section
  id="home"
  className="bg-gradient-to-b from-black/50 via-black/30 to-transparent flex items-center justify-center min-h-screen px-4 sm:px-6"
>
  <div className="text-center text-white w-full max-w-4xl py-10">
    <h4 className="text-slate-400 font-semibold uppercase tracking-wide text-base sm:text-lg md:text-xl mb-4">
      By the creators of NTM DEV
    </h4>
    <h1 className="whitespace-pre-wrap text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-6">
      Get your BOT{" "}
      <br />
      <TextLoop
        className="overflow-y-clip"
        transition={{
          type: "spring",
          stiffness: 900,
          damping: 80,
          mass: 10,
        }}
        variants={{
          initial: {
            y: 20,
            rotateX: 90,
            opacity: 0,
            filter: "blur(4px)",
          },
          animate: {
            y: 0,
            rotateX: 0,
            opacity: 1,
            filter: "blur(0px)",
          },
          exit: {
            y: -20,
            rotateX: -90,
            opacity: 0,
            filter: "blur(4px)",
          },
        }}
      >
        <span>In Record Time.</span>
        <span>With Full Customization.</span>
        <span>For Any Discord Server.</span>
        <span>Built By Experts.</span>
        <span>With Lifetime Support.</span>
      </TextLoop>
    </h1>
    <p className="mt-4 text-gray-400 text-sm sm:text-base md:text-lg max-w-xl mx-auto mb-10">
      Discord bots skillfully designed and crafted by NTM DEV creators.
      The perfect team to develop your BOT.
    </p>
  </div>
</section>

    </div>
  );
}
