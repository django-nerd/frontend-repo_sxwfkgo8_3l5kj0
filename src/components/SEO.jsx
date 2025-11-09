import { useEffect } from 'react'

export default function SEO() {
  useEffect(() => {
    const set = (name, content) => {
      let el = document.querySelector(`meta[name="${name}"]`)
      if (!el) {
        el = document.createElement('meta')
        el.setAttribute('name', name)
        document.head.appendChild(el)
      }
      el.setAttribute('content', content)
    }

    document.title = 'Aryan Dev — Pastel Portfolio'
    set('description', 'Elegant, minimal, pastel-themed portfolio of Aryan Dev with glassmorphism, Spline 3D, and calming motion.')
    set('viewport', 'width=device-width, initial-scale=1')
    set('theme-color', '#faf5ff')

    const og = (p, c) => {
      let el = document.querySelector(`meta[property="${p}"]`)
      if (!el) {
        el = document.createElement('meta')
        el.setAttribute('property', p)
        document.head.appendChild(el)
      }
      el.setAttribute('content', c)
    }
    og('og:title', 'Aryan Dev — Pastel Portfolio')
    og('og:description', 'Elegant, minimal portfolio with Spline and glassy UI')
    og('og:type', 'website')
  }, [])

  return null
}
