import { ChevronDown, ExternalLink, Lock } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Card } from '@/components/ui/card'
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible'
import { cleanUrl } from '@/lib/utils'
import type { Project } from '@/types/content'

export function ProjectCard({ project }: { project: Project }) {
  return (
    <Collapsible asChild>
      <Card className="gap-0 py-0 transition-colors hover:border-primary/40 hover:bg-primary/5">
        {/* Links sit outside the trigger: an anchor inside its <button> is invalid markup. */}
        <div className="flex flex-col gap-3 p-5">
          <CollapsibleTrigger className="group/trigger flex w-full cursor-pointer flex-col gap-3 text-left">
            <div className="flex flex-wrap items-center gap-2">
              {project.confidential && (
                <Badge variant="outline" className="gap-1">
                  <Lock /> NDA
                </Badge>
              )}
              {(project.company || project.period) && (
                <span className="font-mono text-xs text-muted-foreground">
                  {[project.company, project.period].filter(Boolean).join(' · ')}
                </span>
              )}
              <ChevronDown className="ml-auto size-4 shrink-0 text-muted-foreground transition-transform group-data-[state=open]/trigger:rotate-180" />
            </div>
            <h3 className="font-heading text-lg font-medium">{project.title}</h3>
          </CollapsibleTrigger>

          {project.links && project.links.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {project.links.map((url) => (
                <a
                  key={url}
                  href={url}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex min-h-6 items-center gap-1 rounded-full border border-border px-2 py-0.5 font-mono text-xs text-muted-foreground transition-colors hover:border-primary/40 hover:text-primary"
                >
                  <ExternalLink className="size-3" />
                  {cleanUrl(url)}
                </a>
              ))}
            </div>
          )}
        </div>

        <CollapsibleContent className="overflow-hidden data-[state=closed]:animate-collapsible-up data-[state=open]:animate-collapsible-down">
          <div className="space-y-4 border-t border-border px-5 pt-4 pb-5">
            <p className="text-sm text-muted-foreground">{project.description}</p>

            {project.highlights && project.highlights.length > 0 && (
              <ul className="list-disc space-y-1.5 pl-4 text-sm text-muted-foreground marker:text-primary">
                {project.highlights.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            )}

            {project.images && project.images.length > 0 && (
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                {project.images.map((image) => (
                  <img
                    key={image.src}
                    src={image.src}
                    alt={image.alt}
                    loading="lazy"
                    className="rounded-md border border-border object-cover"
                  />
                ))}
              </div>
            )}

            <div className="flex flex-wrap gap-1.5 border-t border-border pt-4">
              {project.tags.map((tag) => (
                <Badge key={tag} variant="outline" className="font-mono">
                  {tag}
                </Badge>
              ))}
            </div>
          </div>
        </CollapsibleContent>
      </Card>
    </Collapsible>
  )
}
