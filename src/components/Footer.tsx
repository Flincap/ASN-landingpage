import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer>
      <div className="wrap">
        <div className="foot-top">
          <div>
            <div className="foot-brand">
              <img src="/asn-mark.png" alt="" width={180} height={165} />
              <span>
                Africa
                <br />
                Stablecoin
                <br />
                Network
              </span>
            </div>
            <p className="foot-mission">
              Advancing the appropriate adoption, use and regulation of stablecoins in Africa,
              beginning with Nigeria.
            </p>
          </div>
          <div className="foot-contact">
            <a className="mail" href="mailto:hi@afristablecoin.org">
              hi@afristablecoin.org
            </a>
            <address>
              Plot 15, Orchid Road,
              <br />
              Lekki, Lagos, Nigeria
            </address>
            <div className="socials">
              <a href="https://x.com/afristablecoin" target="_blank" rel="noopener noreferrer" aria-label="X">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.9 2H22l-6.8 7.8L23 22h-6.3l-4.9-6.4L6.2 22H3l7.3-8.3L1.5 2h6.4l4.4 5.9L18.9 2Zm-1.1 18h1.7L7 3.9H5.2L17.8 20Z" />
                </svg>
              </a>
              <a href="https://www.linkedin.com/company/afristablecoin" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M4.98 3.5A2.5 2.5 0 1 1 0 3.5a2.5 2.5 0 0 1 4.98 0ZM.2 8.3h4.6V24H.2V8.3Zm7.6 0h4.4v2.1h.1c.6-1.2 2.1-2.4 4.4-2.4 4.7 0 5.6 3.1 5.6 7.1V24h-4.6v-7.8c0-1.9 0-4.3-2.6-4.3s-3 2-3 4.1V24H7.8V8.3Z" />
                </svg>
              </a>
              <a href="https://www.instagram.com/afristablecoin" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <rect x="3" y="3" width="18" height="18" rx="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.2" cy="6.8" r="1" fill="currentColor" stroke="none" />
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div className="foot-bottom">
          <span>© {new Date().getFullYear()} Africa Stablecoin Network</span>
          <nav>
            <Link to="/privacy">Privacy</Link>
            <Link to="/terms">Terms</Link>
          </nav>
        </div>
      </div>
    </footer>
  )
}
