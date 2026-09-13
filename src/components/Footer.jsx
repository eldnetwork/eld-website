import { footerColumns } from '../content/home'

function Footer() {
  return (
    <footer id="community" className="new-home__footer">
      <div className="new-home__footer-grid">
        {footerColumns.map((column) => (
          <div key={column.heading} className="new-home__footer-column">
            <h3>{column.heading}</h3>
            {column.items.map((item) =>
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
              ),
            )}
          </div>
        ))}
      </div>
      <div className="new-home__footer-bottom">
        <span>© 2026 ELD NETWORK. ALL RIGHTS RESERVED.</span>
      </div>
    </footer>
  )
}

export default Footer
