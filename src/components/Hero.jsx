import { motion } from 'framer-motion'
import Spline from '@splinetool/react-spline'

export default function Hero({ onExploreClick }) {
  return (
    <section id="hero" className="relative min-h-[80vh] md:min-h-screen overflow-hidden">
      {/* Spline background */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/kqB-rdL4TCJ7pyGb/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Pastel gradient veil for dreamy vibe */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/40 via-pink-50/40 to-purple-50/40 pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-28 pb-20 md:pt-40 md:pb-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: 'easeOut' }}
          className="backdrop-blur-xl bg-white/30 border border-white/40 shadow-2xl rounded-2xl p-8 md:p-12 text-center"
        >
          <h1 className="text-4xl md:text-6xl font-semibold tracking-tight text-gray-800">
            Hi, I’m <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-purple-600">Aryan Dev</span>
          </h1>
          <p className="mt-4 text-base md:text-lg text-gray-700">
            Creative Mind | Tech Enthusiast | Dream Builder
          </p>
          <div className="mt-8 flex items-center justify-center gap-4">
            <a
              href="#projects"
              onClick={onExploreClick}
              className="inline-flex items-center justify-center rounded-xl px-6 py-3 bg-gradient-to-r from-pink-400 to-purple-500 text-white shadow-lg shadow-pink-200/60 hover:shadow-purple-200/70 transition-all"
            >
              Explore My Work
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-xl px-6 py-3 bg-white/70 backdrop-blur border border-white/60 text-gray-800 hover:bg-white/80 transition-all shadow"
            >
              Contact Me
            </a>
          </div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="mt-16 flex justify-center"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          <div className="w-6 h-10 rounded-full border-2 border-white/70 bg-white/40 backdrop-blur flex items-start justify-center">
            <motion.div
              className="w-1 h-2 bg-purple-500 rounded-full mt-1"
              animate={{ y: [0, 22, 0] }}
              transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
