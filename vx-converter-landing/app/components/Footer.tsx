import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-gray-900 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 mb-4 md:mb-0">
            VX Converter
          </div>
          <nav className="flex flex-wrap justify-center md:justify-end gap-6">
            <Link href="#features" className="text-gray-300 hover:text-purple-400 transition-colors">
              Features
            </Link>
            <Link href="#how-it-works" className="text-gray-300 hover:text-purple-400 transition-colors">
              How It Works
            </Link>
            <Link 
              href="https://discord.gg/entmj9fGxH" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-300 hover:text-purple-400 transition-colors"
            >
              Discord
            </Link>
            <Link 
              href="https://docs.google.com/document/d/1lDNjxq60lZmUBwi0RXHSKhAAoRyc1se35gkNd8d2ZSk/edit?usp=sharing" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-purple-400 transition-colors"
            >
              Privacy Policy
            </Link>
            <Link 
              href="https://docs.google.com/document/d/1EfyWvaYlDk6xzF7MqABlBBl-L9nE2S9ZwN9uA-ab5F8/edit?usp=sharing" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-purple-400 transition-colors"
            >
              Terms of Service
            </Link>
          </nav>
        </div>
        <div className="mt-8 text-center text-gray-400 text-sm">
          © {new Date().getFullYear()} VX Converter. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

