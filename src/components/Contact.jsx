export default function Contact() {
  return (
    <section id="contact">
      <div className="shell">
        <div className="contact">
          <div>
            <div className="sec-label" style={{ marginBottom: 24 }}>
              <span className="hash">#</span> 08 / contact
            </div>
            <h2>
              Let's build<br />
              <span className="accent">something</span>{' '}
              <span className="dim">together.</span>
            </h2>
            <p className="copy">
              I'm actively looking for full-time software engineering roles starting Q3 2026.
              If you're hiring on a small, product-focused team — or just want to say hi — the
              fastest way to reach me is email.
            </p>
            <div className="links">
              <a href="mailto:johnson@chen.dev">
                <span className="k">email</span>
                <span>johnson@chen.dev</span>
                <span className="arrow">→</span>
              </a>
              <a href="#">
                <span className="k">github</span>
                <span>github.com/jchen</span>
                <span className="arrow">↗</span>
              </a>
              <a href="#">
                <span className="k">linkedin</span>
                <span>/in/johnson-chen</span>
                <span className="arrow">↗</span>
              </a>
              <a href="#">
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
              {'  '}<span className="key">"to"</span><span className="punc">:</span>{'       '}<span className="str">"johnson@chen.dev"</span><span className="punc">,</span>{'\n'}
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
