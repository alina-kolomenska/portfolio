import { about } from '@/content/about'
import { profile } from '@/content/profile'
import { Section } from '@/components/ui/section'
import { VideoIntro } from '@/components/ui/video-intro'

export function About() {
  return (
    <Section id="about">
      <div>
        <span className="mb-3 block font-mono text-xs tracking-widest text-primary">
          <span aria-hidden="true">// </span>about
        </span>
        <h1 className="font-heading text-3xl font-semibold md:text-4xl">{profile.role}</h1>
        {profile.primaryStack && profile.primaryStack.length > 0 && (
          <p className="mt-4 font-mono text-sm text-primary">{profile.primaryStack.join(' · ')}</p>
        )}
      </div>

      <div className="space-y-4 text-muted-foreground">
        {about.intro.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
        <div>
          <p>{about.highlightsTitle}</p>
          <ul className="mt-2 list-disc space-y-1.5 pl-4 marker:text-primary">
            {about.highlights.map((highlight) => (
              <li key={highlight.label}>
                <span className="font-medium text-foreground">{highlight.label}:</span> {highlight.text}
              </li>
            ))}
          </ul>
        </div>
        {about.closing.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>

      {profile.stats && profile.stats.length > 0 && (
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
          {profile.stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-lg border border-border p-4 text-center transition-colors hover:border-primary/40 hover:bg-primary/5"
            >
              <p className="font-heading text-xl font-semibold text-primary">{stat.value}</p>
              <p className="mt-1 text-xs text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>
      )}

      {profile.introVideo && <VideoIntro {...profile.introVideo} />}
    </Section>
  )
}
