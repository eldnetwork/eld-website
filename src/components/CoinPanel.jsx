function CoinPanel() {
  return (
    <section className="new-home__coin-panel" aria-label="ELD coins">
      <picture>
        <source type="image/avif" srcSet="/coin_panel_1_1000x500.avif" />
        <source type="image/webp" srcSet="/coin_panel_1_1000x500.webp" />
        <img
          src="/coin_panel_1_1000x500.png"
          alt="ELD hexagonal coins"
          className="new-home__coin-panel-image"
          width={1000}
          height={500}
          loading="lazy"
          decoding="async"
        />
      </picture>
    </section>
  )
}

export default CoinPanel
