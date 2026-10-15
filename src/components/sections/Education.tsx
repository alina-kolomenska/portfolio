import { education } from '@/content/education'
import { Section } from '@/components/ui/section'
import { SectionHeading } from '@/components/ui/section-heading'
import { DocumentPreview } from '@/components/ui/document-preview'

export function Education() {
  return (
    <Section id="education">
      <SectionHeading eyebrow="Education" title="Where I studied" />
      <div className="space-y-4">
        {education.map((entry) => (
          <div
            key={`${entry.institution}-${entry.degree}`}
            className="rounded-xl border border-border p-5 transition-colors hover:border-primary/40 hover:bg-primary/5"
          >
            <p className="font-medium">{entry.degree}</p>
            <p className="mt-1 text-sm text-muted-foreground">{entry.institution}</p>
            {entry.period && <p className="mt-3 font-mono text-xs text-muted-foreground">{entry.period}</p>}
            {entry.document && <DocumentPreview document={entry.document} issuer={entry.institution} />}
          </div>
        ))}
      </div>
    </Section>
  )
}
