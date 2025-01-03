'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowRight, LinkIcon, Zap, Shield, Sparkles } from 'lucide-react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useState, useEffect } from 'react'

export default function Home() {
  const { scrollYProgress } = useScroll()
  const yRange = useTransform(scrollYProgress, [0, 1], [0, 100])
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 text-white overflow-hidden">
      <motion.div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0) 50%)`,
        }}
      />
      <motion.header 
        className="px-4 lg:px-6 h-14 flex items-center relative z-10"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Link className="flex items-center justify-center group" href="#">
          <LinkIcon className="h-6 w-6 mr-2 group-hover:text-blue-400 transition-colors" />
          <span className="font-bold text-xl group-hover:text-blue-400 transition-colors">VX Converter</span>
        </Link>
      </motion.header>
      <main className="flex-1 relative">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 relative overflow-hidden">
          <motion.div 
            className="absolute inset-0 opacity-50"
            style={{
              backgroundImage: 'url("/placeholder.svg?height=1080&width=1920")',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              y: yRange,
            }}
          />
          <div className="container px-4 md:px-6 relative z-10">
            <div className="flex flex-col items-center space-y-4 text-center">
              <motion.div 
                className="space-y-2"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <h1 className="text-4xl font-extrabold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl/none">
                  Embed Links in Discord, <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">Instantly</span>
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-200 md:text-xl lg:text-2xl">
                  Transform your Discord experience with our bot. Convert links to rich embeds with just a command.
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <Button className="inline-flex h-14 items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-purple-600 px-10 text-lg font-medium text-white shadow-lg transition-all hover:shadow-blue-500/25 hover:from-blue-600 hover:to-purple-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 disabled:pointer-events-none disabled:opacity-50">
                  Add to Discord
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </motion.div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-900 relative overflow-hidden">
          <motion.div 
            className="absolute inset-0 opacity-25"
            style={{
              backgroundImage: 'url("/placeholder.svg?height=1080&width=1920")',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              y: yRange,
            }}
          />
          <div className="container px-4 md:px-6 relative z-10">
            <motion.h2 
              className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Key Features
            </motion.h2>
            <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3">
              {[
                { icon: Zap, title: "Instant Conversion", description: "Convert links to embeds in seconds without the use of any commands!" },
                { icon: LinkIcon, title: "Support for Multiple Sites", description: "Works with a wide range of websites and platforms such as TikTok, Twitter/X, and Instagram (Sometimes)." },
                { icon: Shield, title: "Safe and Secure", description: "Your data and Discord server's security is our top priority." }
              ].map((feature, index) => (
                <motion.div 
                  key={index}
                  className="flex flex-col items-center space-y-2 p-6 bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 group"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    <feature.icon className="h-12 w-12 mb-4 text-blue-400 group-hover:text-purple-400 transition-colors" />
                  </motion.div>
                  <h3 className="text-xl font-bold group-hover:text-blue-400 transition-colors">{feature.title}</h3>
                  <p className="text-gray-300 text-center group-hover:text-white transition-colors">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

      </main>
      <motion.footer 
        className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t border-gray-700"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        <p className="text-xs text-gray-400">
          © 2025 VX Converter Bot. All rights reserved.
        </p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4 text-gray-400 hover:text-blue-400 transition-colors" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs hover:underline underline-offset-4 text-gray-400 hover:text-blue-400 transition-colors" href="#">
            Privacy
          </Link>
        </nav>
      </motion.footer>
    </div>
  )
}