import { useEffect, useMemo, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { Music2, VolumeX } from 'lucide-react'

export default function MusicToggle() {
  const [enabled, setEnabled] = useState(false)
  const [volume, setVolume] = useState(0.4)
  const audioRef = useRef(null)

  // Use a calm, copyright-safe ambient loop
  const src = useMemo(
    () =>
      'https://cdn.pixabay.com/download/audio/2021/09/30/audio_2e8b1f0de0.mp3?filename=ambient-piano-112191.mp3',
    []
  )

  useEffect(() => {
    const audio = new Audio(src)
    audio.loop = true
    audio.volume = volume
    audioRef.current = audio
    return () => {
      try {
        audio.pause()
        audio.src = ''
      } catch {}
    }
  }, [src])

  useEffect(() => {
    if (!audioRef.current) return
    audioRef.current.volume = volume
  }, [volume])

  useEffect(() => {
    const a = audioRef.current
    if (!a) return
    if (enabled) {
      a.play().catch(() => setEnabled(false))
    } else {
      a.pause()
    }
  }, [enabled])

  return (
    <div className="flex items-center gap-3">
      <motion.button
        whileTap={{ scale: 0.95 }}
        aria-label={enabled ? 'Pause background music' : 'Play background music'}
        onClick={() => setEnabled((v) => !v)}
        className="inline-flex items-center gap-2 rounded-xl px-3 py-2 bg-white/70 backdrop-blur border border-white/70 text-gray-800 shadow-sm hover:bg-white"
      >
        {enabled ? <Music2 size={16} /> : <VolumeX size={16} />}
        <span className="text-sm hidden sm:inline">{enabled ? 'Music On' : 'Music Off'}</span>
      </motion.button>
      <div className="hidden md:flex items-center gap-2">
        <input
          type="range"
          min={0}
          max={1}
          step={0.01}
          value={volume}
          onChange={(e) => setVolume(parseFloat(e.target.value))}
          aria-label="Music volume"
          className="w-28 accent-purple-500"
        />
      </div>
    </div>
  )
}
