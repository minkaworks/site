import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { isLocale, locales } from '../content'
import { Nav } from '../nav'

const copy = {
  es: {
    title: 'Términos y Condiciones',
    intro:
      'Estos términos describen las reglas básicas para usar este sitio y enviar consultas a Minka Works.',
    sections: [
      {
        title: 'Aceptación',
        body: 'Al usar este sitio aceptas estos términos. Si no estás de acuerdo, te pedimos no usar el formulario ni el contenido del sitio.',
      },
      {
        title: 'Uso permitido',
        body: 'El sitio se ofrece para compartir información sobre nuestro trabajo y recibir consultas iniciales de manera legítima y respetuosa.',
      },
      {
        title: 'Contenido',
        body: 'La información del sitio es informativa y puede cambiar sin aviso previo. No garantizamos que todo el contenido permanezca siempre igual o completo.',
      },
      {
        title: 'Consultas',
        body: 'Enviar un mensaje no crea una relación contractual ni garantiza el inicio de un proyecto. Cualquier trabajo formal requerirá un acuerdo separado.',
      },
      {
        title: 'Propiedad intelectual',
        body: 'El contenido visual, textual y de marca del sitio pertenece a Minka Works o a sus licenciantes y no puede reutilizarse sin permiso.',
      },
      {
        title: 'Disponibilidad',
        body: 'Podemos modificar, pausar o retirar el sitio o partes del sitio en cualquier momento sin responsabilidad por ello.',
      },
      {
        title: 'Responsabilidad',
        body: 'No somos responsables por interrupciones, errores externos, enlaces de terceros o usos indebidos del sitio.',
      },
      {
        title: 'Cambios a estos términos',
        body: 'Podemos actualizar estos términos cuando cambie la forma en que operamos el sitio o el proceso de contacto.',
      },
    ],
  },
  en: {
    title: 'Terms and Conditions',
    intro:
      'These terms describe the basic rules for using this site and sending inquiries to Minka Works.',
    sections: [
      {
        title: 'Acceptance',
        body: 'By using this site you agree to these terms. If you do not agree, please do not use the form or the site content.',
      },
      {
        title: 'Permitted use',
        body: 'The site is provided to share information about our work and receive initial inquiries in a legitimate and respectful manner.',
      },
      {
        title: 'Content',
        body: 'The information on the site is for reference only and may change without notice. We do not guarantee that all content will remain the same or complete.',
      },
      {
        title: 'Inquiries',
        body: 'Sending a message does not create a contractual relationship or guarantee a project. Any formal work will require a separate agreement.',
      },
      {
        title: 'Intellectual property',
        body: 'The visual, textual, and brand content on this site belongs to Minka Works or its licensors and may not be reused without permission.',
      },
      {
        title: 'Availability',
        body: 'We may modify, suspend, or withdraw the site or parts of it at any time without liability for doing so.',
      },
      {
        title: 'Liability',
        body: 'We are not responsible for interruptions, external errors, third-party links, or misuse of the site.',
      },
      {
        title: 'Changes to these terms',
        body: 'We may update these terms when the way we operate the site or the contact process changes.',
      },
    ],
  },
} as const

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }))
}

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params

  if (!isLocale(lang)) {
    return {}
  }

  return {
    title: `${copy[lang].title} | Minka Works`,
    description: copy[lang].intro,
    alternates: {
      canonical: `/${lang}/terms`,
      languages: {
        es: '/es/terms',
        en: '/en/terms',
      },
    },
  }
}

export default async function TermsPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params

  if (!isLocale(lang)) {
    notFound()
  }

  const page = copy[lang]

  return (
    <main>
      <Nav lang={lang} />
      <section className="legalPage">
        <article className="legalCard">
          <span className="eyebrow">Minka Works</span>
          <h1>{page.title}</h1>
          <p className="sectionLead">{page.intro}</p>
          <div className="legalStack">
            {page.sections.map((section) => (
              <div className="legalBlock" key={section.title}>
                <h2>{section.title}</h2>
                <p>{section.body}</p>
              </div>
            ))}
          </div>
          <a className="button secondary" href={`/${lang}`}>
            {lang === 'es' ? 'Volver al inicio' : 'Back to home'}
          </a>
        </article>
      </section>
    </main>
  )
}
