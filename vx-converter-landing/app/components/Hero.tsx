"use client"
import { motion } from "framer-motion"
import Image from "next/image"

export default function Hero() {
  return (
    <section className="pt-32 pb-20 px-4">
      <div className="container mx-auto flex flex-col lg:flex-row items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="lg:w-1/2"
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
          <motion.a
            href="https://discord.com/oauth2/authorize?client_id=1162090895898857662&permissions=223232&integration_type=0&scope=bot"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-purple-500 to-pink-500 px-8 py-3 rounded-full text-lg font-semibold transition-all shadow-lg hover:shadow-xl inline-block"
          >
            Add to Your Server
          </motion.a>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="lg:w-1/2 mt-10 lg:mt-0"
        >
          <motion.div whileHover={{ scale: 1.05 }} transition={{ type: "spring", stiffness: 300 }} className="relative">
            <Image
              src="/vx-demo.gif"
              alt="VX Converter Demo"
              width={1200}
              height={675}
              quality={90}
              className="rounded-lg shadow-2xl"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 opacity-20 rounded-lg"></div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

