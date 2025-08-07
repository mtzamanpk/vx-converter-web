 'use client'
 import { motion } from 'framer-motion'
 import Section from './Section'

const steps = [
  { number: '01', title: 'Add Bot', description: 'Invite VX Converter to your Discord server.' },
  { number: '02', title: 'Share Link', description: 'Paste a social media link in any channel.' },
  { number: '03', title: 'Auto-Convert', description: 'VX Converter instantly transforms the link into a rich embed.' },
]

export default function HowItWorks() {
  return (
    <Section id="how-it-works" className="px-4">
      <div className="mx-auto w-full max-w-7xl">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-5xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600"
        >
          How It Works
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="text-center"
            >
              <div className="text-4xl font-bold text-purple-500 mb-4">{step.number}</div>
              <h3 className="text-2xl font-semibold mb-2">{step.title}</h3>
              <p className="text-muted">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  )
}

