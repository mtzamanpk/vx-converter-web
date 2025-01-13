'use client'
import { motion } from 'framer-motion'
import { LinkIcon, EyeIcon, BoltIcon } from '@heroicons/react/24/outline'

const features = [
  {
    icon: LinkIcon,
    title: 'Multi-Platform Support',
    description: 'Seamlessly convert links from Twitter, TikTok, and Instagram.',
  },
  {
    icon: EyeIcon,
    title: 'Rich Embeds',
    description: 'Transform plain links into visually stunning Discord embeds.',
  },
  {
    icon: BoltIcon,
    title: 'Lightning Fast',
    description: 'Experience instant conversions with our high-performance bot.',
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
}

export default function Features() {
  return (
    <section id="features" className="py-20 px-4 bg-gray-900">
      <div className="container mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-5xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600"
        >
          Powerful Features
        </motion.h2>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-all"
            >
              <feature.icon className="w-12 h-12 text-purple-500 mb-4" />
              <h3 className="text-2xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-300">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

