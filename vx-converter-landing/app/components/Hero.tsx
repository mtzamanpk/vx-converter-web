"use client"
import { motion } from "framer-motion"
import Image from "next/image"
import Section from "./Section"

export default function Hero() {
  return (
    <Section className="pt-32 pb-16 px-4">
      <div className="mx-auto w-full max-w-7xl flex flex-col lg:flex-row items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="lg:w-1/2 relative z-10"
        >
          <h1 className="text-5xl lg:text-7xl font-bold mb-6">
            Transform
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600"
            >
              Social Links
            </motion.span>
            for Discord
          </h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.5 }}
            className="text-xl mb-8 text-gray-300"
          >
            VX Converter instantly turns Twitter, TikTok, and Instagram links into rich Discord embeds. Elevate your
            server&apos;s content sharing experience!
          </motion.p>
          <div className="flex flex-col sm:flex-row gap-4">
            <motion.a
              href="https://discord.com/oauth2/authorize?client_id=1162090895898857662&permissions=223232&integration_type=0&scope=bot"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-purple-500 to-pink-500 px-8 py-3 rounded-full text-lg font-semibold transition-all shadow-lg hover:shadow-xl inline-block shadow-purple-500/20"
            >
              Add to Your Server
            </motion.a>
            <motion.a
              href="#demo"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 rounded-full text-lg font-semibold transition-colors border border-purple-600/40 text-gray-200 hover:bg-purple-600/10 inline-block text-center"
            >
              Watch Demo
            </motion.a>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="lg:w-1/2 mt-10 lg:mt-0"
        >
          <div className="relative overflow-hidden rounded-lg shadow-2xl">
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300, damping: 24 }}
              className="relative will-change-transform origin-center"
            >
              <Image
                src="/vx-demo.gif"
                alt="VX Converter Demo"
                width={1200}
                height={675}
                quality={90}
                className="rounded-lg"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-25 rounded-lg blur-[2px]"></div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </Section>
  )
}

