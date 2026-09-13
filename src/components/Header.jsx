import ThemeToggle from './ThemeToggle';

function Header({ isLightTheme, onThemeToggle }) {
  return (
    <>
      <header className="new-home__header">
        <div className="new-home__brand">
          <div className="new-home__brand-mark">E</div>
          <div className="new-home__brand-text">
            <span className="new-home__brand-name">ELD</span>
            <span className="new-home__brand-divider">{'//'}</span>
            <span className="new-home__brand-subtitle">NETWORK</span>
          </div>
        </div>

        <div className="new-home__header-meta">
          <ThemeToggle isLightTheme={isLightTheme} onToggle={onThemeToggle} />
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
    </>
  );
}

export default Header;
