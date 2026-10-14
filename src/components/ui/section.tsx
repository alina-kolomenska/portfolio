import type { ReactNode } from 'react'

interface SectionProps {
  id: string
  children: ReactNode
}

export function Section({ id, children }: SectionProps) {
  return (
    <section
      id={id}
      className="scroll-mt-16 border-b border-border px-4 py-16 last:border-b-0 sm:px-6"
    >
      <div className="mx-auto max-w-5xl space-y-8">{children}</div>
    </section>
  )
}
