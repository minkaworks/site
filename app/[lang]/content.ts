export const locales = ['es', 'en'] as const

export type Locale = (typeof locales)[number]

export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale)
}

export const dictionary = {
  es: {
    hero: {
      eyebrow: '[ OPEN WORK / USEFUL SYSTEMS ]',
      title: 'Sistemas abiertos para builders que quieren crear mejor software.',
      text: 'Minka es un laboratorio open-source que convierte curiosidad técnica en herramientas, workflows de IA y documentación reutilizable. Diseñamos con evidencia, límites claros y componentes que otros pueden auditar, adaptar y mejorar.',
      primary: 'Conversemos',
      note: 'Trae una idea, repo o workflow; buscamos el camino verificable.',
      thesis: 'Ruta de trabajo',
      steps: ['Entender', 'Documentar', 'Construir'],
    },
    future: {
      eyebrow: 'Lo que construimos',
      title: 'Herramientas pequeñas, modulares y útiles para trabajo técnico real.',
      text: 'Combinamos research, producto e ingeniería para publicar sistemas que se entienden rápido, se adoptan sin fricción y dejan trazabilidad de cada decisión.',
      cards: [
        {
          title: 'Tooling abierto',
          description: 'Plantillas, componentes y utilidades que se pueden leer, adaptar y extender.',
        },
        {
          title: 'Workflows de IA auditables',
          description: 'Flujos asistidos por IA con estados explícitos, ejemplos reales y control humano.',
        },
        {
          title: 'Documentación viva',
          description: 'READMEs, guías y sistemas de contenido que explican el qué, el cómo y los límites.',
        },
      ],
    },
    why: {
      eyebrow: 'Por qué existe Minka',
      title: 'La complejidad técnica debería poder leerse, reutilizarse y discutirse.',
      text: 'No vendemos misterio. Convertimos conocimiento técnico en infraestructura clara: sistemas abiertos, precisos y humanos.',
      cards: [
        {
          title: 'Utilidad',
          description: 'Cada pieza debe mejorar comprensión, velocidad o confianza. Si no ayuda, se elimina.',
        },
        {
          title: 'Apertura',
          description: 'El conocimiento se comparte para que otros puedan aprender, auditar y contribuir.',
        },
        {
          title: 'Modularidad',
          description: 'Diseñamos tokens, componentes y reglas que escalan sin esconder su funcionamiento.',
        },
      ],
    },
    research: {
      eyebrow: 'Áreas de enfoque',
      title: 'Nos movemos entre developer tools, workflows de IA y sistemas de documentación.',
      areas: [
        {
          title: 'Herramientas para builders',
          description: 'Interfaces, CLIs y plantillas que ayudan a convertir ideas en sistemas útiles.',
        },
        {
          title: 'Workflows asistidos por IA',
          description: 'Procesos con prompts, evaluaciones y límites documentados para confiar en el resultado.',
        },
        {
          title: 'Sistemas de contenido técnico',
          description: 'Arquitecturas para publicar research notes, guías, APIs y changelogs con claridad editorial.',
        },
        {
          title: 'Patrones reutilizables',
          description: 'Componentes y decisiones de diseño que otros equipos pueden copiar sin reinventar la base.',
        },
      ],
    },
    work: {
      eyebrow: 'Cómo trabajamos',
      title: 'Primero claridad; después componentes; finalmente código que se puede mantener.',
      principles: [
        {
          step: '01',
          title: 'Mapeamos',
          description: 'Definimos audiencia, resultado esperado, restricciones y señales de éxito verificables.',
        },
        {
          step: '02',
          title: 'Prototipamos',
          description: 'Probamos el flujo con ejemplos reales antes de convertirlo en producto o documentación.',
        },
        {
          step: '03',
          title: 'Publicamos',
          description: 'Entregamos herramientas documentadas, modulares y listas para ser auditadas o adaptadas.',
        },
      ],
    },
    contact: {
      eyebrow: 'Colabora con Minka',
      title: 'Si tu idea necesita volverse sistema, queremos escucharla.',
      trust: 'Respondemos en 24 a 48h con preguntas concretas y un siguiente paso claro.',
      name: 'Nombre',
      company: 'Proyecto / empresa',
      email: 'Correo',
      message: '¿Qué quieres construir, auditar o documentar?',
      submit: 'Enviar contexto',
      success: 'Mensaje recibido. Te responderemos pronto con el siguiente paso.',
      error: 'No se pudo enviar. Inténtalo nuevamente.',
    },
    footer: {
      github: 'GitHub',
      company: 'Minka Works 2026',
      privacy: 'Política de Privacidad de Datos',
      terms: 'Términos y Condiciones',
    },
  },
  en: {
    hero: {
      eyebrow: '[ OPEN WORK / USEFUL SYSTEMS ]',
      title: 'Open systems for builders who want to ship better software.',
      text: 'Minka is an open-source lab that turns technical curiosity into tools, AI workflows, and reusable documentation. We design with evidence, clear limits, and components others can audit, adapt, and improve.',
      primary: 'Let’s talk',
      note: 'Bring an idea, repo, or workflow; we will find the verifiable path.',
      thesis: 'Working path',
      steps: ['Understand', 'Document', 'Build'],
    },
    future: {
      eyebrow: 'What we build',
      title: 'Small, modular, useful tools for real technical work.',
      text: 'We combine research, product, and engineering to publish systems that are easy to understand, easy to adopt, and explicit about every decision.',
      cards: [
        {
          title: 'Open tooling',
          description: 'Templates, components, and utilities that can be read, adapted, and extended.',
        },
        {
          title: 'Auditable AI workflows',
          description: 'AI-assisted flows with explicit states, real examples, and human control.',
        },
        {
          title: 'Living documentation',
          description: 'READMEs, guides, and content systems that explain the what, the how, and the limits.',
        },
      ],
    },
    why: {
      eyebrow: 'Why Minka exists',
      title: 'Technical complexity should be readable, reusable, and open to discussion.',
      text: 'We do not sell mystery. We turn technical knowledge into clear infrastructure: open, precise, and human systems.',
      cards: [
        {
          title: 'Usefulness',
          description: 'Every piece must improve understanding, speed, or trust. If it does not help, it is removed.',
        },
        {
          title: 'Openness',
          description: 'Knowledge is shared so others can learn, audit, adapt, and contribute.',
        },
        {
          title: 'Modularity',
          description: 'We design tokens, components, and rules that scale without hiding how they work.',
        },
      ],
    },
    research: {
      eyebrow: 'Focus areas',
      title: 'We work across developer tools, AI workflows, and documentation systems.',
      areas: [
        {
          title: 'Tools for builders',
          description: 'Interfaces, CLIs, and templates that help turn ideas into useful systems.',
        },
        {
          title: 'AI-assisted workflows',
          description: 'Processes with prompts, evaluations, and documented limits so teams can trust the output.',
        },
        {
          title: 'Technical content systems',
          description: 'Architectures for publishing research notes, guides, APIs, and changelogs with editorial clarity.',
        },
        {
          title: 'Reusable patterns',
          description: 'Components and design decisions other teams can copy without reinventing the base.',
        },
      ],
    },
    work: {
      eyebrow: 'How we work',
      title: 'Clarity first; components next; maintainable code last.',
      principles: [
        {
          step: '01',
          title: 'We map',
          description: 'We define the audience, expected outcome, constraints, and verifiable success signals.',
        },
        {
          step: '02',
          title: 'We prototype',
          description: 'We test the flow with real examples before turning it into product or documentation.',
        },
        {
          step: '03',
          title: 'We publish',
          description: 'We ship documented, modular tools that are ready to be audited or adapted.',
        },
      ],
    },
    contact: {
      eyebrow: 'Build with Minka',
      title: 'If your idea needs to become a system, we want to hear it.',
      trust: 'We reply in 24-48h with concrete questions and a clear next step.',
      name: 'Name',
      company: 'Project / company',
      email: 'Email',
      message: 'What do you want to build, audit, or document?',
      submit: 'Send context',
      success: 'Message received. We will get back to you soon with the next step.',
      error: 'Could not send the message. Please try again.',
    },
    footer: {
      github: 'GitHub',
      company: 'Minka Works 2026',
      privacy: 'Data Privacy Policy',
      terms: 'Terms and Conditions',
    },
  },
} satisfies Record<Locale, Record<string, unknown>>
