'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <motion.header
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed w-full bg-black bg-opacity-50 backdrop-blur-md z-50"
    >
      <nav className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="/VX_Converter_logo.jpg"
              alt="VX Converter Logo"
              width={40}
              height={40}
              className="rounded-full"
            />
            <span className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
              VX Converter
            </span>
          </Link>
          <div className="hidden md:flex space-x-6">
            <Link href="#features" className="hover:text-purple-400 transition-colors">Features</Link>
            <Link href="#how-it-works" className="hover:text-purple-400 transition-colors">How It Works</Link>
            <Link href="#demo" className="hover:text-purple-400 transition-colors">Demo</Link>
          </div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="hidden md:block bg-gradient-to-r from-purple-500 to-pink-500 px-6 py-2 rounded-full font-semibold"
          >
            Add to Discord
          </motion.button>
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden mt-4 flex flex-col space-y-4"
          >
            <Link href="#features" className="hover:text-purple-400 transition-colors">Features</Link>
            <Link href="#how-it-works" className="hover:text-purple-400 transition-colors">How It Works</Link>
            <Link href="#demo" className="hover:text-purple-400 transition-colors">Demo</Link>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-purple-500 to-pink-500 px-6 py-2 rounded-full font-semibold"
            >
              Add to Discord
            </motion.button>
          </motion.div>
        )}
      </nav>
    </motion.header>
  )
}

