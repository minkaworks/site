import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { ContactForm } from './contact-form'
import { dictionary, isLocale, locales } from './content'
import { Nav } from './nav'

const pageMetadata = {
  es: {
    title: 'Minka Works | Laboratorio de IA práctica',
    description:
      'Minka Works construye herramientas especializadas con evidencia para procesos manuales.',
  },
  en: {
    title: 'Minka Works | Practical AI Lab',
    description: 'Minka Works builds specialized tools with evidence for manual workflows.',
  },
} as const

function ClipboardIcon() {
  return (
    <svg className="visualIcon" aria-hidden="true" viewBox="0 0 24 24">
      <path d="M9 4h6" />
      <path d="M9 4a3 3 0 0 0 6 0" />
      <path d="M8 5H6a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2" />
      <path d="m8 12 2 2 4-4" />
      <path d="M8 17h8" />
    </svg>
  )
}

function GitHubIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24">
      <path d="M12 2C6.48 2 2 6.58 2 12.25c0 4.53 2.87 8.37 6.84 9.72.5.1.68-.22.68-.48 0-.24-.01-.88-.01-1.72-2.78.62-3.37-1.37-3.37-1.37-.46-1.2-1.12-1.52-1.12-1.52-.92-.65.07-.64.07-.64 1.02.07 1.56 1.07 1.56 1.07.91 1.58 2.39 1.12 2.97.86.09-.67.35-1.12.63-1.38-2.22-.26-4.56-1.14-4.56-5.06 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.31.1-2.73 0 0 .84-.27 2.75 1.05A9.16 9.16 0 0 1 12 6.54c.85 0 1.7.12 2.5.34 1.91-1.32 2.75-1.05 2.75-1.05.55 1.42.2 2.47.1 2.73.64.72 1.03 1.63 1.03 2.75 0 3.93-2.35 4.8-4.58 5.05.36.32.68.95.68 1.92 0 1.39-.01 2.51-.01 2.85 0 .26.18.58.69.48A10.3 10.3 0 0 0 22 12.25C22 6.58 17.52 2 12 2Z" />
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
            <h1>{copy.hero.title}</h1>
            <p className="heroText">{copy.hero.text}</p>
            <div className="heroActions">
              <a className="button primary" href={`/${lang}#contact`}>
                {copy.hero.primary}
              </a>
              <p className="heroNote">{copy.hero.note}</p>
            </div>
          </div>

          <div className="signalCard" aria-label={copy.hero.thesis}>
            <div className="notebookHeader">
              <ClipboardIcon />
              <span>{copy.hero.thesis}</span>
            </div>
            <div className="signalBody">
              {copy.hero.steps.map((step, index) => (
                <div className="todoItem" key={step}>
                  <span className="stepNumber" aria-hidden="true">
                    0{index + 1}
                  </span>
                  <p>{step}</p>
                </div>
              ))}
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
            <h2>{copy.contact.title}</h2>
            <p className="contactTrust">{copy.contact.trust}</p>
          </div>
          <ContactForm copy={copy.contact} />
        </div>
      </section>

      <footer className="siteFooter">
        <div className="siteFooterInner">
          <a
            className="siteFooterGithub"
            href="https://github.com/minkaworks"
            target="_blank"
            rel="noreferrer"
            aria-label="Minka Works GitHub"
          >
            <GitHubIcon />
          </a>
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
