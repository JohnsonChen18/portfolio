import Typer from './Typer'

const GitHubIcon = () => (
    <svg className="ic" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path
            d="M12 .5C5.73.5.5 5.74.5 12.02c0 5.08 3.29 9.39 7.86 10.91.57.1.78-.25.78-.55v-1.93c-3.2.7-3.87-1.54-3.87-1.54-.52-1.33-1.28-1.68-1.28-1.68-1.04-.71.08-.7.08-.7 1.16.08 1.76 1.19 1.76 1.19 1.03 1.76 2.69 1.25 3.35.96.1-.74.4-1.25.72-1.54-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.28 1.19-3.09-.12-.29-.51-1.47.11-3.06 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.79 0c2.21-1.49 3.18-1.18 3.18-1.18.62 1.59.23 2.77.11 3.06.74.81 1.19 1.83 1.19 3.09 0 4.42-2.69 5.39-5.25 5.68.41.35.78 1.05.78 2.12v3.14c0 .3.21.66.79.55 4.56-1.52 7.85-5.83 7.85-10.91C23.5 5.74 18.27.5 12 .5Z"/>
    </svg>
)
const LinkedInIcon = () => (
    <svg className="ic" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path
            d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5ZM.22 8h4.56v14H.22V8Zm7.44 0h4.37v1.92h.06c.61-1.15 2.1-2.36 4.33-2.36 4.63 0 5.48 3.05 5.48 7.01V22h-4.56v-6.2c0-1.48-.03-3.38-2.06-3.38-2.06 0-2.38 1.61-2.38 3.27V22H7.66V8Z"/>
    </svg>
)
const XIcon = () => (
    <svg className="ic" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path
            d="M18.244 2H21.5l-7.56 8.64L22.5 22h-6.86l-5.38-6.46L4.5 22H1.24l8.08-9.23L1.5 2h7.03l4.86 6.02L18.24 2Zm-1.2 18h1.9L7.05 4H5.05l12 16Z"/>
    </svg>
)
const EmailIcon = () => (
    <svg className="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"
         strokeLinejoin="round" aria-hidden="true">
        <rect x="3" y="5" width="18" height="14" rx="1"/>
        <path d="m3 7 9 6 9-6"/>
    </svg>
)

function Socials() {
    return (
        <div className="hero-socials">
            <span className="lead">find me</span>
            <a className="sl" href="https://github.com/JohnsonChen18" target="_blank" rel="noopener" aria-label="GitHub">
                <GitHubIcon/><span>github</span>
            </a>
            <a className="sl" href="https://www.linkedin.com/in/johnson-chen-swe" target="_blank" rel="noopener" aria-label="LinkedIn">
                <LinkedInIcon/><span>linkedin</span>
            </a>
            <a className="sl" href="mailto:js.chen.swe@gmail.com" aria-label="Email">
                <EmailIcon/><span>email</span>
            </a>
        </div>
    )
}

export default function Hero() {
    return (
        <section className="hero" id="top">
            <div className="shell">
                <div className="term">
                    <div className="term-chrome">
                        <div className="term-dots"><span/><span/><span/></div>
                        <div className="term-title">~/portfolio — zsh — 92×24</div>
                    </div>
                    <div className="term-body">
                        <div className="term-line">
                            <span className="term-user">johnson</span>
                            <span className="term-path">@mbp</span>
                            <span className="term-path">:~</span>$ <span className="term-prompt">whoami</span>
                        </div>
                        <span className="term-out big">
              Hey, I&#39;m Johnson Chen<br/>
              <span className="role-pill">
                <span className="accent"><Typer/></span>
              </span>
              <span className="cursor"/>
            </span>
                        <div style={{height: 10}}/>
                        <div className="term-line">
                            <span className="term-user">johnson</span>
                            <span className="term-path">@mbp</span>
                            <span className="term-path">:~</span>$ <span className="term-prompt">cat .about</span>
                        </div>
                        <div className="term-out" style={{maxWidth: '62ch', lineHeight: 1.75}}>
                            Junior software engineer. Experienced in building SaaS and RAG-driven applications, fueled
                            by a strong interest in Crypto.
                        </div>
                        <div style={{height: 14}}/>
                        <div className="term-line">
                            <span className="term-user">johnson</span>
                            <span className="term-path">@mbp</span>
                            <span className="term-path">:~</span>$ <span className="cursor"/>
                        </div>
                    </div>
                </div>
                <Socials/>
                <div className="hero-meta">
                    <div className="hm-cell">
                        <div className="hm-k">Status</div>
                        <div className="hm-v"><span className="on">●</span> Open to work</div>
                    </div>
                    <div className="hm-cell">
                        <div className="hm-k">Relocating</div>
                        <div className="hm-v"><span className="on">●</span> Yes</div>
                    </div>
                    <div className="hm-cell">
                        <div className="hm-k">Stack</div>
                        <div className="hm-v">TS · Java · Postgres</div>
                    </div>
                    <div className="hm-cell">
                        <div className="hm-k">Experience</div>
                        <div className="hm-v">&lt; 1 year</div>
                    </div>
                </div>
            </div>
        </section>
    )
}
