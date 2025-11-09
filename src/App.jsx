import { useEffect, useRef } from 'react'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Gallery from './components/Gallery'
import SkillsContact from './components/SkillsContact'
import MusicToggle from './components/MusicToggle'
import SEO from './components/SEO'

function useScrollParallax() {
  const ref = useRef(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const onScroll = () => {
      const y = window.scrollY
      el.style.background =
        'radial-gradient(1200px 600px at 50% ' +
        (30 + y * 0.02) +
        '%, rgba(236, 254, 255, 0.6), transparent), radial-gradient(900px 500px at 80% ' +
        (10 + y * 0.01) +
        '%, rgba(250, 232, 255, 0.5), transparent)'
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
  return ref
}

function App() {
  const bgRef = useScrollParallax()

  return (
    <div className="min-h-screen text-gray-900 font-inter selection:bg-pink-200/60 selection:text-purple-900">
      <SEO />
      {/* dreamy pastel background */}
      <div ref={bgRef} className="fixed inset-0 -z-0 pointer-events-none" aria-hidden />

      {/* sticky header */}
      <header className="sticky top-0 z-40 backdrop-blur bg-white/40 border-b border-white/60">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="#hero" className="font-semibold text-gray-800">Aryan Dev</a>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#about" className="hover:text-purple-600">About</a>
            <a href="#projects" className="hover:text-purple-600">Projects</a>
            <a href="#gallery" className="hover:text-purple-600">AI Gallery</a>
            <a href="#contact" className="hover:text-purple-600">Contact</a>
          </nav>
          <div className="ml-4">
            <MusicToggle />
          </div>
        </div>
      </header>

      <main>
        <Hero />
        <About />
        <Projects />
        <Gallery />
        <SkillsContact />
      </main>
    </div>
  )
}

export default App
