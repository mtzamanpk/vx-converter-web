 'use client'
 import { motion } from 'framer-motion'
 import Section from './Section'

const stats = [
  { label: 'Servers using VX Converter', value: '5,000+' },
  { label: 'Links processed', value: '2,500,000+' },
  { label: 'Average response time', value: '120 ms' },
  { label: 'Uptime', value: '99.9%' },
]

export default function Stats() {
  return (
    <Section id="stats" className="px-4">
      <div className="mx-auto w-full max-w-7xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-5xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600"
        >
          Trusted Performance
        </motion.h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="rounded-xl bg-surface/60 border border-rose-500/20 p-6 text-center shadow-lg"
            >
              <div className="text-3xl md:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-rose-400 to-amber-400">{item.value}</div>
              <div className="mt-2 text-sm md:text-base text-muted">{item.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  )
}


