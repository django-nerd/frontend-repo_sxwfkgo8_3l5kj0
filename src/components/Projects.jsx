import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { projects as defaultProjects } from '../data/content'

function ProjectCard({ project, onOpen }) {
  return (
    <motion.button
      whileHover={{ y: -6 }}
      className="text-left rounded-2xl overflow-hidden bg-white/70 backdrop-blur border border-white/60 shadow hover:shadow-xl transition-shadow"
      onClick={() => onOpen(project)}
    >
      <div className="relative">
        <img src={project.image} alt={project.title} className="w-full h-56 object-cover" />
        <div className="absolute inset-0 ring-1 ring-inset ring-white/60" />
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-gray-800">{project.title}</h3>
        <div className="mt-2 flex flex-wrap gap-2">
          {project.tags.map((t) => (
            <span key={t} className="text-xs px-2 py-1 rounded-full bg-pink-100 text-pink-700">
              {t}
            </span>
          ))}
        </div>
        <div className="mt-3 text-sm text-gray-600">View Details →</div>
      </div>
    </motion.button>
  )
}

export default function Projects({ items = defaultProjects }) {
  const [active, setActive] = useState(null)

  return (
    <section id="projects" className="py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-end justify-between">
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-800">Projects</h2>
        </div>

        <div className="mt-10 columns-1 sm:columns-2 lg:columns-3 gap-6 [column-fill:_balance]">
          {items.map((p) => (
            <div key={p.id} className="mb-6 break-inside-avoid">
              <ProjectCard project={p} onOpen={setActive} />
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {active && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActive(null)}
          >
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 20, opacity: 0 }}
              transition={{ type: 'spring', stiffness: 160, damping: 20 }}
              className="max-w-3xl w-full bg-white/80 backdrop-blur rounded-2xl border border-white p-6 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="grid md:grid-cols-2 gap-6">
                <img src={active.image} alt={active.title} className="w-full h-64 object-cover rounded-xl" />
                <div>
                  <h3 className="text-2xl font-semibold text-gray-800">{active.title}</h3>
                  <p className="mt-2 text-gray-700">{active.description}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {active.tech.map((t) => (
                      <span key={t} className="text-xs px-2 py-1 rounded-full bg-purple-100 text-purple-700">
                        {t}
                      </span>
                    ))}
                  </div>
                  <div className="mt-6 flex gap-3">
                    <a href={active.links.visit} className="px-4 py-2 rounded-xl bg-gradient-to-r from-pink-400 to-purple-500 text-white">Visit</a>
                    <a href={active.links.source} className="px-4 py-2 rounded-xl bg-white border">Source</a>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
