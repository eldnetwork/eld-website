function Hero() {
  return (
    <section className="new-home__hero">
      <div className="new-home__hero-copy">
        <p className="new-home__eyebrow">ELD NETWORK // TESTNET 2026</p>
        <p className="new-home__title" aria-hidden="true">
          ELD<span className="new-home__title-dot">.</span>
        </p>
        <h1 className="new-home__subtitle">Decentralized Ephemeral Storage Protocol.</h1>
        <p className="new-home__description">
          /eld/ - old nordic word for fire.
          <br />
          Earn tokens by providing storage. Share fast, content-addressed files with automatic TTL
          expiry. Build decentralized applications on high-speed, temporary storage.
        </p>
      </div>

      <aside className="new-home__mascot">
        <picture>
          <source type="image/avif" srcSet="/mascot_750x750.avif" />
          <source type="image/webp" srcSet="/mascot_750x750.webp" />
          <img
            src="/mascot_750x750.png"
            alt="ELD flame mascot"
            className="new-home__mascot-image"
            width={600}
            height={600}
            fetchpriority="high"
            decoding="async"
          />
        </picture>
      </aside>
    </section>
  )
}

export default Hero
