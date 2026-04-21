const BOOKS = [
  {
    status: 'on', statusLabel: 'now reading',
    title: 'Designing Data-Intensive Applications',
    author: 'Martin Kleppmann',
    note: <>Ch. 7 today. Rereading the <span className="hl">serializability</span> section — finally clicked.</>,
    progress: 62,
  },
  {
    status: 'done', statusLabel: "finished · mar '26",
    title: 'A Philosophy of Software Design',
    author: 'John Ousterhout',
    note: <>Short, opinionated, <span className="hl">hard to argue with</span>. Made me rewrite two internal libs.</>,
    progress: 100,
  },
  {
    status: 'done', statusLabel: "finished · feb '26",
    title: 'The Pragmatic Programmer',
    author: 'Hunt & Thomas',
    note: <>Third reread. Aging better than I expected — <span className="hl">"broken windows"</span> still hits.</>,
    progress: 100,
  },
  {
    status: 'done', statusLabel: "finished · jan '26",
    title: 'Crafting Interpreters',
    author: 'Robert Nystrom',
    note: <>Built the tree-walker over a long weekend. The bytecode half is <span className="hl">next on the list</span>.</>,
    progress: 100,
  },
  {
    status: 'queue', statusLabel: 'queued',
    title: 'Database Internals',
    author: 'Alex Petrov',
    note: <>Waiting for a stretch of quiet evenings. <span className="hl">Storage engines</span> chapter first.</>,
    progress: 0,
  },
  {
    status: 'queue', statusLabel: 'queued',
    title: 'Refactoring',
    author: 'Martin Fowler',
    note: <>Second edition. Borrowed a copy, haven't started — <span className="hl">soon</span>.</>,
    progress: 0,
  },
]

function Book({ book }) {
  return (
    <article className="book">
      <div className="book-cover">
        <span className="spine" />
        <span className="tag">cover</span>
      </div>
      <div className="book-meta">
        <span className={`status ${book.status}`}>{book.statusLabel}</span>
        <h3>{book.title}</h3>
        <div className="author">{book.author}</div>
        <div className="note">{book.note}</div>
        <div className="prog">
          <span>{book.progress === 100 ? 'done' : `${book.progress}%`}</span>
          <span className="track"><span style={{ width: `${book.progress}%` }} /></span>
        </div>
      </div>
    </article>
  )
}

export default function Readings() {
  return (
    <section id="readings">
      <div className="shell">
        <div className="sec-head">
          <div className="sec-label"><span className="hash">#</span> 06 / readings</div>
          <h2 className="sec-title">What's on the nightstand <span className="dim">— and what I took from it.</span></h2>
        </div>
        <div className="readings">
          {BOOKS.map((b, i) => <Book key={i} book={b} />)}
        </div>
      </div>
    </section>
  )
}
