import { skills } from '@/content/skills'
import { Badge } from '@/components/ui/badge'
import { Section } from '@/components/ui/section'
import { SectionHeading } from '@/components/ui/section-heading'

export function Skills() {
  return (
    <Section id="skills">
      <SectionHeading eyebrow="Skills" title="What I work with" />
      <div className="grid gap-6 sm:grid-cols-2">
        {skills.map((group) => (
          <div key={group.category}>
            <h3 className="mb-3 text-sm font-medium text-muted-foreground">{group.category}</h3>
            <div className="flex flex-wrap gap-2">
              {group.items.map((item) => (
                <Badge key={item} variant="outline" className="font-mono">
                  {item}
                </Badge>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  )
}
