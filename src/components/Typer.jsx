import { useState, useEffect } from 'react'

const WORDS = [
  'a software engineer',
  'a postgres lover',
  'a trader',
  'a cat person',
]

// eslint-disable-next-line react/prop-types
export default function Typer({ initialDelay = 1200 }) {
  const [text, setText] = useState(WORDS[0])

  useEffect(() => {
    let idx = 0
    let pos = WORDS[0].length
    let deleting = true
    let timer

    function step() {
      const word = WORDS[idx]
      if (deleting) {
        pos--
        setText(word.slice(0, pos))
        if (pos === 0) {
          deleting = false
          idx = (idx + 1) % WORDS.length
          timer = setTimeout(step, 260)
        } else {
          timer = setTimeout(step, 40)
        }
      } else {
        pos++
        setText(WORDS[idx].slice(0, pos))
        if (pos === WORDS[idx].length) {
          deleting = true
          timer = setTimeout(step, 1600)
        } else {
          timer = setTimeout(step, 70)
        }
      }
    }

    timer = setTimeout(step, initialDelay)
    return () => clearTimeout(timer)
  }, [initialDelay])

  return <span className="typer">{text || '\u00a0'}</span>
}
