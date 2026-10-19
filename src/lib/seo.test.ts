import { describe, expect, it } from 'vitest'
import { education } from '@/content/education'
import { experience } from '@/content/experience'
import { profile } from '@/content/profile'
import { projects } from '@/content/projects'
import { jsonForScript, llmsTxt, robotsTxt, sitemapXml, structuredData } from '@/lib/seo'
import { isCurrentPeriod } from '@/lib/utils'

describe('structuredData', () => {
  const data = JSON.parse(structuredData())
  const person = data.mainEntity

  it('describes a profile page about the person', () => {
    expect(data['@type']).toBe('ProfilePage')
    expect(person).toMatchObject({
      '@type': 'Person',
      name: profile.name,
      jobTitle: profile.role,
      url: profile.siteUrl,
    })
    expect(person.sameAs).toEqual([profile.github, profile.linkedin])
  })

  it('links the current employer, if any, and every school', () => {
    expect(person.worksFor?.name).toBe(experience.find((job) => isCurrentPeriod(job.period))?.company)
    expect(person.alumniOf.map((school: { name: string }) => school.name)).toEqual(
      education.map((entry) => entry.institution),
    )
  })
})

describe('jsonForScript', () => {
  it('cannot close the surrounding script tag, and still parses back', () => {
    const value = { note: '</script><script>alert(1)</script>' }
    const json = jsonForScript(value)

    expect(json).not.toContain('<')
    expect(JSON.parse(json)).toEqual(value)
  })
})

describe('llmsTxt', () => {
  const text = llmsTxt()

  it('starts with the name as the only H1, followed by a summary quote', () => {
    expect(text.startsWith(`# ${profile.name}\n\n> ${profile.tagline}\n`)).toBe(true)
    expect(text.match(/^# /gm)).toHaveLength(1)
  })

  it('includes every job, project, and school', () => {
    for (const job of experience) expect(text).toContain(`### ${job.role} · ${job.company}`)
    for (const project of projects) expect(text).toContain(`### ${project.title}`)
    for (const entry of education) expect(text).toContain(entry.institution)
  })

  it('uses Markdown links and never stacks blank lines', () => {
    expect(text).toContain(`[LinkedIn](${profile.linkedin})`)
    expect(text).not.toMatch(/\n{3,}/)
  })
})

describe('robotsTxt and sitemapXml', () => {
  it('points crawlers at the sitemap', () => {
    expect(robotsTxt()).toContain(`Sitemap: ${new URL('sitemap.xml', profile.siteUrl).href}`)
  })

  it('lists the site and the CV in a valid sitemap', () => {
    const xml = new DOMParser().parseFromString(sitemapXml(), 'application/xml')
    expect(xml.querySelector('parsererror')).toBeNull()
    const urls = [...xml.getElementsByTagName('loc')].map((node) => node.textContent)
    const cv = profile.resumeUrl ? [new URL(profile.resumeUrl, profile.siteUrl).href] : []
    expect(urls).toEqual([profile.siteUrl, ...cv])
  })
})
