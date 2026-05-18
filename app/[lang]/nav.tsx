'use client'

import { useEffect, useRef, useState } from 'react'
import type { Locale } from './content'

export function Nav({ lang }: { lang: Locale }) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isLanguageOpen, setIsLanguageOpen] = useState(false)
  const languageRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function handleScroll() {
      setIsScrolled(window.scrollY > 24)
    }

    function handleDocumentClick(event: MouseEvent) {
      if (languageRef.current && !languageRef.current.contains(event.target as Node)) {
        setIsLanguageOpen(false)
      }
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        setIsLanguageOpen(false)
      }
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    document.addEventListener('click', handleDocumentClick)
    document.addEventListener('keydown', handleKeyDown)

    return () => {
      window.removeEventListener('scroll', handleScroll)
      document.removeEventListener('click', handleDocumentClick)
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [])

  return (
    <header className={isScrolled ? 'navShell isScrolled' : 'navShell'}>
      <nav className="nav" aria-label="Main navigation">
        <a className="brand" href={`/${lang}#top`} aria-label="minka home">
          <span className="brandText">minka</span>
        </a>
        <div className="languageSelect" ref={languageRef}>
          <button
            className="localeSwitch"
            type="button"
            aria-label="Select language"
            aria-expanded={isLanguageOpen}
            aria-haspopup="menu"
            aria-controls="language-menu"
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
            <div className="languageMenu" id="language-menu" role="menu">
              <a
                href="/es"
                hrefLang="es"
                role="menuitem"
                aria-current={lang === 'es' ? 'page' : undefined}
                onClick={() => setIsLanguageOpen(false)}
              >
                Español
              </a>
              <a
                href="/en"
                hrefLang="en"
                role="menuitem"
                aria-current={lang === 'en' ? 'page' : undefined}
                onClick={() => setIsLanguageOpen(false)}
              >
                English
              </a>
            </div>
          ) : null}
        </div>
      </nav>
    </header>
  )
}
