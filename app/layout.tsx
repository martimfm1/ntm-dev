import { head } from "motion/react-client";
import { Inter, Poppins } from "next/font/google";

export const metadata = {
  title: 'NTM DEV | Quality Bots',
  description: 'NTM DEV',
  icons: {
    icon: './favicon.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-stone-950">
        {children}
      </body>
    </html>
  )
}
