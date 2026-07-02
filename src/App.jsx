import { useEffect, useState } from 'react'
import './App.css'

function SunIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="2" />
      <path
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"
      />
    </svg>
  )
}

function MoonIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
        d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"
      />
    </svg>
  )
}

const heroStats = [
  { label: 'Target TPS', value: '1000' },
  { label: 'Block Time', value: '1s' },
  { label: 'Token', value: 'ELD' },
]

const networkStats = [
  { label: 'Consensus', value: 'PoS' },
  { label: 'Testnet', value: 'LIVE' },
]

const features = [
  {
    number: '01',
    eyebrow: 'Earn',
    title: 'Provide Storage',
    body:
      'Run a node on any device - laptop, phone, server. Contribute disk space. Earn ELD tokens proportional to uptime and capacity.',
    note: 'Any device',
  },
  {
    number: '02',
    eyebrow: 'Share',
    title: 'Ephemeral Content-Addressed Data',
    body:
      'Upload files identified by their cryptographic hash. Set your own TTL (Time To Live). Data lives exactly as long as you need, then automatically expires and is cleaned from the network. Fast, cheap, and self-managing.',
    note: 'TTL-controlled - Automatic expiry',
  },
  {
    number: '03',
    eyebrow: 'Build',
    title: 'Decentralized Apps',
    body:
      'Full API and SDK access. Perfect for live streaming, caching layers, temporary media, session data, social feeds, and any application that needs fast, unstoppable storage that does not live forever.',
    note: 'Open protocol',
  },
]

const terminalStatus = [
  '+-----------------------------+',
  '| NODE ID  eld-node-7f3c      |',
  '| NETWORK  testnet            |',
  '| STATUS   ONLINE             |',
  '| PEERS    24 connected       |',
  '| UPTIME   99.3%              |',
  '| STORAGE  8 / 12 GB          |',
  '| SYNC     94.7%              |',
  '| LATENCY  62ms               |',
  '+-----------------------------+',
].join('\n')

const footerColumns = [
  {
    heading: 'ELD',
    items: ['a decentralized ephemeral storage protocol.', '/eld/ - old nordic word for fire.'],
  },
  {
    heading: 'Protocol',
    items: [
      { label: 'Roadmap', href: 'https://docs.eld.network/roadmap' },
      { label: 'Documentation', href: 'https://docs.eld.network' }
    ],
  },
  {
    heading: 'Resources',
    items: [
      { label: 'Eld Blockchain Explorer', href: 'https://explorer.eld.network' },
      { label: 'GitHub', href: 'https://github.com/eldnetwork' },
    ],
  },
  {
    heading: 'Community',
    items: [{ label: 'X / Twitter', href: 'https://x.com/eld_network' }],
  },
]

