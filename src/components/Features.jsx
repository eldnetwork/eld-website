import { features } from '../content/home'

function Features() {
  return (
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
  )
}

export default Features
