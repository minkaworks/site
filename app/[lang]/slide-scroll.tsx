'use client'

import { useEffect, useRef } from 'react'

export function SlideScroll() {
  const isAnimating = useRef(false)

  useEffect(() => {
    function handleWheel(event: WheelEvent) {
      if (window.innerWidth <= 900 || event.ctrlKey || Math.abs(event.deltaY) < 12) {
        return
      }

      const target = event.target as HTMLElement | null
      if (target?.closest('textarea, input, select')) {
        return
      }

      const slides = Array.from(document.querySelectorAll<HTMLElement>('[data-slide]'))
      if (slides.length === 0 || isAnimating.current) {
        event.preventDefault()
        return
      }

      const currentIndex = slides.reduce((closestIndex, slide, index) => {
        const currentDistance = Math.abs(slide.getBoundingClientRect().top)
        const closestDistance = Math.abs(slides[closestIndex].getBoundingClientRect().top)
        return currentDistance < closestDistance ? index : closestIndex
      }, 0)

      const direction = event.deltaY > 0 ? 1 : -1
      const nextIndex = Math.max(0, Math.min(slides.length - 1, currentIndex + direction))

      event.preventDefault()

      if (nextIndex === currentIndex) {
        return
      }

      isAnimating.current = true
      slides[nextIndex].scrollIntoView({ behavior: 'smooth', block: 'start' })

      window.setTimeout(() => {
        isAnimating.current = false
      }, 720)
    }

    window.addEventListener('wheel', handleWheel, { passive: false })

    return () => window.removeEventListener('wheel', handleWheel)
  }, [])

  return null
}
