import type { Profile } from '@/types/content'

export const profile: Profile = {
  name: 'Alina Kolomenska',
  initials: 'AK',
  role: 'Full-Stack Engineer',
  tagline:
    'Full-stack engineer with a strong frontend focus and 5+ years building SaaS products and brand websites for healthcare, legaltech, and consumer goods clients.',
  location: 'Ukraine',
  availability: 'Available for work',
  email: 'alina.kolomenska@gmail.com',
  github: 'https://github.com/alina-kolomenska',
  linkedin: 'https://www.linkedin.com/in/alina-kolomenska/',
  sourceUrl: 'https://github.com/alina-kolomenska/portfolio',
  resumeUrl: '/Alina_Kolomenska_CV.pdf',
  photo: '/photo.webp',
  primaryStack: ['React', 'Next.js', 'Node.js', 'NestJS'],
  stats: [
    { label: 'Years of experience', value: '5+' },
    { label: 'Availability', value: 'Remote' },
    { label: 'Products', value: 'SaaS & AI' },
    { label: 'Upper-intermediate English', value: 'B2' },
  ],
  languages: [
    { name: 'Ukrainian', level: 'Native' },
    { name: 'English', level: 'Professional working' },
    { name: 'Hebrew', level: 'Limited working' },
  ],
}
