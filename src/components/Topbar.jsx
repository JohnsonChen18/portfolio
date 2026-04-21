import { useState, useEffect } from 'react'

const NAV_ITEMS = [
  { href: '#about', label: 'about' },
  { href: '#experience', label: 'experience' },
  { href: '#work', label: 'work' },
  { href: '#projects', label: 'projects' },
  { href: '#readings', label: 'readings' },
  { href: '#tradings', label: 'tradings' },
  { href: '#contact', label: 'contact' },
]

export default function Topbar({ activeSection }) {
  const [clock, setClock] = useState('--:--:-- PST')

  useEffect(() => {
    function tick() {
      const d = new Date()
      const hh = String(d.getHours()).padStart(2, '0')
      const mm = String(d.getMinutes()).padStart(2, '0')
      const ss = String(d.getSeconds()).padStart(2, '0')
      setClock(`${hh}:${mm}:${ss} PST`)
    }
    tick()
    const id = setInterval(tick, 1000)
    return () => clearInterval(id)
  }, [])

  return (
    <div className="topbar">
      <div className="shell topbar-inner">
        <div className="tb-left">
          <span className="tb-dot" />
          <span className="tb-logo"><span className="caret">~/</span>johnson.chen</span>
          <span>v1.0.0</span>
        </div>
        <nav className="tb-mid">
          {NAV_ITEMS.map(({ href, label }) => (
            <a key={href} href={href} className={activeSection === href.slice(1) ? 'active' : ''}>
              {label}
            </a>
          ))}
        </nav>
        <div className="tb-right">
          <a href="#" className="tb-resume" download>
            <span className="tb-resume-arrow">↓</span>
            <span>resume.pdf</span>
          </a>
          <span className="tb-clock">{clock}</span>
        </div>
      </div>
    </div>
  )
}
