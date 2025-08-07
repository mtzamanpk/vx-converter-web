"use client"
import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { useState } from "react"

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
            <span className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-500 via-purple-500 to-cyan-400">
              VX Converter
            </span>
          </Link>
          <div className="hidden md:flex space-x-6">
            <Link href="#features" className="hover:text-fuchsia-400 transition-colors">
              Features
            </Link>
            <Link href="#stats" className="hover:text-fuchsia-400 transition-colors">
              Stats
            </Link>
            <Link href="#how-it-works" className="hover:text-fuchsia-400 transition-colors">
              How It Works
            </Link>
            <Link href="#demo" className="hover:text-fuchsia-400 transition-colors">
              Demo
            </Link>
            <Link href="#faq" className="hover:text-fuchsia-400 transition-colors">
              FAQ
            </Link>
          </div>
          <motion.a
            href="https://discord.com/oauth2/authorize?client_id=1162090895898857662&permissions=223232&integration_type=0&scope=bot"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="hidden md:inline-block bg-gradient-to-r from-fuchsia-600 to-violet-600 px-6 py-2 rounded-full font-semibold shadow-lg shadow-fuchsia-500/20"
          >
            Add to Discord
          </motion.a>
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
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
            <Link href="#features" className="hover:text-purple-400 transition-colors">
              Features
            </Link>
            <Link href="#stats" className="hover:text-fuchsia-400 transition-colors">Stats</Link>
            <Link href="#how-it-works" className="hover:text-fuchsia-400 transition-colors">How It Works</Link>
            <Link href="#demo" className="hover:text-fuchsia-400 transition-colors">Demo</Link>
            <Link href="#faq" className="hover:text-fuchsia-400 transition-colors">FAQ</Link>
            <motion.a
              href="https://discord.com/oauth2/authorize?client_id=1162090895898857662&permissions=223232&integration_type=0&scope=bot"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-fuchsia-600 to-violet-600 px-6 py-2 rounded-full font-semibold text-center shadow-lg shadow-fuchsia-500/20"
            >
              Add to Discord
            </motion.a>
          </motion.div>
        )}
      </nav>
    </motion.header>
  )
}

