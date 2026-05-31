import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { dictionary, isLocale, locales } from '../content'
import { Nav } from '../nav'

const copy = {
  es: {
    title: 'Política de Privacidad de Datos',
    intro:
      'Esta página explica cómo tratamos la información que nos compartes cuando usas el formulario de contacto y cómo cuidamos esos datos.',
    sections: [
      {
        title: 'Qué recolectamos',
        body: 'Nombre, empresa, correo y el mensaje que envías. También podemos recibir datos técnicos básicos del navegador para operar el sitio.',
      },
      {
        title: 'Para qué lo usamos',
        body: 'Para responder tu solicitud, evaluar si el proyecto encaja, dar seguimiento a la conversación y mantener contexto sobre el intercambio.',
      },
      {
        title: 'Con quién lo compartimos',
        body: 'No vendemos tus datos. Solo los compartimos con proveedores necesarios para operar el sitio, entregar el formulario o cumplir obligaciones legales.',
      },
      {
        title: 'Retención',
        body: 'Guardamos la información solo durante el tiempo necesario para responderte, dar seguimiento y cumplir con obligaciones razonables de negocio o legales.',
      },
      {
        title: 'Cómo lo protegemos',
        body: 'Limitamos el acceso a la información, usamos controles razonables para protegerla y evitamos compartirla fuera de los fines descritos arriba.',
      },
      {
        title: 'Tus derechos',
        body: 'Puedes pedir acceso, corrección o eliminación de tus datos escribiendo a nuestro correo de contacto. También puedes pedir que dejemos de usar tu información para seguimiento.',
      },
      {
        title: 'Cambios a esta política',
        body: 'Podemos actualizar esta política cuando cambie la forma en que operamos el sitio o el formulario.',
      },
    ],
  },
  en: {
    title: 'Data Privacy Policy',
    intro:
      'This page explains how we handle the information you share when you use the contact form and how we protect it.',
    sections: [
      {
        title: 'What we collect',
        body: 'Name, company, email, and the message you submit. We may also receive basic browser data needed to operate the site.',
      },
      {
        title: 'How we use it',
        body: 'To reply to your request, evaluate fit, follow up on the conversation, and keep context about the exchange.',
      },
      {
        title: 'Who we share it with',
        body: 'We do not sell your data. We only share it with providers needed to run the site, deliver the form, or meet legal obligations.',
      },
      {
        title: 'Retention',
        body: 'We keep the information only as long as needed to reply, follow up, and satisfy reasonable business or legal requirements.',
      },
      {
        title: 'How we protect it',
        body: 'We limit access, use reasonable safeguards, and avoid sharing it outside the purposes described above.',
      },
      {
        title: 'Your rights',
        body: 'You can request access, correction, or deletion by writing to our contact email. You can also ask us to stop using your information for follow-up.',
      },
      {
        title: 'Changes to this policy',
        body: 'We may update this policy when the way we operate the site or form changes.',
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
      canonical: `/${lang}/privacy`,
      languages: {
        es: '/es/privacy',
        en: '/en/privacy',
      },
    },
  }
}

export default async function PrivacyPage({ params }: { params: Promise<{ lang: string }> }) {
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
