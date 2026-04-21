function Bar({filled, total = 5}) {
    return (
        <span className="bar">
      {Array.from({length: total}, (_, i) => (
          <span key={i} className={i < filled ? 'on' : ''}/>
      ))}
    </span>
    )
}

export default function Skills() {
    return (
        <section id="skills">
            <div className="shell">
                <div className="sec-head">
                    <div className="sec-label"><span className="hash">#</span> 04 / stack</div>
                    <h2 className="sec-title">Tools I reach for <span className="dim">— honestly rated.</span></h2>
                </div>
                <div className="skills">
                    <div className="skill-col">
                        <h4>// languages</h4>
                        <ul>
                            <li>Java <Bar filled={5}/></li>
                            <li>TypeScript <Bar filled={4}/></li>
                            <li>Kotlin <Bar filled={4}/></li>
                            <li>Python <Bar filled={3}/></li>
                            <li>C# <Bar filled={2}/></li>
                            <li>Solidity <Bar filled={2}/></li>
                            <li>Rust <Bar filled={1}/></li>
                            <li>SQL <Bar filled={4}/></li>
                        </ul>
                    </div>
                    <div className="skill-col">
                        <h4>// frontend</h4>
                        <ul>
                            <li>React / Next</li>
                            <li>Vue.js</li>
                            <li>Playwright</li>
                            <li>Tailwind</li>
                            <li>Vercel AI SDK</li>
                        </ul>
                    </div>
                    <div className="skill-col">
                        <h4>// backend</h4>
                        <ul>
                            <li>Spring Boot</li>
                            <li>Django</li>
                            <li>Flask</li>
                            <li>.Net</li>
                            <li>RabbitMQ</li>
                            <li>Elastic Search</li>
                        </ul>
                    </div>
                    <div className="skill-col">
                        <h4>// databases</h4>
                        <ul>
                            <li>Postgres</li>
                            <li>MongoDB</li>
                            <li>Firebase</li>
                            <li>MySql</li>
                            <li>SQLite</li>
                            <li>Redis</li>
                        </ul>
                    </div>
                    <div className="skill-col">
                        <h4>// infra / ops</h4>
                        <ul>
                            <li>Docker</li>
                            <li>Kubernetes</li>
                            <li>GitHub Actions</li>
                            <li>Gitlab CI/CD</li>
                            <li>ArgoCD</li>
                            <li>Terraform (learning)</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}
