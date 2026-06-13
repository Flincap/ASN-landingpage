import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export default function Header({ solid = false }: { solid?: boolean }) {
  const [scrolled, setScrolled] = useState(solid)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (solid) return
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    addEventListener('scroll', onScroll, { passive: true })
    return () => removeEventListener('scroll', onScroll)
  }, [solid])

  useEffect(() => {
    document.body.classList.toggle('menu-open', open)
    return () => document.body.classList.remove('menu-open')
  }, [open])

  const close = () => setOpen(false)

  return (
    <header className={scrolled || open ? 'scrolled' : ''}>
      <div className="wrap nav">
        <Link to="/" className="brand" aria-label="Africa Stablecoin Network home" onClick={close}>
          <img src="/asn-logo.png" alt="Africa Stablecoin Network" width={480} height={156} />
        </Link>
        <nav className={`nav-links${open ? ' open' : ''}`}>
          <Link to="/#about" onClick={close}>About</Link>
          <Link to="/what-we-do" onClick={close}>What We Do</Link>
          <Link to="/#events" onClick={close}>Events</Link>
          <a href="https://www.nigeriastablecoinsummit.com/" target="_blank" rel="noopener noreferrer">
            2026 Summit
          </a>
          <Link to="/#involve" className="nav-cta" onClick={close}>Get Involved</Link>
        </nav>
        <button
          className="burger"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  )
}
