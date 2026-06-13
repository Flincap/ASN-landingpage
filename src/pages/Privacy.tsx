import { useEffect } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function Privacy() {
  useEffect(() => {
    document.title = 'Privacy Policy — Africa Stablecoin Network'
  }, [])

  return (
    <>
      <Header solid />
      <main className="legal wrap">
        <h1>Privacy Policy</h1>
        <p>
          This General Privacy Policy covers all Africa Stablecoin Network (ASN) operations
          involving the collection, use, disclosure and other processing of personal information:
          organising events, managing relationships with our stakeholders and the public, and the
          use of our websites.
        </p>
        <h2>Who we are</h2>
        <p>
          We are the Africa Stablecoin Network, based at Plot 15, Orchid Road, Lekki, Lagos,
          Nigeria. For general questions about how we use your personal information, or any
          requests relating to your information, email{' '}
          <a href="mailto:dpo@afristablecoin.org" style={{ color: 'var(--green)', fontWeight: 600 }}>
            dpo@afristablecoin.org
          </a>.
        </p>
        <p>
          At ASN, we are committed to the use of personal information in a reasonable and
          responsible manner. We will not collect, retain, use or disclose personal information for
          any purpose other than those described in this Policy, will not collect more information
          than is needed, and will not retain information longer than necessary.
        </p>
        <h2>What personal information we collect and use</h2>
        <p>
          Processing personal information is incidental to our operations. The categories we
          process on a regular basis are names, professional affiliation, contact details
          (including job title, mailing address and professional email address), brief biographies,
          and communications you send us.
        </p>
        <h2>How we use it</h2>
        <ul>
          <li>To organise and run our events, including registration and attendee communication.</li>
          <li>To respond to enquiries sent to our contact addresses.</li>
          <li>To maintain relationships with stakeholders, partners and the public.</li>
        </ul>
        <h2>Your rights</h2>
        <p>
          You may request access to, correction of, or deletion of your personal information at any
          time by writing to dpo@afristablecoin.org.
        </p>
      </main>
      <Footer />
    </>
  )
}
