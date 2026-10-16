import type { ReactNode } from 'react'

interface SectionProps {
  id: string
  children: ReactNode
}

export function Section({ id, children }: SectionProps) {
  return (
    <section id={id} className="scroll-mt-16 border-border px-4 py-16 not-last:border-b sm:px-8 lg:px-12">
      <div className="mx-auto max-w-6xl space-y-8">{children}</div>
    </section>
  )
}
