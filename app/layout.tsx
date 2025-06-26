import Particles from "@/components/Particles/Particles";
import { Inter, Space_Grotesk } from "next/font/google";

export const metadata = {
  title: 'NTM DEV | Quality Bots',
  description: 'NTM DEV',
  icons: {
    icon: './favicon.png',
  },
}

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const grotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-grotesk',
  display: 'swap',
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${grotesk.variable}`}>
      <body className="bg-stone-950">
          <div className="fixed top-0 left-0 w-full h-[140vh] -z-10">
            <Particles
              particleColors={["#ffffff", "#ffffff"]}
              particleCount={800}
              particleSpread={20}
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
  )
}
