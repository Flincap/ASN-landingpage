import { useEffect } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { useReveal, Arrow } from '../components/ui'

const PILLARS = [
  {
    id: 'advocacy',
    num: '01',
    title: 'Policy & Regulatory Advocacy',
    body: [
      <>We sit between the people writing the rules and the people building on them. We work with <strong style={{ color: 'var(--ink)' }}>regulators, companies and think tanks</strong>, and consult for <strong style={{ color: 'var(--ink)' }}>governments</strong>, on what proportionate stablecoin oversight looks like: consumer protection and market integrity, without freezing out the builders solving real payment problems.</>,
      <>Our position is consistent. Nigerians are already using stablecoins at world-leading scale. The question for policy is not whether, but how.</>,
    ],
    proof: <><strong>Nigeria Stablecoin Summit 1.0</strong> (July 24, 2025) put regulators and industry on the same stage for the first time at a dedicated stablecoin convening in Africa. The conversations it opened now run through our ongoing policy work with regulators and governments.</>,
  },
  {
    id: 'convening',
    num: '02',
    title: 'Convening & Summits',
    body: [
      <>Policy moves when the right people share a room. We convene the policymakers, stablecoin issuers, banks, fintechs, developers and researchers shaping digital finance in Africa — at no cost to attendees.</>,
      <>Next up: <strong style={{ color: 'var(--ink)' }}>Nigeria Stablecoin Summit 2.0</strong>, July 30, 2026, Lagos Oriental Hotel.</>,
    ],
    proof: <><strong>July 24, 2025</strong> — Africa's first stablecoin conference, Lagos Oriental Hotel, with partners from across the blockchain, fintech and developer ecosystem. <strong>November 2025</strong> — West Africa Stablecoin Summit, Abuja. Both free to attend, both full rooms.</>,
  },
  {
    id: 'research',
    num: '03',
    title: 'Research & Education',
    body: [
      <>Good regulation needs good data. We track stablecoin adoption across African markets and publish what we find, drawing on sources like Chainalysis's Geography of Cryptocurrency report — which puts Nigeria second in the world for grassroots adoption, with $92.1 billion in on-chain value received in a single year.</>,
      <>Education starts early: our essay programmes invite secondary school students and undergraduates across Nigeria to think and write about digital finance.</>,
    ],
    proof: <>The <strong>national essay competition</strong> attached to the Nigeria Stablecoin Summit, open to secondary school students and undergraduates from all Nigerian higher institutions — original writing only, judged and recognised at the summit.</>,
  },
  {
    id: 'ecosystem',
    num: '04',
    title: 'Ecosystem Collaboration',
    body: [
      <>Stablecoin infrastructure in Africa will be built by many hands: issuers, exchanges, banks, fintechs, blockchain platforms and the developers behind them. We make the introductions and keep the working conversations going between summits.</>,
      <>If you are building on or around stablecoins anywhere on the continent, there is a place for you in this network.</>,
    ],
    proof: <>Past summit collaborators span <strong>blockchain platforms, developer communities, banks, fintechs, think tanks and regulators</strong> — the same mix we connect year-round, not just on event days.</>,
  },
]

export default function WhatWeDo() {
  useReveal()
  useEffect(() => {
    document.title = 'What We Do — Africa Stablecoin Network'
  }, [])

  return (
    <>
      <Header solid />

      <section className="page-hero">
        <div className="wrap">
          <span className="eyebrow">What we do</span>
          <h1 className="h-display">Four lines of work. Each with something to show for it.</h1>
          <p>
            ASN is a not-for-profit, non-membership body. Everything below is built with the
            ecosystem — regulators, builders, researchers and partners who choose to contribute.
          </p>
        </div>
      </section>

      <div className="wrap">
        {PILLARS.map((p) => (
          <section className="wwd-section" id={p.id} key={p.id}>
            <div className="wwd-grid">
              <div className="rv">
                <span className="wwd-num">{p.num}</span>
                <h2>{p.title}</h2>
                {p.body.map((b, i) => (
                  <p className="body" key={i}>{b}</p>
                ))}
              </div>
              <div className="proof rv d1">
                <b>Proof of work</b>
                <p>{p.proof}</p>
              </div>
            </div>
          </section>
        ))}

        <div className="wwd-cta rv">
          <h2 className="h-display">Have something to contribute? Start with an email.</h2>
          <p>Tell us who you are and what you work on. We read everything.</p>
          <a className="btn btn-gold" href="mailto:hi@afristablecoin.org">
            hi@afristablecoin.org <Arrow />
          </a>
        </div>
      </div>

      <Footer />
    </>
  )
}
