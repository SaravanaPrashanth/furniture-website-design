'use client'

import { useEffect, useState } from 'react'

/**
 * Returns the current window.scrollY value, updating on scroll.
 * Used by Navbar (transparency threshold) and BackToTop (visibility threshold).
 */
export function useScrollY(): number {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)

    // Set initial value
    setScrollY(window.scrollY)

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return scrollY
}
