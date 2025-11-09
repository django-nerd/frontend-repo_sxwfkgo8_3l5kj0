import { useMemo, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { artworks as defaultArtworks } from '../data/content'
import { Search, Filter } from 'lucide-react'

function Card({ item, onOpen }) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      className="relative overflow-hidden rounded-2xl bg-white/70 backdrop-blur border border-white/60 shadow hover:shadow-xl transition"
    >
      <img src={item.image} alt={item.title} className="w-full h-64 object-cover" />
      <div className="absolute inset-0 ring-1 ring-inset ring-white/60" />
      <div className="p-4">
        <div className="flex items-center justify-between">
          <h3 className="font-medium text-gray-800">{item.title}</h3>
          <button
            className="text-xs px-2 py-1 rounded-full bg-purple-100 text-purple-700"
            onClick={() => onOpen(item)}
          >
            View Prompt
          </button>
        </div>
        <div className="mt-2 flex flex-wrap gap-2">
          {item.tags.map((t) => (
            <span key={t} className="text-xs px-2 py-1 rounded-full bg-pink-100 text-pink-700">
              {t}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

export default function Gallery({ items = defaultArtworks }) {
  const [query, setQuery] = useState('')
  const [tag, setTag] = useState('all')
  const [active, setActive] = useState(null)

  const tags = useMemo(() => {
    const t = new Set(['all'])
    items.forEach((i) => i.tags.forEach((x) => t.add(x)))
    return Array.from(t)
  }, [items])

  const filtered = useMemo(() => {
    return items.filter((i) => {
      const matchesQuery = i.title.toLowerCase().includes(query.toLowerCase()) || i.prompt.toLowerCase().includes(query.toLowerCase())
      const matchesTag = tag === 'all' || i.tags.includes(tag)
      return matchesQuery && matchesTag
    })
  }, [items, query, tag])

  return (
    <section id="gallery" className="py-20 md:py-28 bg-gradient-to-b from-white/50 to-transparent">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-800">AI Image Gallery</h2>

          <div className="flex flex-col sm:flex-row gap-3">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500" />
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search by title or prompt..."
                className="pl-9 pr-3 py-2 rounded-xl bg-white/70 backdrop-blur border border-white/70 text-gray-800 placeholder:text-gray-500"
              />
            </div>

            <div className="relative">
              <Filter className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500" />
              <select
                value={tag}
                onChange={(e) => setTag(e.target.value)}
                className="appearance-none pl-9 pr-8 py-2 rounded-xl bg-white/70 backdrop-blur border border-white/70 text-gray-800"
              >
                {tags.map((t) => (
                  <option key={t} value={t}>
                    {t}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((i) => (
            <Card key={i.id} item={i} onOpen={setActive} />
          ))}
        </div>
      </div>

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
              className="max-w-3xl w-full bg-white/85 backdrop-blur rounded-2xl border border-white p-6 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="grid md:grid-cols-2 gap-6">
                <img src={active.image} alt={active.title} className="w-full h-64 object-cover rounded-xl" />
                <div>
                  <h3 className="text-2xl font-semibold text-gray-800">{active.title}</h3>
                  <div className="mt-2 text-xs text-gray-600">Model: {active.model} • Seed: {active.seed} • AR: {active.ar} • {active.style.join(', ')}</div>
                  <div className="mt-4 p-3 rounded-xl bg-gray-50 border text-sm text-gray-700 max-h-40 overflow-auto">
                    {active.prompt}
                  </div>
                  <div className="mt-4 flex gap-3">
                    <button
                      onClick={() => navigator.clipboard.writeText(active.prompt)}
                      className="px-4 py-2 rounded-xl bg-purple-100 text-purple-700"
                    >
                      Copy Prompt
                    </button>
                    <a href={active.image} download className="px-4 py-2 rounded-xl bg-gradient-to-r from-pink-400 to-purple-500 text-white">
                      Download
                    </a>
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
