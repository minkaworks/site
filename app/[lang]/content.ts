export const locales = ['es', 'en'] as const

export type Locale = (typeof locales)[number]

export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale)
}

export const dictionary = {
  es: {
    nav: {
      research: 'Qué hacemos',
      method: 'Cómo ayudamos',
      contact: 'Contacto',
      switchLabel: 'EN',
      switchHref: '/en',
    },
    hero: {
      eyebrow: 'Minka Works',
      title: 'Ayudamos a negocios a ordenar el trabajo que hoy se hace a mano.',
      text: 'Si tu equipo usa WhatsApp, Excel o cuadernos para vender, cobrar, coordinar o hacer seguimiento, queremos entender cómo trabajan y encontrar una forma simple de ayudarlos.',
      primary: 'Cuéntanos tu caso',
      thesis: 'Empezamos simple',
      steps: ['Escuchamos', 'Ordenamos', 'Mejoramos'],
    },
    research: {
      eyebrow: 'Qué hacemos',
      title: 'Buscamos tareas repetitivas que hacen perder tiempo, ventas o dinero.',
      areas: [
        'Ventas y respuestas por WhatsApp',
        'Seguimiento de clientes y oportunidades',
        'Organización de pagos, documentos y pendientes',
        'Compras, inventario y coordinación diaria',
      ],
    },
    method: {
      eyebrow: 'Cómo ayudamos',
      title: 'Primero escuchamos. Luego probamos algo pequeño.',
      principles: [
        {
          title: 'Conversamos',
          description: 'Nos cuentas cómo trabajas hoy, qué se repite mucho y qué te quita tiempo.',
        },
        {
          title: 'Probamos',
          description: 'Armamos una solución simple antes de pedirte cambiar toda tu forma de trabajar.',
        },
        {
          title: 'Mejoramos',
          description: 'Si funciona, lo convertimos en una herramienta clara, fácil de usar y medible.',
        },
      ],
    },
    contact: {
      eyebrow: 'Conversemos',
      title: 'Cuéntanos qué parte de tu negocio te gustaría ordenar o hacer más fácil.',
      name: 'Nombre',
      company: 'Empresa',
      email: 'Correo',
      message: '¿Qué tarea te quita más tiempo hoy?',
      submit: 'Enviar mensaje',
      success: 'Mensaje recibido. Te responderemos pronto.',
      error: 'No se pudo enviar. Inténtalo nuevamente.',
    },
  },
  en: {
    nav: {
      research: 'What we do',
      method: 'How we help',
      contact: 'Contact',
      switchLabel: 'ES',
      switchHref: '/es',
    },
    hero: {
      eyebrow: 'Minka Works',
      title: 'We help businesses organize work that is still done manually.',
      text: 'If your team uses WhatsApp, spreadsheets, or notebooks to sell, collect payments, coordinate tasks, or follow up with customers, we want to understand how you work and find a simple way to help.',
      primary: 'Tell us about your case',
      thesis: 'We start simple',
      steps: ['Listen', 'Organize', 'Improve'],
    },
    research: {
      eyebrow: 'What we do',
      title: 'We look for repetitive tasks that cost time, sales, or money.',
      areas: [
        'Sales and replies on WhatsApp',
        'Customer and opportunity follow-up',
        'Payments, documents, and pending tasks',
        'Purchasing, inventory, and daily coordination',
      ],
    },
    method: {
      eyebrow: 'How we help',
      title: 'First we listen. Then we test something small.',
      principles: [
        {
          title: 'We talk',
          description: 'You tell us how you work today, what repeats often, and what takes too much time.',
        },
        {
          title: 'We test',
          description: 'We try a simple solution before asking you to change the way your team works.',
        },
        {
          title: 'We improve',
          description: 'If it works, we turn it into a clear, easy-to-use, measurable tool.',
        },
      ],
    },
    contact: {
      eyebrow: 'Let’s talk',
      title: 'Tell us which part of your business you would like to organize or make easier.',
      name: 'Name',
      company: 'Company',
      email: 'Email',
      message: 'Which task takes the most time today?',
      submit: 'Send message',
      success: 'Message received. We will get back to you soon.',
      error: 'Could not send the message. Please try again.',
    },
  },
} satisfies Record<Locale, Record<string, unknown>>
