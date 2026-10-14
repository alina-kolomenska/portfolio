import { projects } from '@/content/projects'
import { ProjectCard } from '@/components/ui/project-card'
import { Section } from '@/components/ui/section'
import { SectionHeading } from '@/components/ui/section-heading'

export function Projects() {
  return (
    <Section id="projects">
      <SectionHeading eyebrow="Projects" title="Things I've built" />
      <div className="space-y-4">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </Section>
  )
}
