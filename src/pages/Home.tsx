import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { useReveal, CountUp, Arrow } from '../components/ui'

/* Gallery photos are bundled by Vite so they can never 404 on deploy. */
const GALLERY_URLS = import.meta.glob<string>('../assets/gallery/*.webp', {
  eager: true,
  query: '?url',
  import: 'default',
})
const galleryUrl = (kind: string, n: number) =>
  GALLERY_URLS[`../assets/gallery/${kind}-${String(n).padStart(2, '0')}-640.webp`]

const VIDEO_ID = 'x8DxbBTnbgs'

const SWAP_WORDS = ['Africa.', 'Nigeria.', 'Lagos.', 'everyone.']

/** Rotating hero word: Africa → Nigeria → Lagos → everyone. */
function SwapWord() {
  const [i, setI] = useState(0)
  const [out, setOut] = useState(false)

  useEffect(() => {
    if (matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const cycle = setInterval(() => {
      setOut(true)
      setTimeout(() => {
        setI((v) => (v + 1) % SWAP_WORDS.length)
        setOut(false)
      }, 360)
    }, 3200)
    return () => clearInterval(cycle)
  }, [])

  return <span className={`hl-swap${out ? ' out' : ''}`}>{SWAP_WORDS[i]}</span>
}

const TICKER = [
  ['LAGOS', 'ACCRA'],
  ['NAIROBI', 'KIGALI'],
  ['ABUJA', 'JOHANNESBURG'],
  ['CAIRO', 'CASABLANCA'],
  ['DAKAR', 'ABIDJAN'],
  ['ONE BORDERLESS DIGITAL ECONOMY'],
  ['KAMPALA', 'DAR ES SALAAM'],
  ['LUSAKA', 'HARARE'],
] as const

const STATS = [
  { end: 2, prefix: '#', text: "Nigeria's global rank for grassroots crypto adoption." },
  { end: 205, prefix: '$', suffix: 'B+', text: 'received across Sub-Saharan Africa in the same period, up 52% year on year.' },
  { end: 43, suffix: '%', text: "of the region's crypto volume is stablecoins — and Nigeria holds the highest stablecoin concentration in Sub-Saharan Africa." },
  { end: 25, prefix: '$', suffix: 'B', text: 'in regional monthly volume at the March 2025 peak, driven by Nigerians moving into stablecoins during the naira devaluation.' },
  { end: 52, suffix: '%', text: "year-on-year growth in Sub-Saharan Africa's crypto value received." },
  { end: 3, prefix: '~', suffix: 'x', text: "Nigeria's lead over South Africa, the continent's second-largest market." },
]

const EVENTS = [
  {
    tag: 'Flagship',
    date: 'July 30, 2026',
    time: '8:00 AM WAT',
    title: 'Nigeria Stablecoin Summit 2.0',
    venue: 'Lagos Oriental Hotel, Victoria Island, Lagos',
    text: "The second edition of Nigeria's gathering on payments and banking innovation — policymakers, banks and fintech leaders in one room.",
    href: 'https://www.nigeriastablecoinsummit.com/',
    cta: 'Register',
    btn: 'btn-primary',
  },
  {
    tag: null,
    date: 'July 30, 2026',
    time: '8:00 AM WAT',
    title: 'Build AI Summit',
    venue: 'Lagos Oriental Hotel, Victoria Island, Lagos',
    text: "A builder-focused convening on artificial intelligence and the infrastructure behind Africa's next wave of products.",
    href: 'https://www.buildaisummit.com/',
    cta: 'Learn more',
    btn: 'btn-gold',
  },
]

const PATHS = [
  {
    title: 'Regulators & Policymakers',
    text: 'Work with us on stablecoin policy. We consult for governments and collaborate with regulators across markets.',
    subject: 'Regulator / Policymaker - Working with ASN',
  },
  {
    title: 'Builders & Startups',
    text: 'Join the working conversations connecting issuers, exchanges, banks and fintechs.',
    subject: 'Builder / Startup - Working with ASN',
  },
  {
    title: 'Researchers & Academia',
    text: 'Contribute data and analysis to our reports, or help run our student essay programmes.',
    subject: 'Researcher - Working with ASN',
  },
  {
    title: 'Media & Collaborators',
    text: 'Cover our work, or collaborate with us on convenings across the continent.',
    subject: 'Media / Collaboration - Working with ASN',
  },
]

const GALLERY_ROWS = [
  { kind: 'speaking', alts: ['Speaker on stage at the Nigeria Stablecoin Summit', 'Keynote at the Nigeria Stablecoin Summit', 'Panel discussion at the summit', 'Panellists on stage', 'Fireside conversation on stage', 'Speaker addressing the audience', 'Panel session at the summit', 'Speakers on the summit stage', 'On-stage conversation', 'Summit keynote moment'], reverse: false },
  { kind: 'exhibiting', alts: ['Exhibition booth at the summit', 'Exhibitors meeting attendees', 'Exhibition floor at the summit', 'Attendees at an exhibition stand', 'Demo at an exhibition booth', 'Exhibition hall conversations', 'Booth conversations at the summit', 'Exhibitors and attendees', 'Exhibition stand at the summit', 'Summit exhibition floor'], reverse: true },
  { kind: 'attending', alts: ['Audience at the Nigeria Stablecoin Summit', 'Attendees networking at the summit', 'Summit attendees in session', 'Networking between sessions', 'Audience during a keynote', 'Attendees at the summit', 'Conversations on the summit floor', 'Summit audience', 'Attendees meeting at the summit', 'Networking at the summit'], reverse: false },
]

function GalleryRow({ kind, alts, reverse }: (typeof GALLERY_ROWS)[number]) {
  const imgs = alts.map((alt, i) => ({
    src: galleryUrl(kind, i + 1),
    alt,
  }))
  // rendered twice for a continuous loop
  const loop = [...imgs, ...imgs]
  return (
    <div className={`g-row${reverse ? ' rev' : ''}`}>
      <div className="g-track">
        {loop.map((im, i) => (
          <img
            key={i}
            src={im.src}
            alt={i < imgs.length ? im.alt : ''}
            aria-hidden={i >= imgs.length}
            loading="lazy"
            decoding="async"
          />
        ))}
      </div>
    </div>
  )
}

export default function Home() {
  useReveal()
  const [videoLoaded, setVideoLoaded] = useState(false)

  useEffect(() => {
    document.title = 'Africa Stablecoin Network — Adoption, Use & Regulation of Stablecoins in Africa'
  }, [])

  return (
    <>
      <Header />

      {/* HERO */}
      <section className="hero" id="top">
        <div className="wrap">
          <h1 className="h-display">
            <span className="line"><span>Stablecoins are an</span></span>
            <span className="line"><span><em className="hl" style={{ fontStyle: 'normal' }}>economic lifeline</em></span></span>
            <span className="line"><span>for <SwapWord /></span></span>
          </h1>
          <p className="lede">
            The Africa Stablecoin Network works with regulators, builders and researchers on the
            appropriate adoption, use and regulation of stablecoins — beginning with Nigeria, the
            world's second-largest market for grassroots crypto adoption.
          </p>
          <div className="hero-ctas">
            <a href="https://www.nigeriastablecoinsummit.com/" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
              Nigeria Stablecoin Summit 2.0 <Arrow />
            </a>
            <Link to="/#involve" className="btn btn-ghost">Get involved</Link>
          </div>
          <div className="hero-meta">
            <div><b>Convened</b>Africa's first stablecoin conference · July 24, 2025</div>
            <div><b>Based in</b>Lekki, Lagos, Nigeria</div>
            <div><b>Focus</b>Adoption · Use · Regulation</div>
          </div>
        </div>
      </section>

      {/* CORRIDOR STRIP */}
      <div className="ticker" aria-hidden="true">
        <div className="ticker-track">
          {[...TICKER, ...TICKER].map((item, i) => (
            <div className="ticker-item" key={i}>
              {item.length === 2 ? (<>{item[0]} <em>&#8644;</em> {item[1]}</>) : item[0]}
            </div>
          ))}
        </div>
      </div>

      {/* MISSION */}
      <section className="mission section" id="about">
        <div className="wrap mission-grid">
          <div className="rv">
            <span className="eyebrow">Who we are</span>
            <h2 className="h-display">A network built on contribution, not membership</h2>
            <p className="body">
              The Africa Stablecoin Network is a not-for-profit, non-membership body. We convened{' '}
              <b>Africa's first stablecoin conference</b> on July 24, 2025 at the Lagos Oriental
              Hotel, followed by the <b>West Africa Stablecoin Summit</b> in Abuja that November.
              Between events, we work with <b>regulators, companies and think tanks</b>, and consult
              for governments on what sound stablecoin policy looks like.
            </p>
            <p className="body">
              Our goal is specific: that stablecoins are adopted, used and regulated in ways that
              serve Africans — starting with Nigeria.
            </p>
          </div>
          <div className="rv d1">
            <p className="quote">
              "While stablecoins are a luxury for the West,{' '}
              <em>they are an economic lifeline for Africa.</em>"
            </p>
            <p className="quote-src">Nathaniel Luz — President, Africa Stablecoin Network</p>
            <p className="body">
              Currency volatility, costly remittances and thin banking access push millions of
              Africans toward dollar-denominated digital money. That shift is already happening. Our
              work is to make sure it happens responsibly — with rules that protect users and room
              for builders to build.
            </p>
          </div>
        </div>
      </section>

      {/* WHY THIS MATTERS / STATS */}
      <section className="stats-band section" id="why">
        <div className="wrap">
          <span className="eyebrow rv">Why this matters</span>
          <h2 className="h-display rv d1">
            The shift to stablecoins in Africa is not a forecast. It is already here.
          </h2>

          <div className="stats-lead rv d2">
            <div className="num">
              <CountUp end={92.1} decimals={1} prefix="$" suffix="B" />
            </div>
            <p className="cap">
              in on-chain crypto value received by Nigeria between July 2024 and June 2025 — nearly
              three times South Africa, the next largest market on the continent.
            </p>
          </div>

          <div className="stats-grid">
            {STATS.map((s, i) => (
              <div className={`stat rv${i % 3 === 1 ? ' d1' : i % 3 === 2 ? ' d2' : ''}`} key={i}>
                <div className="num">
                  <CountUp end={s.end} prefix={s.prefix ?? ''} suffix={s.suffix ?? ''} />
                </div>
                <p>{s.text}</p>
              </div>
            ))}
          </div>
          <p className="stats-src rv">
            Source: Chainalysis, 2025 Geography of Cryptocurrency Report · PwC Nigeria
          </p>
        </div>
      </section>

      {/* WHAT WE DO (teaser) */}
      <section className="section" id="work">
        <div className="wrap">
          <div className="pillars-head">
            <div className="rv">
              <span className="eyebrow">What we do</span>
              <h2 className="h-display">Four lines of work</h2>
            </div>
            <p className="rv d1">
              Advocacy, convening, research and ecosystem collaboration — each with real outcomes
              behind it.{' '}
              <Link to="/what-we-do" style={{ fontWeight: 600, color: 'var(--green)' }}>
                See the full picture →
              </Link>
            </p>
          </div>
          <div className="pillar-grid">
            <Link className="pillar rv" to="/what-we-do#advocacy" style={{ ['--pc' as string]: '#00A859' }}>
              <div className="ic">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#00A859" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 3 3 8l9 5 9-5-9-5Z" /><path d="M3 13l9 5 9-5" />
                </svg>
              </div>
              <h3>Policy & Regulatory Advocacy</h3>
              <p>Working with regulators and consulting for governments on stablecoin policy that protects users without freezing out builders.</p>
              <span className="more">Advocacy →</span>
            </Link>
            <Link className="pillar rv d1" to="/what-we-do#convening" style={{ ['--pc' as string]: '#2E3192' }}>
              <div className="ic">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#2E3192" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="9" cy="8" r="3.2" /><circle cx="17" cy="10" r="2.4" />
                  <path d="M3 19c0-3 2.7-5 6-5s6 2 6 5M14.5 14.4c2.6.3 4.5 1.9 4.5 4.6" />
                </svg>
              </div>
              <h3>Convening & Summits</h3>
              <p>From Africa's first stablecoin conference to the Nigeria Stablecoin Summit — the whole ecosystem in one room.</p>
              <span className="more">Convening →</span>
            </Link>
            <Link className="pillar rv d2" to="/what-we-do#research" style={{ ['--pc' as string]: '#F5B91B' }}>
              <div className="ic">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#b8880a" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 19V5a2 2 0 0 1 2-2h13v16H6a2 2 0 0 0-2 2Zm0 0a2 2 0 0 0 2 2h13" /><path d="M9 7h6M9 11h6" />
                </svg>
              </div>
              <h3>Research & Education</h3>
              <p>Data and insight on stablecoin adoption across Africa, plus essay programmes for students.</p>
              <span className="more">Research →</span>
            </Link>
            <Link className="pillar rv d3" to="/what-we-do#ecosystem" style={{ ['--pc' as string]: '#00A859' }}>
              <div className="ic">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#00A859" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M8 12h8M12 8v8" /><circle cx="12" cy="12" r="9" />
                </svg>
              </div>
              <h3>Ecosystem Collaboration</h3>
              <p>Connecting stablecoin issuers, banks, fintechs and developers across the continent.</p>
              <span className="more">Ecosystem →</span>
            </Link>
          </div>
        </div>
      </section>

      {/* MOMENTS */}
      <section className="moments section" id="moments">
        <div className="wrap">
          <span className="eyebrow rv">Moments that matter</span>
          <h2 className="h-display rv d1">Highlights from our past events</h2>
          <p className="sub rv d2">
            The Nigeria Stablecoin Summit, July 24, 2025, Lagos Oriental Hotel — and the West Africa
            Stablecoin Summit, November 2025, Abuja.
          </p>
        </div>

        <div className="gallery-rows rv d2">
          {GALLERY_ROWS.map((row) => (
            <GalleryRow key={row.kind} {...row} />
          ))}
        </div>

        <div className="wrap">
          <div
            className="video-facade rv d3"
            style={{ marginTop: 48 }}
            role="button"
            tabIndex={0}
            aria-label="Play summit recap video"
            onClick={() => setVideoLoaded(true)}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault()
                setVideoLoaded(true)
              }
            }}
          >
            {videoLoaded ? (
              <iframe
                src={`https://www.youtube.com/embed/${VIDEO_ID}?autoplay=1`}
                title="Summit recap"
                allow="autoplay; encrypted-media; picture-in-picture"
                allowFullScreen
              />
            ) : (
              <>
                <div className="play">
                  <svg width="26" height="26" viewBox="0 0 24 24" fill="#0C1136">
                    <path d="M8 5v14l11-7L8 5Z" />
                  </svg>
                </div>
                <span className="vf-label">WATCH THE SUMMIT RECAP</span>
              </>
            )}
          </div>
        </div>
      </section>

      {/* EVENTS */}
      <section className="events section" id="events">
        <div className="wrap">
          <span className="eyebrow rv">Upcoming events</span>
          <h2 className="h-display rv d1">Where to find us next</h2>
          <div className="event-list">
            {EVENTS.map((ev, i) => (
              <div className={`ev-card rv${i === 1 ? ' d1' : ''}`} key={ev.title}>
                {ev.tag && <span className="ev-tag">{ev.tag}</span>}
                <div className="ev-date">{ev.date}</div>
                {ev.time && <div className="ev-time">{ev.time}</div>}
                <h3>{ev.title}</h3>
                <div className="ev-venue">{ev.venue}</div>
                <p>{ev.text}</p>
                <a className={`btn ${ev.btn}`} href={ev.href} target="_blank" rel="noopener noreferrer">
                  {ev.cta} <Arrow />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GET INVOLVED */}
      <section className="involve section" id="involve">
        <div className="wrap">
          <span className="eyebrow rv">Get involved</span>
          <h2 className="h-display rv d1">No membership. Just a shared mission.</h2>
          <p className="involve-sub rv d2">
            There is no membership to hold and nothing to sign up for. You take part by contributing
            what you do best — write to us and we will find the right place for it.
          </p>
          <div className="paths">
            {PATHS.map((p, i) => (
              <a
                className={`path rv${i ? ` d${i}` : ''}`}
                key={p.title}
                href={`mailto:hi@afristablecoin.org?subject=${encodeURIComponent(p.subject)}`}
              >
                <div>
                  <h3>{p.title}</h3>
                  <p>{p.text}</p>
                </div>
                <span className="arr"><Arrow size={18} /></span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
