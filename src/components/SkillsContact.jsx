import { motion } from 'framer-motion'
import { skills as defaultSkills, socials } from '../data/content'
import { Github, Linkedin, MessageSquare } from 'lucide-react'
import { useState } from 'react'

export default function SkillsContact({ skills = defaultSkills }) {
  const [sent, setSent] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSent(true)
    setTimeout(() => setSent(false), 2500)
  }

  return (
    <section id="skills-contact" className="py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-6">
        {/* Skills */}
        <h2 className="text-3xl md:text-4xl font-semibold text-gray-800">Skills</h2>
        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((s) => (
            <div key={s.name} className="rounded-2xl p-5 bg-white/70 backdrop-blur border border-white/70 shadow">
              <div className="flex items-center justify-between">
                <span className="font-medium text-gray-800">{s.name}</span>
                <span className="text-sm text-gray-600">{s.level}%</span>
              </div>
              <div className="mt-3 h-2 w-full rounded-full bg-gray-100 overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${s.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.2, ease: 'easeOut' }}
                  className="h-full bg-gradient-to-r from-pink-400 to-purple-500"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Contact */}
        <div id="contact" className="mt-20 grid md:grid-cols-2 gap-10">
          <div>
            <h3 className="text-2xl font-semibold text-gray-800">Let’s build something beautiful</h3>
            <p className="mt-2 text-gray-700">Got an idea or a project in mind? I’d love to hear from you.</p>
            <div className="mt-6 flex gap-3">
              <a href={socials.github} className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white border"><Github size={16}/> GitHub</a>
              <a href={socials.linkedin} className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white border"><Linkedin size={16}/> LinkedIn</a>
              <a href={socials.discord} className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white border"><MessageSquare size={16}/> Discord</a>
            </div>
          </div>
          <form onSubmit={handleSubmit} className="rounded-2xl p-6 bg-white/70 backdrop-blur border border-white/70 shadow">
            <div className="grid grid-cols-1 gap-4">
              <input required placeholder="Name" className="px-4 py-3 rounded-xl bg-white border outline-none" />
              <input required type="email" placeholder="Email" className="px-4 py-3 rounded-xl bg-white border outline-none" />
              <textarea required placeholder="Message" rows="4" className="px-4 py-3 rounded-xl bg-white border outline-none" />
              <motion.button
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="mt-2 inline-flex items-center justify-center rounded-xl px-6 py-3 bg-gradient-to-r from-pink-400 to-purple-500 text-white shadow"
              >
                {sent ? 'Sent ✓' : 'Send'}
              </motion.button>
            </div>
          </form>
        </div>

        {/* Footer */}
        <footer className="mt-20 text-center text-sm text-gray-600">
          © {new Date().getFullYear()} Aryan Dev
        </footer>
      </div>
    </section>
  )
}
