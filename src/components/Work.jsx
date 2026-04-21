import { useState } from 'react'

const WORKS = [
  {
    num: '01 —',
    title: 'Pulse Console',
    meta: 'Nodepulse · 2025 · lead engineer',
    tags: ['TypeScript', 'Next.js', 'Postgres', 'tRPC'],
    desc: <>Rebuilt the ops dashboard from the ground up — <span className="hl">38% faster p95</span> renders, keyboard-first navigation, and an inspector that engineers actually use. Migrated 40+ legacy screens without a single regression incident.</>,
    expand: [
      { k: 'role', v: 'Lead engineer, 2 ICs + 1 designer' },
      { k: 'timeline', v: '9 months · feb–oct \'25' },
      { k: 'stack', v: '<span class="chip">TypeScript</span><span class="chip">Next.js</span><span class="chip">Postgres</span><span class="chip">tRPC</span><span class="chip">Temporal</span>' },
      { k: 'impact', v: '<span class="num">-38%</span> p95 render · <span class="num">40+</span> screens migrated · <span class="num">0</span> regression incidents' },
      { k: 'links', v: null, links: ['case study ↗', 'internal demo ↗'] },
    ],
  },
  {
    num: '02 —',
    title: 'Relay Router',
    meta: 'Relay Labs · 2024 · intern project',
    tags: ['Go', 'gRPC', 'Redis'],
    desc: <>Designed and shipped a <span className="hl">request-routing layer</span> that cut tail latency by a third for high-fanout endpoints. Ended up on the main runtime path for 1.2M requests/day.</>,
    expand: [
      { k: 'role', v: 'Intern IC, paired with 1 senior eng' },
      { k: 'timeline', v: '12 weeks · jun–aug \'24' },
      { k: 'stack', v: '<span class="chip">Go</span><span class="chip">gRPC</span><span class="chip">Redis</span><span class="chip">k6</span>' },
      { k: 'impact', v: '<span class="num">-33%</span> p99 tail latency · <span class="num">1.2M</span> req/day on runtime path' },
      { k: 'links', v: null, links: ['writeup ↗'] },
    ],
  },
  {
    num: '03 —',
    title: 'dotfiles.dev',
    meta: 'Side project · 2024 · solo',
    tags: ['SvelteKit', 'SQLite', 'Litestream'],
    desc: <>A tiny config-sharing service with a deliberately <span className="hl">boring stack</span>. 2.4k monthly actives, a $6/mo VPS, zero paged incidents in fourteen months.</>,
    expand: [
      { k: 'role', v: 'Solo — design, eng, ops' },
      { k: 'timeline', v: 'launched mar \'24 · still live' },
      { k: 'stack', v: '<span class="chip">SvelteKit</span><span class="chip">SQLite</span><span class="chip">Litestream</span><span class="chip">Caddy</span>' },
      { k: 'impact', v: '<span class="num">2.4k</span> MAU · <span class="num">$6</span>/mo infra · <span class="num">0</span> paged incidents / 14mo' },
      { k: 'links', v: null, links: ['dotfiles.dev ↗', 'repo ↗'] },
    ],
  },
  {
    num: '04 —',
    title: 'Tangent CLI',
    meta: 'Open source · 2023–present · maintainer',
    tags: ['Rust', 'clap'],
    desc: <>A small CLI for diffing env files across deploy targets. <span className="hl">1.1k GitHub stars</span>, merged into three companies' internal toolchains.</>,
    expand: [
      { k: 'role', v: 'Maintainer · 4 contributors' },
      { k: 'timeline', v: '2023 — present' },
      { k: 'stack', v: '<span class="chip">Rust</span><span class="chip">clap</span><span class="chip">age</span>' },
      { k: 'impact', v: '<span class="num">1.1k</span> stars · <span class="num">3</span> companies adopting · <span class="num">12</span> releases' },
      { k: 'links', v: null, links: ['repo ↗', 'crates.io ↗', 'docs ↗'] },
    ],
  },
]

function WorkItem({ item }) {
  const [open, setOpen] = useState(false)
  return (
    <div className={`work-item${open ? ' open' : ''}`} onClick={() => setOpen(o => !o)}>
      <div className="wi-num">{item.num}</div>
      <div>
        <div className="wi-title">{item.title}</div>
        <div className="wi-meta">{item.meta}</div>
        <div className="wi-tags">
          {item.tags.map(t => <span key={t} className="wi-tag">{t}</span>)}
        </div>
      </div>
      <div className="wi-desc">{item.desc}</div>
      <div className="wi-arrow">›</div>
      {open && (
        <div className="wi-expand" onClick={e => e.stopPropagation()}>
          {item.expand.map(({ k, v, links }) => (
            <div className="kv" key={k}>
              <span className="k">{k}</span>
              {links ? (
                <span className="v links">
                  {links.map(l => <a key={l} href="#">{l}</a>)}
                </span>
              ) : (
                <span className="v" dangerouslySetInnerHTML={{ __html: v }} />
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default function Work() {
  return (
    <section id="work">
      <div className="shell">
        <div className="sec-head">
          <div className="sec-label"><span className="hash">#</span> 03 / selected work</div>
          <h2 className="sec-title">Case studies <span className="dim">— things I've shipped end-to-end.</span></h2>
        </div>
        <div className="work-list">
          {WORKS.map(item => <WorkItem key={item.num} item={item} />)}
        </div>
      </div>
    </section>
  )
}
