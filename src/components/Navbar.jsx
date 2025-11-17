import React from 'react'

function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-40">
      <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
        <a href="#" className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-fuchsia-500 to-indigo-500 shadow-lg shadow-fuchsia-500/30 border border-white/10 flex items-center justify-center text-white font-bold">IG</div>
          <span className="text-white/90 font-semibold tracking-tight">Indie Game Dev</span>
        </a>
        <nav className="hidden sm:flex items-center gap-6 text-white/80">
          <a href="#projects" className="hover:text-white transition-colors">Projects</a>
          <a href="#about" className="hover:text-white transition-colors">About</a>
          <a href="#contact" className="px-3 py-1.5 rounded-md bg-white/10 hover:bg-white/20 border border-white/10 text-white transition-colors">Contact</a>
        </nav>
      </div>
    </header>
  )
}

export default Navbar
