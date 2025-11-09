import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { stats as defaultStats } from '../data/content'

export default function About({ stats = defaultStats }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="about" className="relative py-20 md:py-28 bg-gradient-to-b from-transparent to-white/50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative p-1 rounded-2xl bg-gradient-to-br from-pink-200/60 to-purple-200/60"
          >
            <div className="rounded-2xl overflow-hidden backdrop-blur-xl bg-white/50 border border-white/60">
              <img
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1200&auto=format&fit=crop"
                alt="Aryan Dev"
                className="w-full h-72 object-cover"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
            className=""
          >
            <h2 className="text-3xl md:text-4xl font-semibold text-gray-800">About Me</h2>
            <p className="mt-4 text-gray-700 leading-relaxed">
              I craft calming, cinematic digital experiences blending design, motion, and code. I love bringing ideas to life with subtle animations, pastel palettes, and glassy interfaces that feel premium yet friendly.
            </p>
            <div className="mt-8 grid grid-cols-3 gap-4">
              {stats.map((s) => (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, y: 10 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5 }}
                  className="text-center rounded-2xl bg-white/70 backdrop-blur border border-white/70 shadow-sm p-4"
                >
                  <div className="text-2xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-purple-600">
                    {s.value}+
                  </div>
                  <div className="text-xs uppercase tracking-wide text-gray-600">{s.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
