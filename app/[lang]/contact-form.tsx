'use client'

import { useState, type FormEvent } from 'react'
import type { dictionary } from './content'

type ContactCopy = (typeof dictionary)['en']['contact']

type Status = 'idle' | 'submitting' | 'success' | 'error'

export function ContactForm({ copy }: { copy: ContactCopy }) {
  const [status, setStatus] = useState<Status>('idle')

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setStatus('submitting')

    const form = event.currentTarget
    const formData = new FormData(form)

    const response = await fetch('/api/contact', {
      method: 'POST',
      body: formData,
    })

    if (!response.ok) {
      setStatus('error')
      return
    }

    form.reset()
    setStatus('success')
  }

  return (
    <form className="contactForm" onSubmit={handleSubmit}>
      <label>
        <span>{copy.name}</span>
        <input name="name" required autoComplete="name" />
      </label>
      <label>
        <span>{copy.company}</span>
        <input name="company" autoComplete="organization" />
      </label>
      <label>
        <span>{copy.email}</span>
        <input name="email" type="email" required autoComplete="email" />
      </label>
      <label>
        <span>{copy.message}</span>
        <textarea name="message" required rows={5} />
      </label>
      <button className="button primary" type="submit" disabled={status === 'submitting'}>
        {status === 'submitting' ? '...' : copy.submit}
      </button>
      {status === 'success' ? <p className="formStatus success">{copy.success}</p> : null}
      {status === 'error' ? <p className="formStatus error">{copy.error}</p> : null}
    </form>
  )
}
