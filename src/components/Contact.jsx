import React, { useState } from 'react'

function Contact() {
  const [status, setStatus] = useState(null)

  const onSubmit = async (e) => {
    e.preventDefault()
    setStatus('Sending...')
    try {
      const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
      const res = await fetch(`${baseUrl}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: e.target.name.value,
          email: e.target.email.value,
          message: e.target.message.value,
        })
      })
      if (!res.ok) throw new Error('Request failed')
      setStatus('Thanks! I will get back to you soon.')
      e.target.reset()
    } catch (err) {
      setStatus('Error sending message. Please try again later.')
    }
  }

  return (
    <section id="contact" className="relative py-20 bg-slate-900">
      <div className="mx-auto max-w-3xl px-6">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Contact</h2>
        <form onSubmit={onSubmit} className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
          <div className="grid md:grid-cols-2 gap-4">
            <input name="name" placeholder="Your name" required className="px-4 py-3 rounded-md bg-slate-800/60 border border-white/10 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-fuchsia-500" />
            <input name="email" type="email" placeholder="Email" required className="px-4 py-3 rounded-md bg-slate-800/60 border border-white/10 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-fuchsia-500" />
          </div>
          <textarea name="message" placeholder="Message" rows="5" required className="mt-4 w-full px-4 py-3 rounded-md bg-slate-800/60 border border-white/10 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-fuchsia-500" />
          <div className="mt-4 flex items-center gap-3">
            <button className="px-5 py-3 rounded-md bg-fuchsia-500 hover:bg-fuchsia-600 text-white font-semibold transition-colors">Send</button>
            {status && <span className="text-white/80 text-sm">{status}</span>}
          </div>
        </form>
      </div>
    </section>
  )
}

export default Contact
