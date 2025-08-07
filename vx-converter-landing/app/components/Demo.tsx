 'use client'
 import { useState } from 'react'
 import { motion } from 'framer-motion'
 import Image from 'next/image'
 import Section from './Section'

const demoSteps = [
  {
    title: 'Original Link',
    content: 'https://x.com/X/status/1875989945401372875',
    image: '/Step_1.png'
  },
  {
    title: 'VX Converter Processing',
    content: 'VX Converter detects and processes the link...',
    image: '/Step_2.png'
  },
  {
    title: 'Rich Embed Result',
    content: 'The tweet is now displayed as a rich embed in Discord',
    image: '/Step_3.png'
  }
]

export default function Demo() {
  const [currentStep, setCurrentStep] = useState(0)

  const nextStep = () => {
    setCurrentStep((prev) => (prev + 1) % demoSteps.length)
  }

  return (
    <Section id="demo" surface className="px-4">
      <div className="mx-auto w-full max-w-7xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-5xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600"
        >
          See VX Converter in Action
        </motion.h2>
        <div className="bg-surface p-8 rounded-lg shadow-xl border border-border/60">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h3 className="text-2xl font-semibold mb-4">{demoSteps[currentStep].title}</h3>
              <p className="text-muted mb-4">{demoSteps[currentStep].content}</p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={nextStep}
                className="bg-gradient-to-r from-purple-500 to-pink-500 px-6 py-2 rounded-full font-semibold shadow-lg shadow-purple-500/20"
              >
                Next Step
              </motion.button>
            </div>
            <div className="md:w-1/2">
              <Image
                src={demoSteps[currentStep].image || "/placeholder.svg"}
                alt={demoSteps[currentStep].title}
                width={1200}
                height={675}
                quality={90}
                className="rounded-lg shadow-lg"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </div>
    </Section>
  )
}

