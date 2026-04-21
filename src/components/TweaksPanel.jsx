import { useState } from 'react'

const ACCENTS = {
  green:  { a: 'oklch(0.82 0.17 142)', d: 'oklch(0.55 0.11 142)' },
  amber:  { a: 'oklch(0.82 0.14 75)',  d: 'oklch(0.58 0.10 75)'  },
  cyan:   { a: 'oklch(0.82 0.14 200)', d: 'oklch(0.55 0.10 200)' },
  violet: { a: 'oklch(0.72 0.17 300)', d: 'oklch(0.52 0.12 300)' },
  red:    { a: 'oklch(0.72 0.18 28)',  d: 'oklch(0.52 0.13 28)'  },
}

const SWATCHES = [
  { v: 'green',  bg: 'oklch(0.82 0.17 142)' },
  { v: 'amber',  bg: 'oklch(0.82 0.14 75)'  },
  { v: 'cyan',   bg: 'oklch(0.82 0.14 200)' },
  { v: 'violet', bg: 'oklch(0.72 0.17 300)' },
  { v: 'red',    bg: 'oklch(0.72 0.18 28)'  },
]

export default function TweaksPanel({ tweaks, onChange }) {
  const [open, setOpen] = useState(false)

  function set(key, val) {
    const next = { ...tweaks, [key]: val }
    onChange(next)
    const ac = ACCENTS[next.accent] || ACCENTS.green
    document.documentElement.style.setProperty('--accent', ac.a)
    document.documentElement.style.setProperty('--accent-dim', ac.d)
  }

  if (!open) {
    return (
      <button className="tweaks-toggle" onClick={() => setOpen(true)}>
        ◢ tweaks
      </button>
    )
  }

  return (
    <div className="tweaks-panel">
      <div className="tweaks-head" onClick={() => setOpen(false)}>
        <span className="t">◢ tweaks</span>
        <span>v1.0</span>
      </div>
      <div className="tweaks-body">
        <div className="tw-row">
          <span className="lbl">theme</span>
          <div className="tw-opts">
            {['dark', 'light', 'amber'].map(v => (
              <button key={v} className={`tw-opt${tweaks.theme === v ? ' on' : ''}`} onClick={() => set('theme', v)}>
                {v === 'amber' ? 'amber crt' : v}
              </button>
            ))}
          </div>
        </div>
        <div className="tw-row">
          <span className="lbl">accent</span>
          <div className="tw-swatches">
            {SWATCHES.map(({ v, bg }) => (
              <button
                key={v}
                className={`tw-sw${tweaks.accent === v ? ' on' : ''}`}
                style={{ background: bg }}
                onClick={() => set('accent', v)}
              />
            ))}
          </div>
        </div>
        <div className="tw-row">
          <span className="lbl">density</span>
          <div className="tw-opts">
            {['compact', 'default', 'comfy'].map(v => (
              <button key={v} className={`tw-opt${tweaks.density === v ? ' on' : ''}`} onClick={() => set('density', v)}>
                {v}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
