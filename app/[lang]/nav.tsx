'use client'

import { useEffect, useState } from 'react'
import type { dictionary, Locale } from './content'

type NavCopy = (typeof dictionary)['en']['nav']

export function Nav({ copy, lang }: { copy: NavCopy; lang: Locale }) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isLanguageOpen, setIsLanguageOpen] = useState(false)

  useEffect(() => {
    function handleScroll() {
      setIsScrolled(window.scrollY > 24)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={isScrolled ? 'navShell isScrolled' : 'navShell'}>
      <nav className="nav" aria-label="Main navigation">
        <a className="brand" href={`/${lang}#top`} aria-label="Minka Works home">
          <span className="brandText">MINKA WORKS</span>
        </a>
        <div className="navLinks">
          <a href={`/${lang}#research`}>{copy.research}</a>
          <a href={`/${lang}#method`}>{copy.method}</a>
          <a href={`/${lang}#contact`}>{copy.contact}</a>
          <div className="languageSelect">
            <button
              className="localeSwitch"
              type="button"
              aria-label="Select language"
              aria-expanded={isLanguageOpen}
              onClick={() => setIsLanguageOpen((value) => !value)}
            >
              <svg aria-hidden="true" viewBox="0 0 24 24">
                <path d="M3 12h18" />
                <path d="M12 3a14.5 14.5 0 0 1 0 18" />
                <path d="M12 3a14.5 14.5 0 0 0 0 18" />
                <path d="M4.5 7.5h15" />
                <path d="M4.5 16.5h15" />
                <circle cx="12" cy="12" r="9" />
              </svg>
              <span>{lang.toUpperCase()}</span>
            </button>
            {isLanguageOpen ? (
              <div className="languageMenu">
                <a href="/es" hrefLang="es" aria-current={lang === 'es' ? 'page' : undefined}>
                  Español
                </a>
                <a href="/en" hrefLang="en" aria-current={lang === 'en' ? 'page' : undefined}>
                  English
                </a>
              </div>
            ) : null}
          </div>
        </div>
      </nav>
    </header>
  )
}
