import {useEffect, useRef, useState} from 'react'

const HOLDINGS = [
    {
        sym: 'NVDA', name: 'NVIDIA Corp.', pos: 'long', alloc: 28,
        last: '$ 201.34', change: '− 1.20 %', dir: 'down',
        points: '0,4 12,5 24,7 36,8 48,10 60,11 72,13 84,14 96,15 108,16 120,17', endPt: '120,17',
        delay: 0,
    },
    {
        sym: 'MSFT', name: 'Microsoft', pos: 'long', alloc: 18,
        last: '$ 424.16', change: '+ 1.46 %', dir: 'up',
        points: '0,14 12,13 24,14 36,11 48,12 60,10 72,11 84,9 96,10 108,8 120,7', endPt: '120,7',
        delay: 120,
    },
    {
        sym: 'VOO', name: 'Vanguard S&P 500', pos: 'core', alloc: 22,
        last: '$ 547.25', change: '− 0.66 %', dir: 'down',
        points: '0,8 12,9 24,8 36,10 48,9 60,11 72,10 84,12 96,13 108,14 120,15', endPt: '120,15',
        delay: 240,
    },
    {
        sym: 'QQQ', name: 'Invesco QQQ Trust', pos: 'core', alloc: 9,
        last: '$ 646.79', change: '− 0.32 %', dir: 'down',
        points: '0,6 12,7 24,9 36,8 48,10 60,11 72,10 84,13 96,14 108,15 120,17', endPt: '120,17',
        delay: 360,
    },
    {
        sym: 'BTC', name: 'Bitcoin', pos: 'long', alloc: 15,
        last: '$ 90,613', change: '+ 1.84 %', dir: 'up',
        points: '0,18 12,16 24,17 36,12 48,14 60,10 72,11 84,7 96,8 108,5 120,2', endPt: '120,2',
        delay: 480,
    },
    {
        sym: 'ETH', name: 'Ethereum', pos: 'long', alloc: 8,
        last: '$ 3,119', change: '− 0.54 %', dir: 'down',
        points: '0,8 12,9 24,8 36,10 48,9 60,11 72,10 84,12 96,11 108,13 120,12', endPt: '120,12',
        delay: 600,
    },
]

function Sparkline({points, endPt, dir, delay, animate}) {
    const [cx, cy] = endPt.split(',')
    return (
        <svg className={`spark ${dir}`} viewBox="0 0 120 22" preserveAspectRatio="none" aria-hidden="true">
            <polyline
                fill="none"
                stroke="currentColor"
                strokeWidth="1.2"
                points={points}
                style={animate ? {
                    strokeDasharray: 200,
                    strokeDashoffset: 0,
                    transition: `stroke-dashoffset 1200ms ease-out ${delay}ms`,
                } : {}}
            />
            <circle cx={cx} cy={cy} r="2" fill="currentColor"/>
        </svg>
    )
}

export default function Tradings() {
    const wrapRef = useRef(null)
    const [animate, setAnimate] = useState(false)

    useEffect(() => {
        const el = wrapRef.current
        if (!el || !('IntersectionObserver' in window)) {
            setAnimate(true);
            return
        }
        const io = new IntersectionObserver(entries => {
            if (entries[0].isIntersecting) {
                setAnimate(true);
                io.disconnect()
            }
        }, {threshold: 0.25})
        io.observe(el)
        return () => io.disconnect()
    }, [])

    return (
        <section id="tradings">
            <div className="shell">
                <div className="sec-head">
                    <div className="sec-label"><span className="hash">#</span> 06 / tradings</div>
                    <h2 className="sec-title">Paper portfolio <span className="dim">— a hobby, not advice.</span></h2>
                </div>
                <div className="trade-wrap" ref={wrapRef}>
                    <div className="trade-head">
                        <div>symbol</div>
                        <div>position</div>
                        <div>allocation</div>
                        <div>last</div>
                        <div>change</div>
                        <div style={{textAlign: 'right'}}>7d trend</div>
                    </div>
                    {HOLDINGS.map(h => (
                        <div className="trade-row" key={h.sym}>
                            <div className="trade-sym">
                                <span className="t">{h.sym}</span>
                                <span className="n">{h.name}</span>
                            </div>
                            <div className="pos">
                                <span className={`pchip ${h.pos}`}>{h.pos}</span>
                            </div>
                            <div className="alloc">
                <span className="track">
                  <span style={{
                      width: animate ? `${h.alloc}%` : '0%',
                      transition: 'width .9s cubic-bezier(.22,.61,.36,1)'
                  }}/>
                </span>
                                <span className="pct">{h.alloc} %</span>
                            </div>
                            <div className="num">{h.last}</div>
                            <div className={`num ${h.dir}`}>{h.change}</div>
                            <Sparkline points={h.points} endPt={h.endPt} dir={h.dir} delay={h.delay} animate={animate}/>
                        </div>
                    ))}

                </div>
                <div className="trade-disclaimer">
                    // paper account. not financial advice. for portfolio demo only. figure might delay due to cold start of free
                    severless endpoint
                </div>
            </div>
        </section>
    )
}
