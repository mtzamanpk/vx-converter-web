'use client'
import { motion } from 'framer-motion'

const stats = [
  { label: 'Servers using VX Converter', value: '5,000+' },
  { label: 'Links processed', value: '2,500,000+' },
  { label: 'Average response time', value: '120 ms' },
  { label: 'Uptime', value: '99.9%' },
]

export default function Stats() {
  return (
    <section id="stats" className="py-20 px-4">
      <div className="container mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-5xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-500 via-purple-500 to-cyan-400"
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
              className="rounded-xl bg-gray-900/60 border border-fuchsia-600/20 p-6 text-center shadow-lg"
            >
              <div className="text-3xl md:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-500 via-purple-500 to-cyan-400">{item.value}</div>
              <div className="mt-2 text-sm md:text-base text-gray-300">{item.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}