function App() {
  const [isLightTheme, setIsLightTheme] = useState(() => {
    if (typeof window === 'undefined') {
      return false
    }
    return window.localStorage.getItem('eld-home-theme') === 'light'
  })

  useEffect(() => {
    document.documentElement.classList.toggle('eld-theme-light', isLightTheme)
    const meta = document.querySelector('meta[name="theme-color"]')
    if (meta) {
      meta.setAttribute('content', isLightTheme ? '#eff3f8' : '#000000')
    }
  }, [isLightTheme])

  const handleThemeToggle = () => {
    setIsLightTheme((prev) => {
      const nextIsLight = !prev
      window.localStorage.setItem('eld-home-theme', nextIsLight ? 'light' : 'dark')
      return nextIsLight
    })
  }

  return (
    <div className={`new-home${isLightTheme ? ' new-home--light' : ''}`}>
      <div className="new-home__grid" />

      <header className="new-home__header">
        <div className="new-home__brand">
          <div className="new-home__brand-mark">E</div>
          <div className="new-home__brand-text">
            <span className="new-home__brand-name">ELD</span>
            <span className="new-home__brand-divider">//</span>
            <span className="new-home__brand-subtitle">NETWORK</span>
          </div>
        </div>

        <div className="new-home__header-meta">
          <button
            type="button"
            className="new-home__theme-toggle"
            onClick={handleThemeToggle}
            aria-label={isLightTheme ? 'Switch to dark mode' : 'Switch to light mode'}
            title={isLightTheme ? 'Switch to dark mode' : 'Switch to light mode'}
          >
            {isLightTheme ? <MoonIcon /> : <SunIcon />}
          </button>
          <a
            href="https://explorer.eld.network"
            className="new-home__header-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            ELD BLOCKCHAIN EXPLORER -&gt;
          </a>
        </div>
      </header>
      <div className="new-home__social-banner" role="status">
        <span className="new-home__social-banner-text">
          Follow Eld on{' '}
          <a
            href="https://x.com/eld_network"
            className="new-home__social-banner-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            X / Twitter
          </a>
        </span>
      </div>

      <main id="top" className="new-home__content">
        <section className="new-home__hero">
          <div className="new-home__hero-copy">
            <p className="new-home__eyebrow">ELD NETWORK // TESTNET 2026</p>
            <h1 className="new-home__title">
              ELD<span className="new-home__title-dot">.</span>
            </h1>
            <h2 className="new-home__subtitle">Decentralized Ephemeral Storage Protocol.</h2>
            <p className="new-home__description">
              /eld/ - old nordic word for fire.
              <br />
              Earn tokens by providing storage. Share fast, content-addressed files with
              automatic TTL expiry. Build decentralized applications on high-speed,
              temporary storage.
            </p>

            <div className="new-home__hero-stats">
              {heroStats.map((stat) => (
                <div key={stat.label} className="new-home__mini-stat">
                  <span className="new-home__mini-stat-label">{stat.label}</span>
                  <strong className="new-home__mini-stat-value">{stat.value}</strong>
                </div>
              ))}
            </div>
          </div>

          <aside className="new-home__terminal">
            <div className="new-home__terminal-top">
              <div className="new-home__terminal-dots" aria-hidden="true">
                <span />
                <span />
                <span />
              </div>
              <span className="new-home__terminal-title">eld-node - bash</span>
            </div>

            <div className="new-home__terminal-body">
              <p className="new-home__terminal-command">//example usage:</p>
              <p className="new-home__terminal-command">$ eld status</p>

              <pre className="new-home__terminal-ascii">{terminalStatus}</pre>

              <div className="new-home__earned">
                <span>EARNED (total)</span>
                <div className="new-home__earned-row">
                  <div className="new-home__earned-bar">
                    <div className="new-home__earned-fill" />
                  </div>
                  <strong>428.34 ELD</strong>
                </div>
              </div>

              <div className="new-home__terminal-log">
                <p>$ eld start --testnet</p>
                <p>[OK] connecting to peers...</p>
                <p>[OK] storage allocated</p>
                <p>[OK] node is live</p>
              </div>
            </div>
          </aside>
        </section>

        <section className="new-home__network-strip" aria-label="Network stats">
          {networkStats.map((stat) => (
            <div key={stat.label} className="new-home__network-stat">
              <span>{stat.label}</span>
              <strong>{stat.value}</strong>
            </div>
          ))}
        </section>

        <section id="explorer" className="new-home__section">
          <p className="new-home__eyebrow">How it works</p>
          <div className="new-home__feature-grid">
            {features.map((feature) => (
              <article key={feature.number} className="new-home__feature-card">
                <div className="new-home__feature-topline">
                  <span>{feature.number}</span>
                  <span>{feature.eyebrow}</span>
                </div>
                <h3>{feature.title}</h3>
                <p>{feature.body}</p>
                <div className="new-home__feature-note">{feature.note}</div>
              </article>
            ))}
          </div>
        </section>

        <section id="testnet" className="new-home__cta-panel">
          <p className="new-home__eyebrow">Ignite the network</p>
          <div className="new-home__cta-copy">
            <h2>
              TESTNET
              <br />
              <span>IS LIVE.</span>
            </h2>
            <p>
              Be among the first to run a node, earn tokens, and help shape
              the future of decentralized ephemeral storage.
              <br />
              <a
                href="https://explorer.eld.network"
                className="new-home__cta-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                ELD BLOCKCHAIN EXPLORER -&gt;
              </a>
            </p>
          </div>
        </section>
      </main>

      <footer id="community" className="new-home__footer">
        <div className="new-home__footer-grid">
          {footerColumns.map((column) => (
            <div key={column.heading} className="new-home__footer-column">
              <h3>{column.heading}</h3>
              {column.items.map((item) => (
                typeof item === 'string' ? (
                  <p key={item}>{item}</p>
                ) : (
                  <p key={item.href}>
                    <a
                      href={item.href}
                      className="new-home__footer-link"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {item.label}
                    </a>
                  </p>
                )
              ))}
            </div>
          ))}
        </div>
        <div className="new-home__footer-bottom">
          <span>© 2026 ELD NETWORK. ALL RIGHTS RESERVED.</span>
        </div>
      </footer>
    </div>
  )
}

export default App
