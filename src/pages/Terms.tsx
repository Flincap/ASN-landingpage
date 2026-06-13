import { useEffect } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function Terms() {
  useEffect(() => {
    document.title = 'Terms of Use — Africa Stablecoin Network'
  }, [])

  return (
    <>
      <Header solid />
      <main className="legal wrap">
        <h1>Terms of Use</h1>
        <p>By using this website, you agree to these terms.</p>
        <h2>About this site</h2>
        <p>
          This website is operated by the Africa Stablecoin Network (ASN), a not-for-profit,
          non-membership organisation based in Lagos, Nigeria. Content on this site is provided for
          general information about our work and events.
        </p>
        <h2>No financial advice</h2>
        <p>
          Nothing on this website constitutes financial, investment, legal or tax advice.
          References to stablecoins, digital assets or market data are informational. Always do
          your own research and consult qualified professionals before making financial decisions.
        </p>
        <h2>Intellectual property</h2>
        <p>
          The ASN name, logo and original content on this site belong to the Africa Stablecoin
          Network. You may share or quote our materials with attribution. Third-party data cited on
          this site (for example, Chainalysis research) belongs to its respective owners.
        </p>
        <h2>External links</h2>
        <p>
          This site links to external websites, including event registration pages. We are not
          responsible for the content or practices of third-party sites.
        </p>
        <h2>Contact</h2>
        <p>
          Questions about these terms:{' '}
          <a href="mailto:hi@afristablecoin.org" style={{ color: 'var(--green)', fontWeight: 600 }}>
            hi@afristablecoin.org
          </a>.
        </p>
      </main>
      <Footer />
    </>
  )
}
