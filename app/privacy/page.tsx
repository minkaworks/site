import type { Metadata } from 'next'

const copy = {
  title: 'Data Privacy Policy',
  intro: 'This page explains how we handle the information you share when you use the contact form and how we protect it.',
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
} as const

export const metadata: Metadata = {
  title: `${copy.title} | Minka Works`,
  description: copy.intro,
  alternates: {
    canonical: '/privacy',
  },
}

export default function PrivacyPage() {
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
