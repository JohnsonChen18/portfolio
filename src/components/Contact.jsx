export default function Contact() {
  return (
    <section id="contact">
      <div className="shell">
        <div className="contact">
          <div>
            <div className="sec-label" style={{ marginBottom: 24 }}>
              <span className="hash">#</span> 07 / contact
            </div>
            <h2>
              Let's build<br />
              <span className="accent">something</span>{' '}
              <span className="dim">together.</span>
            </h2>
            <p className="copy">
              I'm actively looking for full-time software engineering roles.
              If you're hiring, or just want to say hi, the
              fastest way to reach me is email :)
            </p>
            <div className="links">
              <a href="mailto:js.chen.swe@gmail.com">
                <span className="k">email</span>
                <span>js.chen.swe@gmail.com</span>
                <span className="arrow">→</span>
              </a>
              <a href="https://www.github.com/JohnsonChen18" target="_blank">
                <span className="k">github</span>
                <span>github.com/JohnsonChen18</span>
                <span className="arrow">↗</span>
              </a>
              <a href="https://www.linkedin.com/in/johnson-chen-swe/" target="_blank">
                <span className="k">linkedin</span>
                <span>/in/johnson-chen-swe</span>
                <span className="arrow">↗</span>
              </a>
              <a href="/resume.pdf" download="chen_johnson_2026.pdf">
                <span className="k">resume</span>
                <span>chen_johnson_2026.pdf</span>
                <span className="arrow">↓</span>
              </a>
            </div>
          </div>
          <aside className="contact-card">
            <div className="lbl">// reply_template.json</div>
            <pre>
              <span className="punc">{'{'}</span>{'\n'}
              {'  '}<span className="key">"to"</span><span className="punc">:</span>{'       '}<span className="str">"js.chen.swe@gmail.com"</span><span className="punc">,</span>{'\n'}
              {'  '}<span className="key">"subject"</span><span className="punc">:</span>{'  '}<span className="str">"[role] @ [company]"</span><span className="punc">,</span>{'\n'}
              {'  '}<span className="key">"include"</span><span className="punc">:</span>{'  '}<span className="punc">{'['}</span>{'\n'}
              {'    '}<span className="str">"team size"</span><span className="punc">,</span>{'\n'}
              {'    '}<span className="str">"stack"</span><span className="punc">,</span>{'\n'}
              {'    '}<span className="str">"remote policy"</span><span className="punc">,</span>{'\n'}
              {'    '}<span className="str">"comp range"</span>{'\n'}
              {'  '}<span className="punc">{']'}</span><span className="punc">,</span>{'\n'}
              {'  '}<span className="key">"reply_by"</span><span className="punc">:</span>{' '}<span className="str">"usually &lt; 24h"</span>{'\n'}
              <span className="punc">{'}'}</span>
            </pre>
          </aside>
        </div>
      </div>
    </section>
  )
}
