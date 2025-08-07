import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: 'VX Converter — Rich Social Embeds for Discord',
    template: '%s | VX Converter',
  },
  description:
    'VX Converter turns X/Twitter, TikTok, and Instagram links into rich Discord embeds instantly. Safer, cleaner, and faster sharing for your server.',
  keywords: [
    'Discord bot',
    'link unroller',
    'Twitter embeds',
    'TikTok embeds',
    'Instagram embeds',
    'Discord',
    'VX Converter',
  ],
  applicationName: 'VX Converter',
  metadataBase: new URL('https://vx-converter.example'),
  openGraph: {
    type: 'website',
    title: 'VX Converter — Rich Social Embeds for Discord',
    description:
      'Transform social links into beautiful, safe Discord embeds. Supports X/Twitter, TikTok, and Instagram.',
    url: 'https://vx-converter.example',
    images: [{ url: '/VX_Converter_logo.jpg', width: 1200, height: 630, alt: 'VX Converter' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'VX Converter — Rich Social Embeds for Discord',
    description:
      'Transform social links into beautiful, safe Discord embeds. Supports X/Twitter, TikTok, and Instagram.',
    images: ['/VX_Converter_logo.jpg'],
  },
  icons: {
    icon: [
      { url: '/VX_Converter_logo.jpg', sizes: '32x32', type: 'image/jpg' },
      { url: '/VX_Converter_logo.jpg', sizes: '192x192', type: 'image/jpg' },
      { url: '/VX_Converter_logo.jpg', sizes: '512x512', type: 'image/jpg' },
    ],
    shortcut: '/VX_Converter_logo.jpg',
    apple: '/VX_Converter_logo.jpg',
  },
  themeColor: '#000000',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-black text-white`}>
        <div className="pointer-events-none fixed inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
        <div className="relative">{children}</div>
      </body>
    </html>
  )
}

