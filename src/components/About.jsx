import React from 'react'

function About() {
  return (
    <section id="about" className="relative py-20 bg-slate-900">
      <div className="mx-auto max-w-5xl px-6">
        <div className="grid md:grid-cols-[1.1fr_.9fr] gap-10 items-center">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">About</h2>
            <p className="text-white/80 leading-relaxed">
              I’m an independent game developer focusing on small, expressive projects. My work explores tactile controls, reactive music systems, and playful UI. I love building toys that grow into worlds.
            </p>
            <p className="text-white/70 leading-relaxed mt-4">
              I’ve shipped jam games, prototypes, and a few polished gems across web and desktop. When I’m not building, I’m sketching mechanics, recording field audio, or modding controllers.
            </p>
          </div>
          <div className="rounded-xl overflow-hidden border border-white/10 bg-white/5 p-6">
            <ul className="space-y-3 text-white/80">
              <li>• Engine: Godot / Unity</li>
              <li>• Favorite genres: cozy sims, rhythm, systemic sandboxes</li>
              <li>• Tools: Blender, Aseprite, Ableton Live</li>
              <li>• Currently exploring: generative input and haptics</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
