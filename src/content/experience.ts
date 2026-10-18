import type { ExperienceEntry } from '@/types/content'

export const experience: ExperienceEntry[] = [
  {
    role: 'Full-Stack Engineer',
    company: 'Incode Group',
    period: 'Dec 2025 – Present',
    location: 'Kharkiv, Ukraine (Remote)',
    description:
      'Own features end to end within client product teams, from React and Next.js interfaces to NestJS services, databases, and deployment.',
    highlights: [
      'Design and ship backend services in Node.js, Express, and NestJS, exposing REST APIs for React and Next.js apps.',
      'Model data in PostgreSQL with Prisma and in MySQL with Flyway migrations.',
      'Build production frontends with React, Next.js, and TypeScript, styled with Tailwind CSS and shadcn/ui.',
      'Implement authentication and role-based access control with Clerk and JWT.',
      'Integrate AI voice and avatar agents (Vapi, ElevenLabs, HeyGen, Tavus) into production assistant and automation features, alongside Twilio telehealth calling.',
      'Run parallel Claude Code sessions in separate git worktrees to develop several features at once, reviewing and testing every change before merge.',
      'Deploy and maintain apps through CI/CD pipelines, using Docker for local backend environments.',
    ],
  },
  {
    role: 'Frontend Developer',
    company: 'Incode Group',
    period: 'Jul 2022 – Dec 2025',
    location: 'Kharkiv, Ukraine (Remote)',
    description:
      'Built production web applications and brand websites for healthcare, consumer goods, and enterprise clients, working within their product teams.',
    highlights: [
      'Developed dashboards, admin panels, scheduling, and live chat features with React and TypeScript, styled with Material UI, Tailwind CSS, shadcn/ui, and Sass.',
      'Built animated interfaces and micro-interactions with Framer Motion, GSAP, and Lottie, keeping performance smooth across devices.',
      'Created and maintained shared Storybook component libraries used across projects.',
      'Integrated headless CMS platforms, added analytics tracking, and optimized Core Web Vitals on brand and marketing websites.',
      'Collaborated with designers and backend engineers to deliver features from design handoff to release.',
    ],
  },
  {
    role: 'Full-Stack Developer',
    company: 'Inetex LTD',
    period: 'Mar 2021 – Jul 2022',
    location: 'Rehovot, Israel (Hybrid)',
    description:
      'Worked on a client’s real estate marketplace for rentals and home sales, focusing on the React frontend and test coverage.',
    highlights: [
      'Developed React and TypeScript frontend features, and built REST endpoints in the Java Spring backend with MongoDB.',
      'Built responsive map and search interfaces with the Google Maps API for desktop and mobile.',
      'Created a shared component library used across company products.',
      'Wrote React Testing Library and JUnit tests, refactored legacy code, and fixed bugs.',
    ],
  },
]
