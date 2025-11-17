import React, { useMemo, useState } from 'react'
import { Gamepad2, Star, ExternalLink, MousePointer2, BadgeInfo, Wand2, Play } from 'lucide-react'

const sampleProjects = [
  {
    id: 'starlit-archer',
    title: 'Starlit Archer',
    tagline: 'A tiny roguelite about drawing constellations to shoot.',
    cover: 'https://images.unsplash.com/photo-1542751110-97427bbecf20?q=80&w=1200&auto=format&fit=crop',
    links: { itch: '#', trailer: '#', docs: '#' },
    tags: ['roguelite', 'ink&stars', 'minute runs']
  },
  {
    id: 'moss-giants',
    title: 'Moss Giants',
    tagline: 'Grow a forest on friendly colossi. Calm strategy sandbox.',
    cover: 'https://images.unsplash.com/photo-1605979257913-1704eb7b6242?q=80&w=1200&auto=format&fit=crop',
    links: { itch: '#', trailer: '#', docs: '#' },
    tags: ['sandbox', 'peaceful', 'builder']
  },
  {
    id: 'neon-runner',
    title: 'Neon Runner',
    tagline: 'Rhythm endless runner that remixes your music.',
    cover: 'https://images.unsplash.com/photo-1538895490522-99967a35b7b3?q=80&w=1200&auto=format&fit=crop',
    links: { itch: '#', trailer: '#', docs: '#' },
    tags: ['rhythm', 'endless', 'custom music']
  }
]

function Projects() {
  const [selected, setSelected] = useState(null)

  const projects = useMemo(() => sampleProjects, [])

  return (
    <section id="projects" className="relative py-20 bg-slate-900">
      <div className="absolute inset-0 bg-[radial-gradient(600px_200px_at_20%_10%,rgba(99,102,241,0.12),transparent),radial-gradient(500px_180px_at_80%_20%,rgba(236,72,153,0.12),transparent)]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="flex items-center gap-3 mb-8">
          <Gamepad2 className="text-fuchsia-400" />
          <h2 className="text-2xl md:text-3xl font-bold text-white">Projects</h2>
        </div>

        {/* Interactive selector: cursor-as-controller */}
        <p className="text-white/70 max-w-2xl mb-6">Hover to charge, click to launch. Each card reacts like a mini gamepad—try flicking from the edges to "throw" the card open.</p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map(p => (
            <ProjectCard key={p.id} project={p} onOpen={() => setSelected(p)} />
          ))}
        </div>

        {selected && (
          <ProjectModal project={selected} onClose={() => setSelected(null)} />
        )}
      </div>
    </section>
  )
}

function ProjectCard({ project, onOpen }) {
  const [hover, setHover] = useState(false)
  const [energy, setEnergy] = useState(0)

  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => { setHover(false); setEnergy(0) }}
      onMouseMove={() => hover && setEnergy(e => Math.min(100, e + 2))}
      onClick={onOpen}
      className="group relative overflow-hidden rounded-xl border border-white/10 bg-white/5 backdrop-blur hover:shadow-[0_0_0_2px_rgba(255,255,255,0.08)] transition-all cursor-pointer"
      style={{
        transform: `translateZ(0)`
      }}
    >
      <div className="aspect-[4/3] overflow-hidden">
        <img src={project.cover} alt={project.title} className="w-full h-full object-cover group-hover:scale-[1.05] transition-transform duration-500" />
      </div>
      <div className="p-4">
        <div className="flex items-center justify-between">
          <h3 className="text-white font-semibold">{project.title}</h3>
          <div className="flex items-center text-amber-300/90 text-sm"><Star size={16} className="mr-1" /> Featured</div>
        </div>
        <p className="text-white/70 text-sm mt-1">{project.tagline}</p>
        <div className="mt-3 flex flex-wrap gap-2">
          {project.tags.map(t => (
            <span key={t} className="text-xs text-white/70 bg-white/10 px-2 py-1 rounded-md">{t}</span>
          ))}
        </div>
      </div>
      {/* Charge bar */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/10">
        <div className="h-full bg-fuchsia-400 transition-all" style={{ width: `${energy}%` }} />
      </div>
    </div>
  )
}

function ProjectModal({ project, onClose }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-6">
      <div className="absolute inset-0 bg-slate-900/70 backdrop-blur-sm" onClick={onClose} />
      <div className="relative w-full max-w-3xl overflow-hidden rounded-2xl border border-white/10 bg-slate-900">
        <div className="grid md:grid-cols-2 gap-0">
          <img src={project.cover} alt={project.title} className="w-full h-64 md:h-full object-cover" />
          <div className="p-6">
            <div className="flex items-center gap-3 mb-2">
              <Wand2 className="text-fuchsia-400" />
              <h3 className="text-xl font-bold text-white">{project.title}</h3>
            </div>
            <p className="text-white/70">{project.tagline}</p>

            <div className="mt-4 space-y-2 text-white/80 text-sm">
              <div className="flex items-center gap-2"><BadgeInfo size={16} /> Built with: Godot, WebGL, Pico-8</div>
              <div className="flex items-center gap-2"><MousePointer2 size={16} /> Controls: WASD / Mouse</div>
            </div>

            <div className="mt-5 grid grid-cols-3 gap-3">
              <a href={project.links.trailer} target="_blank" className="flex items-center justify-center gap-2 px-3 py-2 rounded-md bg-white/10 text-white hover:bg-white/20 transition-colors"><Play size={16} /> Trailer</a>
              <a href={project.links.itch} target="_blank" className="flex items-center justify-center gap-2 px-3 py-2 rounded-md bg-fuchsia-500/90 hover:bg-fuchsia-500 text-white transition-colors"><ExternalLink size={16} /> Play</a>
              <a href={project.links.docs} target="_blank" className="flex items-center justify-center gap-2 px-3 py-2 rounded-md bg-white/10 text-white hover:bg-white/20 transition-colors">Docs</a>
            </div>

            <button onClick={onClose} className="mt-6 w-full px-3 py-2 rounded-md bg-white/5 text-white hover:bg-white/10 transition-colors">Close</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects
