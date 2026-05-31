export const locales = ['es', 'en'] as const

export type Locale = (typeof locales)[number]

export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale)
}

export const dictionary = {
  es: {
    hero: {
      eyebrow: '[ OPEN-SOURCE LAB ]',
      title: 'Open-source lab.',
      text: 'MINKA publica software, tools y cookbooks en público, con un footprint pequeño y una interfaz fácil de leer.',
      primary: 'Enviar nota',
      note: 'El trabajo actual vive en repos públicos, drafts y referencias breves que se pueden revisar rápido.',
      thesis: 'Lab index',
      steps: ['Software', 'Tools', 'Cookbooks'],
    },
    lab: {
      eyebrow: 'Lab',
      title: 'Trabajo público, pequeño y legible.',
      text: 'El laboratorio se organiza en tres tracks simples para publicar trabajo técnico útil sin ruido extra. Cada uno mantiene un lenguaje directo y una salida clara.',
      cards: [
        {
          title: 'software',
          description: 'Software open-source publicado desde el lab, con foco en utilidad real y mantenimiento razonable.',
        },
        {
          title: 'tools',
          description: 'Herramientas y utilidades hechas para trabajo técnico real, sin capas innecesarias de marketing o complejidad.',
        },
        {
          title: 'cookbooks',
          description: 'Cookbooks y referencias construidas desde trabajo en curso, para dejar trazabilidad de decisiones y flujos.',
        },
      ],
    },
    releases: {
      eyebrow: 'Releases',
      title: 'New releases are in progress.',
      text: 'Public when ready.',
      cards: [
        {
          title: 'current state',
          description: 'El trabajo activo vive en repos públicos y drafts.',
        },
        {
          title: 'release rule',
          description: 'Cada salida se publica cuando ya puede sostenerse en público.',
        },
        {
          title: 'footprint',
          description: 'La home se mantiene corta, directa y enfocada en lo que existe.',
        },
      ],
    },
    contact: {
      eyebrow: 'Contact',
      title: 'Send a repo, release, or note.',
      trust: 'Respuesta corta en 24-48h. Con contexto suficiente, la conversación puede arrancar rápido y sin ida y vuelta innecesaria.',
      name: 'nombre',
      company: 'proyecto / empresa',
      email: 'email',
      message: 'que estas enviando?',
      submit: 'send',
      success: 'Mensaje recibido. Te responderemos pronto con el siguiente paso.',
      error: 'No se pudo enviar el mensaje. Intentalo de nuevo.',
    },
    footer: {
      github: 'GitHub',
      company: 'Minka Works 2026',
      privacy: 'politica de privacidad de datos',
      terms: 'terminos y condiciones',
    },
  },
  en: {
    hero: {
      eyebrow: '[ OPEN-SOURCE LAB ]',
      title: 'Open-source lab.',
      text: 'MINKA publishes software, tools, and cookbooks in public, with a small footprint and a site that is easy to scan.',
      primary: 'Send a note',
      note: 'Current work lives in public repos, drafts, and short references that can be reviewed quickly.',
      thesis: 'Lab index',
      steps: ['Software', 'Tools', 'Cookbooks'],
    },
    lab: {
      eyebrow: 'Lab',
      title: 'Public work with a small, readable footprint.',
      text: 'The lab stays organized into three simple tracks so the site can publish useful technical work without extra noise. Each one keeps a direct tone and a clear output.',
      cards: [
        {
          title: 'software',
          description: 'Open-source software released from the lab, with a bias toward useful work and sustainable maintenance.',
        },
        {
          title: 'tools',
          description: 'Tools and utilities published for real technical work, without extra layers of marketing or unnecessary complexity.',
        },
        {
          title: 'cookbooks',
          description: 'Cookbooks and references built from ongoing work, so decisions and workflows stay readable over time.',
        },
      ],
    },
    releases: {
      eyebrow: 'Releases',
      title: 'New releases are in progress.',
      text: 'Public when ready.',
      cards: [
        {
          title: 'current state',
          description: 'Current work lives in public repos and drafts.',
        },
        {
          title: 'release rule',
          description: 'Each release goes public only when it is ready to stand on its own.',
        },
        {
          title: 'footprint',
          description: 'The home stays short, direct, and focused on what actually exists.',
        },
      ],
    },
    contact: {
      eyebrow: 'Contact',
      title: 'Send a repo, release, or note.',
      trust: 'Short reply in 24-48h. With enough context, the conversation can start quickly without extra back and forth.',
      name: 'name',
      company: 'project / company',
      email: 'email',
      message: 'what are you sending?',
      submit: 'send',
      success: 'Message received. We will get back to you soon with the next step.',
      error: 'Could not send the message. Please try again.',
    },
    footer: {
      github: 'GitHub',
      company: 'Minka Works 2026',
      privacy: 'data privacy policy',
      terms: 'terms and conditions',
    },
  },
} as const
