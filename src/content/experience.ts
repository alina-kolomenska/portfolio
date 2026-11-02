import type { ExperienceEntry } from '@/types/content'

export const experience: ExperienceEntry[] = [
  {
    role: 'Full-Stack Engineer',
    company: 'Incode Group',
    period: 'Dec 2025 – Oct 2026',
    location: 'Kharkiv, Ukraine (Remote)',
    description:
      'Owned features end to end within client product teams, from React and Next.js interfaces to NestJS services, databases, and deployment.',
    highlights: [
      'On Injuro (AI legaltech): built Next.js 15 marketing site pages, implemented Clerk authentication and role-based access, and built NestJS endpoints and services on PostgreSQL with Prisma.',
      'On Quadrant Health: owned full-stack features end to end, including LLM translation of dynamic content in 13 languages with admin-selectable Anthropic or OpenAI models, and a live doctor-patient speech translator on Soniox with 60 languages.',
      'Designed and shipped REST APIs in Node.js, Express, and NestJS, and modeled data in PostgreSQL with Prisma and in MySQL with Flyway migrations.',
      'Integrated AI voice and avatar agents (Vapi, ElevenLabs, HeyGen, Tavus) into production assistant and automation features, alongside Twilio telehealth calling.',
      'Ran parallel Claude Code sessions in separate git worktrees, with custom skills, subagents, and MCP servers, reviewing every risky change and testing the results before merge.',
      'Deployed and maintained apps through CI/CD pipelines, using Docker for local backend environments.',
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
      'Founding frontend engineer on Quadrant Health: built the React web app from scratch as it grew into a platform handling 2M+ patient interactions a year (company-reported).',
      'Delivered 11 brand websites for Treasury Wine Estates in 6 months with the agency Hide & Seek, built on one shared, re-brandable frontend.',
      'Developed dashboards, admin panels, scheduling, and live chat features with React and TypeScript, styled with Material UI, Tailwind CSS, shadcn/ui, and Sass.',
      'Built animated interfaces and micro-interactions with Framer Motion, GSAP, and Lottie, keeping performance smooth across devices.',
      'Created and maintained shared Storybook component libraries used across projects.',
      'Integrated headless CMS platforms, added analytics tracking, and optimized Core Web Vitals on brand and marketing websites.',
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
      'Built most of the React and TypeScript frontend, plus REST endpoints in the Java Spring backend with MongoDB and OAuth-based authentication.',
      'Built responsive map and search interfaces with the Google Maps API for desktop and mobile.',
      'Created a shared component library used across company products.',
      'Wrote React Testing Library and JUnit tests, refactored legacy code, and fixed bugs.',
    ],
  },
]
