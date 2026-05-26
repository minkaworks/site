import type { Metadata } from 'next'

const copy = {
  title: 'Terms and Conditions',
  intro: 'These terms describe the basic rules for using this site and sending inquiries to Minka Works.',
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
} as const

export const metadata: Metadata = {
  title: `${copy.title} | Minka Works`,
  description: copy.intro,
  alternates: {
    canonical: '/terms',
  },
}

export default function TermsPage() {
  return (
    <main>
      <section className="legalPage">
        <article className="legalCard">
          <span className="eyebrow">minka works</span>
          <h1>{copy.title}</h1>
          <p className="sectionLead">{copy.intro}</p>
          <div className="legalStack">
            {copy.sections.map((section) => (
              <div className="legalBlock" key={section.title}>
                <h2>{section.title}</h2>
                <p>{section.body}</p>
              </div>
            ))}
          </div>
          <a className="button secondary" href="/">
            back to home
          </a>
        </article>
      </section>
    </main>
  )
}
