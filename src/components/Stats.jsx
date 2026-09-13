import { protocolStats } from '../content/home'

function Stats() {
  return (
    <section className="new-home__stats-grid" aria-label="Protocol stats">
      {protocolStats.map((stat) => (
        <div key={stat.label} className="new-home__stat-card">
          <span className="new-home__stat-label">{stat.label}</span>
          <strong className="new-home__stat-value">{stat.value}</strong>
        </div>
      ))}
    </section>
  )
}

export default Stats
