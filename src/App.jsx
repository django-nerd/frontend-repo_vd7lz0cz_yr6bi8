import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Projects from './components/Projects'
import About from './components/About'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <Navbar />
      <Hero />
      <Projects />
      <About />
      <Contact />
      <footer className="py-10 border-t border-white/10 bg-slate-950/60">
        <div className="mx-auto max-w-7xl px-6 text-white/60 text-sm flex items-center justify-between">
          <p>© {new Date().getFullYear()} Indie Game Dev. All rights reserved.</p>
          <a href="#top" className="hover:text-white">Back to top ↑</a>
        </div>
      </footer>
    </div>
  )
}

export default App
