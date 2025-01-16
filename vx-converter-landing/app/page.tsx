import Header from './components/Header'
import Hero from './components/Hero'
import Features from './components/Features'
import Demo from './components/Demo'
import HowItWorks from './components/HowItWorks'
import CTA from './components/CTA'
import Support from './components/Support'
import Footer from './components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Header />
      <Hero />
      <Features />
      <Demo />
      <HowItWorks />
      <CTA />
      <Support />
      <Footer />
    </main>
  )
}

