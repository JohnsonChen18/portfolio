import { useState } from 'react'

const PROJECTS = [
  {
    id: 'proj_01', status: 'live', name: 'AI Code Reviewer',
    desc: 'Integrated Claude with GitHub Actions to review code, comment on pull requests, and notify developers automatically.',
    lang: 'ts', langLabel: 'Java Spring', stars: '★ 312',
    detail: [
      { k: 'stack', v: '<code>Java</code> <code>Spring</code> <code>Github Action</code>' },
      { k: 'notes', v: 'Making my developing process much smoother.' },
    ],
    links: [{ label: 'repo ↗', url: 'https://github.com' }],
  },
  {
    id: 'proj_02', status: 'live', name: 'SignVR',
    desc: 'Built an XR app enabling sign language learning via gesture recognition, real-time interaction, and VR/AR transitions.',
    lang: 'go', langLabel: 'Meta VR SDK', stars: '★ 187',
    detail: [
      { k: 'stack', v: '<code>Unity</code> <code>Meta VR SDK</code> <code>C#</code>' },
      { k: 'notes', v: 'The project was positively received by 50+ participants at MIT Reality Hackathon.' },
    ],
    links: [],
  },
  {
    id: 'proj_03', status: 'live', name: 'BitNotary',
    desc: 'Developed a decentralized notary platform providing cryptographic proof and Immutable history for digital assets.',
    lang: 'rs', langLabel: 'Solidity', stars: '★ 1.1k',
    detail: [
      { k: 'stack', v: '<code>Solidity</code><code>Java</code><code>Spring</code><code>React</code>' },
      { k: 'notes', v: 'This is a self service app. Users need to configure their own eth wallet as payment method.' },
    ],
    links: [],
  },
  {
    id: 'proj_04', status: 'live', name: 'ShortURL',
    desc: 'Developed a link shortening platform featuring real-time analytics and data display.',
    lang: 'py', langLabel: 'Java', stars: '★ 94',
    detail: [
      { k: 'stack', v: '<code>Java</code><code>Spring</code><code>Vue</code><code>MySql</code>' },
      { k: 'notes', v: 'Help users understand their url traffic better.' },
    ],
    links: [{ label: 'repo ↗', url: 'https://github.com' }],
  },
  {
    id: 'proj_05', status: 'archived', name: 'Kanbas',
    desc: 'Created a full-stack Canva replica, featuring in course, assignment and exam.',
    lang: 'js', langLabel: 'TypeScript', stars: '★ 48',
    detail: [
      { k: 'stack', v: '<code>Typescript</code><code>React</code><code>Node.js</code>' },
      { k: 'notes', v: 'Implemented a robust Role-Based Access Control (RBAC) system to differentiate Teacher, Student, and Admin permissions.' },
    ],
    links: [{ label: 'repo ↗', url: 'https://github.com' }],
  },
  {
    id: 'proj_06', status: 'wip', name: 'Incognito',
    desc: 'Developed a hyper local anonymous community app for campus wide interactions.',
    lang: 'ts', langLabel: 'TypeScript', stars: '★ —',
    detail: [
      { k: 'stack', v: '<code>Swift</code><code>Google Cloud</code><code>Firebase</code>' },
      { k: 'notes', v: 'The app is inspired by YikYak.' },
    ],
    links: [{ label: 'repo ↗', url: 'https://github.com' }],
  },
]

function ProjectCard({ proj }) {
  const [open, setOpen] = useState(false)
  return (
    <div className={`proj${open ? ' open' : ''}`}>
      <div className="proj-top">
        <span>{proj.id}</span>
      </div>
      <h3>{proj.name}</h3>
      <p>{proj.desc}</p>
      <div className="proj-foot">
        <span className={`lang ${proj.lang}`}>{proj.langLabel}</span>
      </div>
      <div
        className={`proj-toggle${open ? ' open' : ''}`}
        onClick={() => setOpen(o => !o)}
      >
        <span className="proj-toggle-label">details</span>
        <span className="chev">›</span>
      </div>
      {open && (
        <div className="proj-expand">
          {proj.detail.map(({ k, v }) => (
            <div className="kv" key={k}>
              <span className="k">{k}</span>
              <span className="v" dangerouslySetInnerHTML={{ __html: v }} />
            </div>
          ))}
          <div className="links">
            {proj.links.map(({ label, url }) => (
              <a key={label} href={url} target="_blank" rel="noopener noreferrer">{label}</a>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default function Projects() {
  return (
    <section id="projects">
      <div className="shell">
        <div className="sec-head">
          <div className="sec-label"><span className="hash">#</span> 03 / projects</div>
          <h2 className="sec-title">Smaller things <span className="dim">— I build end-to-end.</span></h2>
        </div>
        <div className="proj-grid">
          {PROJECTS.map(p => <ProjectCard key={p.id} proj={p} />)}
        </div>
      </div>
    </section>
  )
}
