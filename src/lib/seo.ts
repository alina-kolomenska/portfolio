import { about } from '@/content/about'
import { education } from '@/content/education'
import { experience } from '@/content/experience'
import { profile } from '@/content/profile'
import { projects } from '@/content/projects'
import { skills } from '@/content/skills'
import { cleanUrl, isCurrentPeriod } from '@/lib/utils'

const absolute = (path: string) => new URL(path, profile.siteUrl).href
const escapeXml = (value: string) => value.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')

const meta = (...parts: (string | undefined)[]) => {
  const line = parts.filter(Boolean).join(' · ')
  return line ? ['', line] : []
}

// Inlined in a <script> tag, so "</" must not appear literally.
export const jsonForScript = (value: unknown) => JSON.stringify(value).replace(/</g, '\\u003c')

export function structuredData() {
  const currentJob = experience.find((job) => isCurrentPeriod(job.period))
  const data = {
    '@context': 'https://schema.org',
    '@type': 'ProfilePage',
    url: profile.siteUrl,
    mainEntity: {
      '@type': 'Person',
      '@id': `${profile.siteUrl}#person`,
      name: profile.name,
      jobTitle: profile.role,
      description: profile.tagline,
      url: profile.siteUrl,
      image: profile.photo ? absolute(profile.photo) : undefined,
      email: `mailto:${profile.email}`,
      address: { '@type': 'PostalAddress', addressCountry: profile.countryCode ?? profile.location },
      worksFor: currentJob ? { '@type': 'Organization', name: currentJob.company } : undefined,
      alumniOf: education.map((entry) => ({ '@type': 'EducationalOrganization', name: entry.institution })),
      knowsAbout: skills.flatMap((group) => group.items),
      knowsLanguage: profile.languages?.map((language) => language.name),
      sameAs: [profile.github, profile.linkedin],
    },
  }
  return jsonForScript(data)
}

export function llmsTxt() {
  const lines = [
    `# ${profile.name}`,
    '',
    `> ${profile.tagline}`,
    '',
    `- Role: ${profile.role}`,
    `- Location: ${profile.location}`,
    `- Availability: ${profile.availability}, remote`,
    `- Email: [${profile.email}](mailto:${profile.email})`,
    `- [Portfolio](${profile.siteUrl})`,
    ...(profile.resumeUrl ? [`- [CV (PDF)](${absolute(profile.resumeUrl)})`] : []),
    `- [LinkedIn](${profile.linkedin})`,
    `- [GitHub](${profile.github})`,
    '',
    `## ${about.highlightsTitle.replace(/:$/, '')}`,
    '',
    ...about.highlights.map((highlight) => `- ${highlight.label}: ${highlight.text}`),
    '',
    ...about.closing.flatMap((paragraph) => [paragraph, '']),
    '## Experience',
    ...experience.flatMap((job) => [
      '',
      `### ${job.role} · ${job.company}`,
      ...meta(job.period, job.location),
      ...(job.description ? ['', job.description] : []),
      '',
      ...(job.highlights ?? []).map((point) => `- ${point}`),
    ]),
    '',
    '## Projects',
    ...projects.flatMap((project) => [
      '',
      `### ${project.title}`,
      ...meta(project.company, project.period),
      '',
      ...project.description.flatMap((paragraph, index) => (index ? ['', paragraph] : [paragraph])),
      '',
      ...(project.highlights ?? []).map((point) => `- ${point}`),
      '',
      `Technologies: ${project.tags.join(', ')}`,
      ...(project.links?.length
        ? [`Links: ${project.links.map((url) => `[${cleanUrl(url)}](${url})`).join(', ')}`]
        : []),
    ]),
    '',
    '## Skills',
    '',
    ...skills.map((group) => `- ${group.category}: ${group.items.join(', ')}`),
    '',
    '## Education',
    '',
    ...education.map(
      (entry) =>
        `- ${entry.degree}, ${entry.institution}${entry.location ? `, ${entry.location}` : ''} (${entry.period})`,
    ),
    ...(profile.languages?.length
      ? ['', '## Languages', '', ...profile.languages.map((language) => `- ${language.name}: ${language.level}`)]
      : []),
  ]
  return `${lines.join('\n')}\n`
}

export function robotsTxt() {
  return `User-agent: *\nAllow: /\n\nSitemap: ${absolute('sitemap.xml')}\n`
}

export function sitemapXml() {
  const urls = [profile.siteUrl, ...(profile.resumeUrl ? [absolute(profile.resumeUrl)] : [])]
  return [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
    ...urls.map((url) => `  <url>\n    <loc>${escapeXml(url)}</loc>\n  </url>`),
    '</urlset>',
    '',
  ].join('\n')
}
