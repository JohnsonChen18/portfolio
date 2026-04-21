const BOOKS = [
    {
        status: 'on', statusLabel: 'now reading',
        title: 'Freedom of Money',
        author: 'Changpeng Zhao',
        note: <>The story of Binance.</>,
        cover: '/books/freedom-of-money.jpg',
    },
    {
        status: 'queue', statusLabel: 'queued',
        title: 'Design Patterns',
        author: 'GoF',
        note: <>It is the bible for all software engineers.</>,
        cover: '/books/design-patterns.jpg',
    },
    {
        status: 'queue', statusLabel: 'queued',
        title: 'The World is Cruel, Yet Gentle',
        author: 'Justin Sun',
        note: <>The story of Justin Sun, the most controversial figure in crypto industry.</>,
        cover: '/books/justin-sun.jpg',
    },
    {
        status: 'done', statusLabel: 'finished',
        title: 'Clean Code',
        author: 'Robert C. Martin',
        note: <>Learned some insights about making code clean and more readable.</>,
        cover: '/books/clean-code.jpg',
    },
    {
        status: 'done', statusLabel: 'finished',
        title: 'Algorithmic Trading',
        author: 'Ernie Chan',
        note: <>A good book for algorithmic trading beginners.</>,
        cover: '/books/trading.jpg',
    },
    {
        status: 'done', statusLabel: 'finished',
        title: 'The Mythical Man-Month',
        author: 'Fred Brooks',
        note: <>Despite being written years ago, the book's core thesis remains remarkably prescient.</>,
        cover: '/books/man-month.jpg',
    },
]

function Book({book}) {
    return (
        <article className="book">
            <div className="book-cover">
                <img src={book.cover} alt={book.title}/>
            </div>
            <div className="book-meta">
                <span className={`status ${book.status}`}>{book.statusLabel}</span>
                <h3>{book.title}</h3>
                <div className="author">{book.author}</div>
                <div className="note">{book.note}</div>
            </div>
        </article>
    )
}

export default function Readings() {
    return (
        <section id="readings">
            <div className="shell">
                <div className="sec-head">
                    <div className="sec-label"><span className="hash">#</span> 05 / readings</div>
                    <h2 className="sec-title">What's on the nightstand <span className="dim">— and what I gained.</span>
                    </h2>
                </div>
                <div className="readings">
                    {BOOKS.map((b, i) => <Book key={i} book={b}/>)}
                </div>
            </div>
        </section>
    )
}
