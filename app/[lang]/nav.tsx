'use client'

import { useEffect, useState } from 'react'
import type { Locale } from './content'

export function Nav({ lang }: { lang: Locale }) {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    function handleScroll() {
      setIsScrolled(window.scrollY > 24)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <header className={isScrolled ? 'navShell isScrolled' : 'navShell'}>
      <nav className="nav" aria-label="Main navigation">
        <a className="brand" href={`/${lang}#top`} aria-label="minka home">
          <span className="brandText">minka</span>
        </a>
      </nav>
    </header>
  )
}
