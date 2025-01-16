import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'VX Converter - Transform Social Media Links for Discord',
  description: 'VX Converter turns Twitter, TikTok, and Instagram links into rich Discord embeds instantly.',
  icons: {
    icon: [
      { url: '/VX_Converter_logo.jpg', sizes: '32x32', type: 'image/jpg' },
      { url: '/VX_Converter_logo.jpg', sizes: '192x192', type: 'image/jpg' },
      { url: '/VX_Converter_logo.jpg', sizes: '512x512', type: 'image/jpg' },
    ],
    shortcut: '/VX_Converter_logo.jpg',
    apple: '/VX_Converter_logo.jpg',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-black text-white`}>
        <div className="fixed inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
        <div className="relative">{children}</div>
      </body>
    </html>
  )
}

