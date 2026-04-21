import { useState, useEffect } from 'react'
import Topbar from './components/Topbar'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Work from './components/Work'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Readings from './components/Readings'
import Tradings from './components/Tradings'
import Contact from './components/Contact'
import TweaksPanel from './components/TweaksPanel'

const SECTIONS = ['about', 'experience', 'work', 'projects', 'readings', 'tradings', 'contact']

export default function App() {
  const [tweaks, setTweaks] = useState({ theme: 'dark', accent: 'green', density: 'default' })
  const [activeSection, setActiveSection] = useState('about')

  useEffect(() => {
    document.body.dataset.theme = tweaks.theme
    document.body.dataset.density = tweaks.density
  }, [tweaks.theme, tweaks.density])

  useEffect(() => {
    function onScroll() {
      const y = window.scrollY + 120
      let active = 'about'
      for (const id of SECTIONS) {
        const el = document.getElementById(id)
        if (el && el.offsetTop <= y) active = id
      }
      setActiveSection(active)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    function onKey(e) {
      if (e.target.matches('input, textarea')) return
      const k = e.key.toLowerCase()
      if (k === 'w') document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' })
      if (k === 'c') document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
      if (k === 'h') window.scrollTo({ top: 0, behavior: 'smooth' })
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [])

  return (
    <>
      <Topbar activeSection={activeSection} />
      <Hero />
      <About />
      <Experience />
      {/*<Work />*/}
      <Projects />
      <Skills />
      <Readings />
      <Tradings />
      <Contact />
      <footer>
        <div className="shell footer-inner">
          <span><span className="caret">~/</span>johnson.chen — handcrafted in vim, deployed with love.</span>
          <span>© 2026 · last deploy: just now</span>
        </div>
      </footer>
      <TweaksPanel tweaks={tweaks} onChange={setTweaks} />
    </>
  )
}
