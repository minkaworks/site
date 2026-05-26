import type { Metadata } from 'next'
import { ContactForm } from './contact-form'
import { copy } from './content'

export const metadata: Metadata = {
  title: 'Minka Works | Open-source lab',
  description: 'Minka Works is an open-source lab publishing software, tools, and cookbooks.',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Minka Works | Open-source lab',
    description: 'Minka Works is an open-source lab publishing software, tools, and cookbooks.',
    url: 'https://minkaworks.com',
    siteName: 'Minka Works',
    type: 'website',
  },
}

export default function Home() {
  return (
    <main>
      <div className="homeShell">
        <div className="homeContent">
          <section className="documentHero" id="top">
            <h1 className="heroWordmark">MINKA</h1>
            <p className="documentLead">{copy.hero.title}</p>
            <p className="documentLead">{copy.hero.text}</p>
            {copy.hero.note ? <p className="documentHeroNote">{copy.hero.note}</p> : null}
          </section>

          <section className="documentSection" id="lab">
            <p className="documentSectionTitle">LAB</p>
            <div className="documentRows">
              {copy.lab.cards.map((card) => (
                <article className="documentRow" key={card.title}>
                  <span className="documentRowLabel">{card.title}</span>
                  <p>{card.description}</p>
                </article>
              ))}
            </div>
          </section>

          <section className="documentSection" id="build">
            <p className="documentSectionTitle">RELEASES</p>
            <p className="documentSectionText">{copy.releases.title}</p>
            {copy.releases.text ? <p className="documentHeroNote">{copy.releases.text}</p> : null}
          </section>

          <section className="documentSection" id="contact">
            <p className="documentSectionTitle">CONTACT</p>
            <p className="documentSectionText">{copy.contact.title}</p>
            <p className="documentHeroNote">{copy.contact.trust}</p>
            <ContactForm copy={copy.contact} />
          </section>

          <footer className="siteFooter">
            <div className="siteFooterInner">
              <div className="siteFooterBlock">
                <span className="siteFooterTitle">MINKA</span>
                <span className="siteFooterMeta">&copy; {copy.footer.company}</span>
              </div>
              <div className="siteFooterBlock siteFooterBlockLinks">
                <span className="siteFooterTitle">LEGAL</span>
                <div className="siteFooterLinks">
                  <a href="/privacy">{copy.footer.privacy}</a>
                  <a href="/terms">{copy.footer.terms}</a>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </main>
  )
}
