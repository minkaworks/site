import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { ContactForm } from './contact-form'
import { dictionary, isLocale, locales } from './content'
import { Nav } from './nav'
import { SlideScroll } from './slide-scroll'

const pageMetadata = {
  es: {
    title: 'Minka Works | IA práctica para negocios de Latinoamérica',
    description:
      'Minka Works ayuda a negocios de Latinoamérica a ordenar procesos que hoy dependen de WhatsApp, hojas de cálculo y trabajo manual.',
  },
  en: {
    title: 'Minka Works | Practical AI for Latin American Businesses',
    description:
      'Minka Works helps Latin American businesses organize work that still depends on WhatsApp, spreadsheets, and manual workflows.',
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

function ProcessIcon() {
  return (
    <svg className="visualIcon" aria-hidden="true" viewBox="0 0 24 24">
      <rect x="3" y="4" width="6" height="6" rx="1.5" />
      <rect x="15" y="4" width="6" height="6" rx="1.5" />
      <rect x="9" y="15" width="6" height="6" rx="1.5" />
      <path d="M9 7h6" />
      <path d="M18 10v2a3 3 0 0 1-3 3h-1" />
      <path d="M6 10v2a3 3 0 0 0 3 3h1" />
    </svg>
  )
}

function CycleIcon() {
  return (
    <svg className="visualIcon" aria-hidden="true" viewBox="0 0 24 24">
      <path d="M17 3h4v4" />
      <path d="M21 3 14 10" />
      <path d="M7 21H3v-4" />
      <path d="m3 21 7-7" />
      <path d="M20 13a8 8 0 0 1-12.7 5.9" />
      <path d="M4 11A8 8 0 0 1 16.7 5.1" />
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
      <SlideScroll />
      <section className="hero" data-slide>
        <Nav copy={copy.nav} lang={lang} />

        <div className="heroGrid" id="top">
          <div className="heroCopy">
            <h1>{copy.hero.title}</h1>
            <p className="heroText">{copy.hero.text}</p>
            <div className="heroActions">
              <a className="button primary" href={`/${lang}#contact`}>
                {copy.hero.primary}
              </a>
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
                  <ClipboardIcon />
                  <p>{step}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section" id="research" data-slide>
        <div className="sectionHeader">
          <h2>{copy.research.title}</h2>
        </div>
        <div className="areaGrid">
          {copy.research.areas.map((area, index) => (
            <article className="areaCard" key={area}>
              <div className="processHeader">
                <span className="cardIndex">0{index + 1}</span>
                <ProcessIcon />
              </div>
              <h3>{area}</h3>
            </article>
          ))}
        </div>
      </section>

      <section className="section method" id="method" data-slide>
        <div className="sectionHeader narrow">
          <h2>{copy.method.title}</h2>
        </div>
        <div className="principleGrid lifecycleGrid">
          {copy.method.principles.map((principle, index) => (
            <article className={`principle cycleNode cycleNode${index + 1}`} key={principle.title}>
              <div className="cycleMeta" aria-hidden="true">
                <span className="cycleNumber">0{index + 1}</span>
              </div>
              <div className="cycleCopy">
                <h3>{principle.title}</h3>
                <p>{principle.description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="contactSlide" id="contact" data-slide>
        <div className="cta">
          <div>
            <h2>{copy.contact.title}</h2>
          </div>
          <ContactForm copy={copy.contact} />
        </div>
      </section>
    </main>
  )
}
