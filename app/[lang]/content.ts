export const locales = ['es', 'en'] as const

export type Locale = (typeof locales)[number]

export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale)
}

export const dictionary = {
  es: {
    hero: {
      eyebrow: 'Minka Works',
      title: 'Somos un laboratorio que construye herramientas especializadas con evidencia.',
      text: 'Usamos IA aplicada e integraciones para diseñar soluciones especializadas. Medimos fricción, probamos hipótesis y construimos solo cuando la evidencia lo justifica.',
      primary: 'Quiero conversar',
      note: 'Cuéntanos cómo trabajan hoy y qué resultado quieren mover.',
      thesis: 'Empezamos simple',
      steps: ['Escuchamos', 'Ordenamos', 'Mejoramos'],
    },
    future: {
      eyebrow: 'El futuro que estamos construyendo',
      title: 'Construimos sistemas pequeños y enfocados que quitan fricción real.',
      text: 'Combinamos research, producto e ingeniería para lanzar herramientas que se adoptan rápido, se miden fácil y resuelven un problema concreto.',
      cards: [
        {
          title: 'Herramientas operativas',
          description: 'Interfaces y automatizaciones para flujos que el equipo repite todos los días.',
        },
        {
          title: 'Sistemas conectados',
          description: 'Integraciones que mueven datos entre las herramientas que ya usan.',
        },
        {
          title: 'Decisión asistida',
          description: 'Paneles simples y control ligero para decidir mejor con menos ruido.',
        },
      ],
    },
    why: {
      eyebrow: 'Por qué existe Minka Works',
      title: 'Solo construimos cuando el problema es frecuente, costoso y fácil de verificar.',
      text: 'Si la fricción es real, la podemos medir. Si no lo es, no vale la pena fabricar una solución.',
      cards: [
        {
          title: 'Frecuencia',
          description: 'El flujo ocurre lo suficiente como para importar de verdad.',
        },
        {
          title: 'Costo',
          description: 'Tiempo, dinero o errores se están fugando de forma visible.',
        },
        {
          title: 'Señal',
          description: 'Podemos validar la necesidad con usuarios reales rápidamente.',
        },
      ],
    },
    research: {
      eyebrow: 'Áreas de investigación',
      title: 'Nos enfocamos en flujos repetitivos donde IA e integraciones pueden mover una métrica concreta.',
      areas: [
        {
          title: 'Automatización de tareas repetitivas',
          description: 'Menos trabajo manual en procesos que consumen tiempo todos los días.',
        },
        {
          title: 'Sistemas de seguimiento y control',
          description: 'Más visibilidad para detectar desvíos antes de que se vuelvan costo.',
        },
        {
          title: 'Procesos internos y coordinación operativa',
          description: 'Menos fricción entre equipos, herramientas y responsables.',
        },
        {
          title: 'Herramientas de decisión basadas en datos',
          description: 'Señales claras para decidir con contexto, no con intuición sola.',
        },
      ],
    },
    work: {
      eyebrow: 'Cómo trabajamos',
      title: 'Investigamos, validamos y construimos en ese orden.',
      principles: [
        {
          step: '01',
          title: 'Medimos',
          description: 'Mapeamos el flujo y definimos dónde se pierde tiempo, dinero o control.',
        },
        {
          step: '02',
          title: 'Probamos',
          description: 'Validamos disposición de pago antes de pensar en producto.',
        },
        {
          step: '03',
          title: 'Construimos',
          description: 'Convertimos el flujo ganador en una herramienta simple y útil.',
        },
      ],
    },
    contact: {
      eyebrow: 'Conversemos',
      title: 'Si puedes describir el proceso y la métrica, queremos escucharte.',
      trust: 'Te respondemos en 24 a 48h.',
      name: 'Nombre',
      company: 'Empresa',
      email: 'Correo',
      message: '¿Qué tarea te quita más tiempo hoy?',
      submit: 'Enviar mi caso',
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
      eyebrow: 'Minka Works',
      title: 'We are a lab that builds specialized tools backed by evidence.',
      text: 'We use applied AI and integrations to design specialized solutions. We measure friction, test hypotheses, and build only when the evidence justifies it.',
      primary: 'I want to talk',
      note: 'Tell us how you work today and which outcome you want to move.',
      thesis: 'We start simple',
      steps: ['Listen', 'Organize', 'Improve'],
    },
    future: {
      eyebrow: 'The future we are building',
      title: 'We build small, focused systems that remove real friction.',
      text: 'We combine research, product, and engineering to ship tools that are easy to adopt, easy to measure, and built for one concrete problem.',
      cards: [
        {
          title: 'Operational tools',
          description: 'Interfaces and automations for workflows teams repeat every day.',
        },
        {
          title: 'Connected systems',
          description: 'Integrations that move data between the tools people already use.',
        },
        {
          title: 'Decision support',
          description: 'Simple dashboards and light controls for better decisions with less noise.',
        },
      ],
    },
    why: {
      eyebrow: 'Why Minka Works exists',
      title: 'We only build when the problem is frequent, costly, and easy to verify.',
      text: 'If the friction is real, we can measure it. If it is not, we do not build a solution.',
      cards: [
        {
          title: 'Frequency',
          description: 'The workflow happens often enough to matter.',
        },
        {
          title: 'Cost',
          description: 'Time, money, or errors are clearly leaking.',
        },
        {
          title: 'Signal',
          description: 'We can validate the need with real users quickly.',
        },
      ],
    },
    research: {
      eyebrow: 'Areas of research',
      title: 'We focus on repetitive flows where AI and integrations can move a concrete metric.',
      areas: [
        {
          title: 'Automation of repetitive tasks',
          description: 'Less manual work in processes that eat time every day.',
        },
        {
          title: 'Tracking and control systems',
          description: 'More visibility to catch drift before it becomes cost.',
        },
        {
          title: 'Internal processes and operational coordination',
          description: 'Less friction between teams, tools, and owners.',
        },
        {
          title: 'Data-driven decision tools',
          description: 'Clear signals for better decisions, not intuition alone.',
        },
      ],
    },
    work: {
      eyebrow: 'How we work',
      title: 'We research, validate, and build in that order.',
      principles: [
        {
          step: '01',
          title: 'We measure',
          description: 'We map the flow and define where time, money, or control gets lost.',
        },
        {
          step: '02',
          title: 'We test',
          description: 'We validate willingness to pay before thinking about product.',
        },
        {
          step: '03',
          title: 'We build',
          description: 'We turn the winning flow into a simple, useful tool.',
        },
      ],
    },
    contact: {
      eyebrow: 'Let’s talk',
      title: 'If you can describe the process and the metric, we want to hear from you.',
      trust: 'We’ll get back to you in 24-48h.',
      name: 'Name',
      company: 'Company',
      email: 'Email',
      message: 'Which task takes the most time today?',
      submit: 'Send my case',
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
