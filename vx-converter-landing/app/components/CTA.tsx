 'use client'
 import { motion } from 'framer-motion'
 import Section from './Section'

export default function CTA() {
  return (
    <Section className="px-4">
      <div className="mx-auto w-full max-w-4xl text-center">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-5xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600"
        >
          Ready to Transform Your Discord?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-xl mb-8 text-muted"
        >
          Add VX Converter to your server today and elevate your content sharing experience!
        </motion.p>
        <a
                href="https://discord.com/oauth2/authorize?client_id=1162090895898857662&permissions=223232&integration_type=0&scope=bot"
                target="_blank"
                rel="noopener noreferrer"
                >
                <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-gradient-to-r from-purple-500 to-pink-500 px-6 py-2 rounded-full font-semibold shadow-lg shadow-purple-500/20"
                >
                    Add to Discord
                </motion.button>
                </a>
      </div>
    </Section>
  )
}

