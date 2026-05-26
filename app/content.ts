export const copy = {
  hero: {
    title: 'Open-source lab.',
    text: 'MINKA publishes software, tools, and cookbooks in public.',
    note: 'Current work lives in public repos and drafts.',
  },
  lab: {
    cards: [
      {
        title: 'software',
        description: 'Open-source software released from the lab.',
      },
      {
        title: 'tools',
        description: 'Tools and utilities published for real technical work.',
      },
      {
        title: 'cookbooks',
        description: 'Cookbooks and references built from ongoing work.',
      },
    ],
  },
  releases: {
    title: 'New releases are in progress.',
    text: 'Public when ready.',
  },
  contact: {
    title: 'Send a repo, release, or note.',
    trust: 'Short reply in 24-48h.',
    name: 'name',
    company: 'project / company',
    email: 'email',
    message: 'what are you sending?',
    submit: 'send',
    success: 'Message received. We will get back to you soon with the next step.',
    error: 'Could not send the message. Please try again.',
  },
  footer: {
    company: 'Minka Works 2026',
    privacy: 'data privacy policy',
    terms: 'terms and conditions',
  },
} as const

export type ContactCopy = typeof copy.contact
