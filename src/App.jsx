import { useEffect, useState } from 'react'
import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'
import Stats from './components/Stats'
import Features from './components/Features'
import CoinPanel from './components/CoinPanel'
import Cta from './components/Cta'
import Footer from './components/Footer'

function resolveInitialLightTheme() {
  if (typeof window === 'undefined') {
    return false
  }
  try {
    const stored = window.localStorage.getItem('eld-home-theme')
    if (stored === 'light') {
      return true
    }
    if (stored === 'dark') {
      return false
    }
    return window.matchMedia('(prefers-color-scheme: light)').matches
  } catch {
    return false
  }
}

function App() {
  const [isLightTheme, setIsLightTheme] = useState(resolveInitialLightTheme)

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
      <a href="#top" className="new-home__skip-link">
        Skip to content
      </a>
      <div className="new-home__grid" />

      <Header isLightTheme={isLightTheme} onThemeToggle={handleThemeToggle} />

      <main id="top" className="new-home__content">
        <Hero />
        <Stats />
        <Features />
        <CoinPanel />
        <Cta />
      </main>

      <Footer />
    </div>
  )
}

export default App
