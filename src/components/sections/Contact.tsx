import { ArrowUpRight, Mail } from 'lucide-react'
import { profile } from '@/content/profile'
import { GithubIcon, LinkedinIcon } from '@/components/ui/brand-icons'
import { cleanUrl } from '@/lib/utils'
import { Section } from '@/components/ui/section'
import { SectionHeading } from '@/components/ui/section-heading'

const contactLinks = [
  { label: 'Email', value: profile.email, href: `mailto:${profile.email}`, icon: Mail },
  { label: 'GitHub', value: cleanUrl(profile.github), href: profile.github, icon: GithubIcon },
  { label: 'LinkedIn', value: cleanUrl(profile.linkedin), href: profile.linkedin, icon: LinkedinIcon },
]

export function Contact() {
  return (
    <Section id="contact">
      <SectionHeading eyebrow="Contact" title="Let’s talk" />
      <p className="text-muted-foreground">
        I’m available for remote frontend and full-stack work — feel free to reach out about a role, a project, or just
        to talk shop.
      </p>

      <div className="grid gap-4 lg:grid-cols-2">
        {contactLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            target={link.href.startsWith('http') ? '_blank' : undefined}
            rel={link.href.startsWith('http') ? 'noreferrer' : undefined}
            className="group flex min-w-0 items-center gap-3 rounded-xl border border-border p-4 transition-colors hover:border-primary/40 hover:bg-primary/5 sm:gap-4 sm:p-5"
          >
            <span className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary sm:size-11">
              <link.icon className="size-5" />
            </span>
            <div className="min-w-0 flex-1">
              <p className="font-mono text-xs text-muted-foreground">{link.label}</p>
              <p className="text-sm font-medium break-words xl:text-base">{link.value}</p>
            </div>
            <ArrowUpRight className="size-4 shrink-0 text-muted-foreground transition-colors group-hover:text-primary" />
          </a>
        ))}
      </div>

      {profile.languages && profile.languages.length > 0 && (
        <div>
          <h3 className="font-mono text-xs text-muted-foreground">Languages</h3>
          <ul className="mt-3 flex flex-wrap gap-x-8 gap-y-3">
            {profile.languages.map((language) => (
              <li key={language.name} className="text-sm">
                <span className="font-medium">{language.name}</span>
                <span className="text-muted-foreground"> · {language.level}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      <div className="flex flex-wrap gap-x-6 gap-y-1 border-t border-border pt-6 font-mono text-xs text-muted-foreground">
        <span>
          © {new Date().getFullYear()} {profile.name}
        </span>
        <span>Built with React, TypeScript, Vite, Tailwind CSS & shadcn/ui</span>
        {profile.sourceUrl && (
          <a
            href={profile.sourceUrl}
            target="_blank"
            rel="noreferrer"
            className="underline underline-offset-4 transition-colors hover:text-primary"
          >
            Source on GitHub
          </a>
        )}
      </div>
    </Section>
  )
}
