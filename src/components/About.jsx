export default function About() {
    return (
        <section id="about">
            <div className="shell">
                <div className="sec-head">
                    <div className="sec-label"><span className="hash">#</span> 01 / about</div>
                    <h2 className="sec-title">I like building things <span className="dim">— and shipping them.</span>
                    </h2>
                </div>
                <div className="about-grid">
                    <div className="about-portrait">
                        <div className="portrait-frame">
                            <img src="/portrait.png" alt="Portrait of Johnson Chen" />
                        </div>
                        <div className="portrait-meta">
                            <span>portrait.jpg</span>
                            <span><span className="on">●</span> johnson chen</span>
                        </div>
                    </div>
                    <div className="about-copy">
                        <p>
                            I'm a <span className="hl">junior full-stack engineer</span> with a diverse background
                            spanning <span className="hl">Fintech</span>, <span className="hl">Mixed Reality</span>,
                            and{' '}
                            <span className="hl">Chemical</span> industry. Proven track record in developing both SaaS
                            platforms and AI Agents.
                        </p>
                        <p>
                            Beyond my professional role, I am a blockchain enthusiast. I have
                            engineered a decentralized notary service on the blockchain and am currently developing AI
                            crypto quantitative
                            agents to automate complex trading strategies.
                        </p>
                    </div>
                    <aside className="about-card">
                        <h4>// fast facts</h4>
                        <dl>
                            <dt>based</dt>
                            <dd>Medford, MA</dd>
                            <dt>relocation</dt>
                            <dd><span className="on">Yes</span></dd>
                            <dt>pronouns</dt>
                            <dd>He / Him</dd>
                            <dt>currently</dt>
                            <dd>NEET</dd>
                            <dt>prev.</dt>
                            <dd>Intern, Sofi</dd>
                            <dt>school</dt>
                            <dd>M.S. CS, Northeastern</dd>
                        </dl>
                        <div className="rule"/>
                        <h4>// off the clock</h4>
                        <dl>
                            <dt>reading</dt>
                            <dd>Freedom of Money</dd>
                            <dt>playing</dt>
                            <dd>Ace Attorney (again)</dd>
                            <dt>listening</dt>
                            <dd>The Weekend</dd>
                        </dl>
                    </aside>
                </div>
            </div>
        </section>
    )
}
