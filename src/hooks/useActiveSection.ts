import { useEffect, useState } from 'react'

// A section becomes current once its top edge crosses this fraction of the viewport.
const ACTIVE_LINE = 0.3

export function useActiveSection(sectionIds: string[]) {
  const [activeId, setActiveId] = useState(sectionIds[0] ?? '')
  const key = sectionIds.join(',')

  useEffect(() => {
    const sections = key
      .split(',')
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null)

    if (sections.length === 0) return

    let frame = 0

    const update = () => {
      frame = 0

      // The last section can be too short to reach the line, so page-bottom selects it.
      const doc = document.documentElement
      if (window.scrollY + window.innerHeight >= doc.scrollHeight - 2) {
        setActiveId(sections[sections.length - 1].id)
        return
      }

      const line = window.innerHeight * ACTIVE_LINE
      let current = sections[0].id
      for (const section of sections) {
        if (section.getBoundingClientRect().top <= line) current = section.id
      }
      setActiveId(current)
    }

    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(update)
    }

    schedule()
    window.addEventListener('scroll', schedule, { passive: true })
    window.addEventListener('resize', schedule)
    return () => {
      if (frame) cancelAnimationFrame(frame)
      window.removeEventListener('scroll', schedule)
      window.removeEventListener('resize', schedule)
    }
  }, [key])

  return activeId
}
