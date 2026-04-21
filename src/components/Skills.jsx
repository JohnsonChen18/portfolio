function Bar({ filled, total = 5 }) {
  return (
    <span className="bar">
      {Array.from({ length: total }, (_, i) => (
        <span key={i} className={i < filled ? 'on' : ''} />
      ))}
    </span>
  )
}

export default function Skills() {
  return (
    <section id="skills">
      <div className="shell">
        <div className="sec-head">
          <div className="sec-label"><span className="hash">#</span> 05 / stack</div>
          <h2 className="sec-title">Tools I reach for <span className="dim">— honestly rated.</span></h2>
        </div>
        <div className="skills">
          <div className="skill-col">
            <h4>// languages</h4>
            <ul>
              <li>TypeScript <Bar filled={5} /></li>
              <li>Go         <Bar filled={4} /></li>
              <li>Python     <Bar filled={3} /></li>
              <li>Rust       <Bar filled={2} /></li>
              <li>SQL        <Bar filled={4} /></li>
            </ul>
          </div>
          <div className="skill-col">
            <h4>// frontend</h4>
            <ul>
              <li>React / Next</li>
              <li>SvelteKit</li>
              <li>Tailwind</li>
              <li>Radix / shadcn</li>
              <li>Vite / esbuild</li>
            </ul>
          </div>
          <div className="skill-col">
            <h4>// backend</h4>
            <ul>
              <li>Postgres</li>
              <li>Redis</li>
              <li>tRPC / gRPC</li>
              <li>NATS</li>
              <li>ClickHouse</li>
            </ul>
          </div>
          <div className="skill-col">
            <h4>// infra / ops</h4>
            <ul>
              <li>Docker</li>
              <li>Fly.io / Railway</li>
              <li>GitHub Actions</li>
              <li>Terraform (learning)</li>
              <li>Grafana / Prometheus</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
