import React from 'react'
import Spline from '@splinetool/react-spline'

function Hero() {
  return (
    <section className="relative min-h-[90vh] overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-900" />

      {/* Spline scene */}
      <div className="relative h-[80vh] md:h-[85vh] lg:h-[90vh]">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Headline overlay */}
      <div className="pointer-events-none absolute inset-0 flex items-center">
        <div className="mx-auto max-w-7xl w-full px-6">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-6xl font-black tracking-tight text-white drop-shadow-[0_0_30px_rgba(59,130,246,0.35)]">
              Playful Worlds. Handmade.
            </h1>
            <p className="mt-4 text-base md:text-lg text-white/80">
              I craft small but powerful game experiences—mixing experimental mechanics, cozy vibes, and a touch of chaos.
            </p>
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-slate-900 to-transparent" />
    </section>
  )
}

export default Hero
