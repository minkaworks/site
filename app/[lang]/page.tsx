import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { ContactForm } from './contact-form'
import { dictionary, isLocale, locales } from './content'
import { Nav } from './nav'

const pageMetadata = {
  es: {
    title: 'Minka Works | Open work. Useful systems.',
    description:
      'Minka crea herramientas open-source, workflows de IA y documentación reutilizable para builders técnicos.',
  },
  en: {
    title: 'Minka Works | Open work. Useful systems.',
    description: 'Minka creates open-source tools, AI workflows, and reusable documentation for technical builders.',
  },
} as const

function GitHubIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24">
      <path d="M12 2C6.48 2 2 6.58 2 12.25c0 4.53 2.87 8.37 6.84 9.72.5.1.68-.22.68-.48 0-.24-.01-.88-.01-1.72-2.78.62-3.37-1.37-3.37-1.37-.46-1.2-1.12-1.52-1.12-1.52-.92-.65.07-.64.07-.64 1.02.07 1.56 1.07 1.56 1.07.91 1.58 2.39 1.12 2.97.86.09-.67.35-1.12.63-1.38-2.22-.26-4.56-1.14-4.56-5.06 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.31.1-2.73 0 0 .84-.27 2.75 1.05A9.16 9.16 0 0 1 12 6.54c.85 0 1.7.12 2.5.34 1.91-1.32 2.75-1.05 2.75-1.05.55 1.42.2 2.47.1 2.73.64.72 1.03 1.63 1.03 2.75 0 3.93-2.35 4.8-4.58 5.05.36.32.68.95.68 1.92 0 1.39-.01 2.51-.01 2.85 0 .26.18.58.69.48A10.3 10.3 0 0 0 22 12.25C22 6.58 17.52 2 12 2Z" />
    </svg>
  )
}

function CodebergIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24">
      <path d="M11.999.747A11.974 11.974 0 0 0 0 12.75c0 2.254.635 4.465 1.833 6.376L11.837 6.19c.072-.092.251-.092.323 0l4.178 5.402h-2.992l.065.239h3.113l.882 1.138h-3.674l.103.374h3.86l.777 1.003h-4.358l.135.483h4.593l.695.894h-5.038l.165.589h5.326l.609.785h-5.717l.182.65h6.038l.562.727h-6.397l.183.65h6.717A12.003 12.003 0 0 0 24 12.75 11.977 11.977 0 0 0 11.999.747zm3.654 19.104.182.65h5.326c.173-.204.353-.433.513-.65zm.385 1.377.18.65h3.563c.233-.198.485-.428.712-.65zm.383 1.377.182.648h1.203c.356-.204.685-.412 1.042-.648zz" />
    </svg>
  )
}

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }))
}

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params

  if (!isLocale(lang)) {
    return {}
  }

  const metadata = pageMetadata[lang]

  return {
    title: metadata.title,
    description: metadata.description,
    alternates: {
      canonical: `/${lang}`,
      languages: {
        es: '/es',
        en: '/en',
      },
    },
    openGraph: {
      title: metadata.title,
      description: metadata.description,
      url: `https://minkaworks.com/${lang}`,
      siteName: 'Minka Works',
      type: 'website',
    },
  }
}

export default async function Home({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params

  if (!isLocale(lang)) {
    notFound()
  }

  const copy = dictionary[lang]

  return (
    <main>
      <section className="hero" data-slide>
        <Nav lang={lang} />

        <div className="heroGrid" id="top">
          <div className="heroCopy">
            <span className="eyebrow">{copy.hero.eyebrow}</span>
            <h1>{copy.hero.title}</h1>
            <p className="heroText">{copy.hero.text}</p>
            <div className="heroActions">
              <a className="button primary" href={`/${lang}#contact`}>
                {copy.hero.primary}
              </a>
              <p className="heroNote">{copy.hero.note}</p>
            </div>
          </div>

        </div>
      </section>

      <section className="section" data-slide>
        <div className="sectionHeader narrow">
          <span className="eyebrow">{copy.future.eyebrow}</span>
          <h2>{copy.future.title}</h2>
          <p className="sectionLead">{copy.future.text}</p>
        </div>
        <div className="cardGrid threeUp">
          {copy.future.cards.map((card) => (
            <article className="overviewCard" key={card.title}>
              <h3>{card.title}</h3>
              <p>{card.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section" id="why" data-slide>
        <div className="sectionHeader">
          <span className="eyebrow">{copy.why.eyebrow}</span>
          <h2>{copy.why.title}</h2>
          <p className="sectionLead">{copy.why.text}</p>
        </div>
        <div className="cardGrid threeUp">
          {copy.why.cards.map((card) => (
            <article className="overviewCard" key={card.title}>
              <h3>{card.title}</h3>
              <p>{card.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section" id="research" data-slide>
        <div className="sectionHeader">
          <span className="eyebrow">{copy.research.eyebrow}</span>
          <h2>{copy.research.title}</h2>
        </div>
        <div className="cardGrid fourUp">
          {copy.research.areas.map((area) => (
            <article className="areaCard" key={area.title}>
              <h3>{area.title}</h3>
              <p>{area.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section method" id="method" data-slide>
        <div className="sectionHeader narrow">
          <span className="eyebrow">{copy.work.eyebrow}</span>
          <h2>{copy.work.title}</h2>
        </div>
        <div className="cardGrid threeUp">
          {copy.work.principles.map((principle) => (
            <article className="principle" key={principle.title}>
              <span className="principleStep" aria-hidden="true">
                {principle.step}
              </span>
              <h3>{principle.title}</h3>
              <p>{principle.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="contactSlide" id="contact" data-slide>
        <div className="cta">
          <div>
            <span className="eyebrow">{copy.contact.eyebrow}</span>
            <h2>{copy.contact.title}</h2>
            <p className="contactTrust">{copy.contact.trust}</p>
          </div>
          <ContactForm copy={copy.contact} />
        </div>
      </section>

      <footer className="siteFooter">
        <div className="siteFooterInner">
          <div className="siteFooterSocials">
            <a
              className="siteFooterSocial"
              href="https://github.com/minkaworks"
              target="_blank"
              rel="noreferrer"
              aria-label="Minka Works GitHub"
            >
              <GitHubIcon />
            </a>
            <a
              className="siteFooterSocial"
              href="https://codeberg.org/minkaworks"
              target="_blank"
              rel="noreferrer"
              aria-label="Minka Works Codeberg"
            >
              <CodebergIcon />
            </a>
          </div>
          <span>
            &copy; {copy.footer.company}
          </span>
          <div className="siteFooterLinks">
            <span className="siteFooterHeading">Terms & Policies</span>
            <a href={`/${lang}/privacy`}>{copy.footer.privacy}</a>
            <a href={`/${lang}/terms`}>{copy.footer.terms}</a>
          </div>
        </div>
      </footer>
    </main>
  )
}
