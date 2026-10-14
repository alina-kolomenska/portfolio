import type { ReactNode } from 'react'
import { ChevronDown } from 'lucide-react'
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible'

interface TimelineEntryProps {
  title: string
  subtitle: string
  period: string
  location?: string
  description?: ReactNode
  highlights?: string[]
}

export function TimelineEntry({ title, subtitle, period, location, description, highlights }: TimelineEntryProps) {
  const isCurrent = /present/i.test(period)

  return (
    <div className="relative border-l border-border py-0.5 pb-7 pl-6 last:pb-0">
      <span
        className={`absolute top-1.5 -left-[4.5px] size-2 rounded-full ${isCurrent ? 'bg-primary' : 'bg-muted-foreground/40'}`}
      />
      <div className="mb-1 flex flex-wrap items-baseline gap-x-2 gap-y-1">
        <h3 className="text-base font-medium">{title}</h3>
        <span className="text-sm text-muted-foreground">{subtitle}</span>
        <span className="ml-auto font-mono text-xs text-muted-foreground">{period}</span>
      </div>
      {location && <p className="mb-2 text-xs text-muted-foreground">{location}</p>}
      {description && <p className="text-sm text-muted-foreground">{description}</p>}
      {highlights && highlights.length > 0 && (
        <Collapsible>
          <CollapsibleContent className="overflow-hidden data-[state=closed]:animate-collapsible-up data-[state=open]:animate-collapsible-down">
            <ul className="list-disc space-y-1.5 pt-2 pl-4 text-sm text-muted-foreground marker:text-primary">
              {highlights.map((point, index) => (
                <li key={index}>{point}</li>
              ))}
            </ul>
          </CollapsibleContent>
          <CollapsibleTrigger className="group/more mt-2 inline-flex cursor-pointer items-center gap-1 font-mono text-xs text-primary hover:underline">
            <span className="group-data-[state=open]/more:hidden">Show more</span>
            <span className="hidden group-data-[state=open]/more:inline">Show less</span>
            {/* Tells screen readers which role this button expands. */}
            <span className="sr-only">
              {' '}
              — {title}, {subtitle}
            </span>
            <ChevronDown className="size-3.5 transition-transform group-data-[state=open]/more:rotate-180" />
          </CollapsibleTrigger>
        </Collapsible>
      )}
    </div>
  )
}
