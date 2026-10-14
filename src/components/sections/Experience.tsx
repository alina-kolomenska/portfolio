import { experience } from '@/content/experience'
import { Section } from '@/components/ui/section'
import { SectionHeading } from '@/components/ui/section-heading'
import { TimelineEntry } from '@/components/ui/timeline-entry'

export function Experience() {
  return (
    <Section id="experience">
      <SectionHeading eyebrow="Experience" title="Where I've worked" />
      <div>
        {experience.map((entry) => (
          <TimelineEntry
            key={`${entry.company}-${entry.period}`}
            title={entry.role}
            subtitle={entry.company}
            period={entry.period}
            location={entry.location}
            description={entry.description}
            highlights={entry.highlights}
          />
        ))}
      </div>
    </Section>
  )
}
