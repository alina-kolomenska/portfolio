export interface Stat {
  label: string
  value: string
}

export interface IntroVideo {
  src: string
  poster?: string
  /** WebVTT captions track. Required for spoken content to meet WCAG 1.2.2. */
  captions?: string
}

export interface AboutHighlight {
  label: string
  text: string
}

export interface About {
  intro: string[]
  highlightsTitle: string
  highlights: AboutHighlight[]
  closing: string[]
}

export interface Profile {
  name: string
  initials: string
  role: string
  tagline: string
  location: string
  availability: string
  email: string
  github: string
  linkedin: string
  photo?: string
  introVideo?: IntroVideo
  resumeUrl?: string
  primaryStack?: string[]
  stats?: Stat[]
}

export interface ExperienceEntry {
  role: string
  company: string
  period: string
  location?: string
  description?: string
  highlights?: string[]
}

export interface EducationEntry {
  degree: string
  institution: string
  period: string
}

export interface SkillGroup {
  category: string
  items: string[]
}

/** `alt` is required: a screenshot with an empty alt is invisible to screen readers. */
export interface ProjectImage {
  src: string
  alt: string
}

export interface Project {
  title: string
  role: string
  period?: string
  confidential?: boolean
  description: string
  highlights?: string[]
  tags: string[]
  images?: ProjectImage[]
  links?: string[]
}
