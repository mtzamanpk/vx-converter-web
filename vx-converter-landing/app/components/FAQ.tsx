'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'

type QA = { q: string; a: string }

const faqs: QA[] = [
  {
    q: 'Which platforms are supported?',
    a: 'X/Twitter, TikTok, and Instagram. More platforms are planned.',
  },
  {
    q: 'Is there any cost to use VX Converter?',
    a: 'The core bot is free to add. Advanced tiers may be introduced later.',
  },
  {
    q: 'Do I need special permissions to add the bot?',
    a: 'You need permission to manage integrations or invite bots in your Discord server.',
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section id="faq" className="py-20 px-4">
      <div className="container mx-auto max-w-3xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-5xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-500 via-purple-500 to-cyan-400"
        >
          Frequently Asked Questions
        </motion.h2>

        <div className="space-y-4">
          {faqs.map((item, i) => {
            const isOpen = openIndex === i
            return (
              <div key={item.q} className="rounded-lg border border-gray-800 bg-gray-900/60">
                <button
                  className="w-full text-left px-5 py-4 flex items-center justify-between"
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  aria-expanded={isOpen}
                >
                  <span className="font-semibold text-white">{item.q}</span>
                  <span className="ml-4 text-fuchsia-400">{isOpen ? '-' : '+'}</span>
                </button>
                <div
                  className={[
                    'grid transition-all duration-300 ease-out',
                    isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0',
                  ].join(' ')}
                >
                  <div className="overflow-hidden px-5 pb-4 text-gray-300">{item.a}</div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}


