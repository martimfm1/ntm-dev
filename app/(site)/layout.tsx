
import './styles/globals.css'
import { Inter, Space_Grotesk } from 'next/font/google'
import Particles from "@/components/Particles/Particles";
import Navbar from "@/components/ui/navbar";
import Loader from '@/components/ui/loader';
import { Clock } from "@/components/ui/clock";;
import { Github } from 'lucide-react';
import Link from "next/link";

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const grotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-grotesk',
  display: 'swap',
})

export const metadata = {
  title: 'NTM DEV | Quality Bots',
  description: 'NTM DEV',
  icons: {
    icon: './favicon.png',
  },
}

export default function SiteLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <html lang="en" className={`${inter.variable} ${grotesk.variable}`}>
      <body className="bg-stone-950">
        <Loader>
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
          <header className='z-999 text-amber-50 grid '>
            <div className='cursor-none fixed top-10 left-10 z-50'>
              <Clock/>
            </div>
            <Navbar/>
            <div className="fixed top-10 right-10 z-50">
              <Link href="https://github.com/ntm-dev-organization"  className='cursor-none w-6 h-6 text-amber-50 hover:text-slate-300'>
                <Github/>
              </Link>
            </div>
          </header>
          {children}
        </Loader>
      </body>
    </html>
  )
}
