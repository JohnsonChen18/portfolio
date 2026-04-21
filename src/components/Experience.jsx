import { useState } from 'react'

function XpItem({ when, role, company, bullets, detail }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="xp-item">
      <div>
        <div className="xp-when">{when}</div>
      </div>
      <div>
        <div>
          <span className="xp-role">{role}</span>
          <span className="xp-co">{company}</span>
        </div>
        <div className="xp-desc">
          <ul>{bullets.map((b, i) => <li key={i}>{b}</li>)}</ul>
        </div>
        <div
          className={`xp-expand-toggle${open ? ' open' : ''}`}
          onClick={() => setOpen(o => !o)}
        >
          <span className="chev">›</span>
          <span>more detail</span>
        </div>
        {open && (
          <div className="xp-expand">
            {detail.map(({ k, v }) => (
              <div className="kv" key={k}>
                <span className="k">{k}</span>
                <span className="v" dangerouslySetInnerHTML={{ __html: v }} />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

const JOBS = [
  {
    when: 'Jun 2025 — Sep 2025',
    role: 'Software Engineering Intern',
    company: 'Sofi',
    bullets: [
      'Built a standalone RAG-based chatbot for answering FAQs in the onboarding process.',
    ],
    detail: [
      { k: 'team', v: 'Unified Onboarding Team' },
      { k: 'stack', v: '<span class="chip">TypeScript</span><span class="chip">React</span><span class="chip">Kotlin</span>' +
            '<span class="chip">Spring</span><span class="chip">Postgres</span><span class="chip">Kubernetes</span><span class="chip">Docker</span>' +
            '<span class="chip">AWS</span>' },
      { k: 'shipped', v: 'The bot increased customer retention rate by 3% in A/B test.' },
      { k: 'learned', v: 'How to build RAG in professional environment.' },
    ],
  },
  {
    when: 'Apr 2024 - Aug 2024',
    role: 'Full Stack Intern',
    company: 'RiGi-XR',
    bullets: [
      'Worked on an AI-driven VR language learning software and successfully secured angel investment for it.'
    ],
    detail: [
      { k: 'team', v: 'Game Developing Team' },
      { k: 'stack', v: '<span class="chip">Java</span><span class="chip">Unity</span><span class="chip">AWS</span><span class="chip">Postgres</span><span class="chip">Meta VR SDK</span>' },
      { k: 'shipped', v: 'Game prototype.' },
      { k: 'learned', v: "Move fast, learn fast." },
    ],
  },
  {
    when: 'Nov 2022 — Feb 2023',
    role: 'Software Engineering Intern',
    company: 'INEOS',
    bullets: [
        'Built a Visualized Test Log System.',
        'Implemented a backend service for error reason searching with optimized data indexing strategies.'
    ],
    desc: 'Ran weekly labs for a 40-student section on software construction. Built a grading tool that cut grading time per assignment from ~3h to ~40min.',
    detail: [
      { k: 'role', v: 'Platform Team' },
      { k: 'stack', v: '<span class="chip">C#</span><span class="chip">Elastic Search</span><span class="chip">ASP.NET</span><span class="chip">Entity</span><span class="chip">RabbitMQ</span>' },
      { k: 'shipped', v: 'Test Log System Microservice.' },
      { k: 'learned', v: "How to manage infra in professional environment." },
    ],
  },
]

export default function Experience() {
  return (
    <section id="experience">
      <div className="shell">
        <div className="sec-head">
          <div className="sec-label"><span className="hash">#</span> 02 / experience</div>
          <h2 className="sec-title">Where I've worked <span className="dim">— and what I did there.</span></h2>
        </div>
        {JOBS.map((job, i) => (
          <div key={i} className="xp-item">
            <div><div className="xp-when">{job.when}</div></div>
            <div>
              <div>
                <span className="xp-role">{job.role}</span>
                <span className="xp-co">{job.company}</span>
              </div>
              <div className="xp-desc">
                {job.bullets.length > 0 ? (
                  <ul>{job.bullets.map((b, j) => <li key={j}>{b}</li>)}</ul>
                ) : (
                  <p style={{ marginTop: 8 }}>{job.desc}</p>
                )}
              </div>
              <XpToggle detail={job.detail} />
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

function XpToggle({ detail }) {
  const [open, setOpen] = useState(false)
  return (
    <>
      <div
        className={`xp-expand-toggle${open ? ' open' : ''}`}
        onClick={() => setOpen(o => !o)}
      >
        <span className="chev">›</span>
        <span>more detail</span>
      </div>
      {open && (
        <div className="xp-expand">
          {detail.map(({ k, v }) => (
            <div className="kv" key={k}>
              <span className="k">{k}</span>
              <span className="v" dangerouslySetInnerHTML={{ __html: v }} />
            </div>
          ))}
        </div>
      )}
    </>
  )
}
