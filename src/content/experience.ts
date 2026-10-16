import type { ExperienceEntry } from '@/types/content'

export const experience: ExperienceEntry[] = [
  {
    role: 'Full-Stack Engineer',
    company: 'Incode Group',
    period: 'Dec 2025 – Present',
    location: 'Kharkiv, Ukraine (Remote)',
    description:
      'Own features end-to-end, from React/Next.js interfaces to the Node.js services, databases, and deployment behind them.',
    highlights: [
      'Design and ship backend services in Node.js, Express, and NestJS, exposing REST APIs for React/Next.js clients.',
      'Model data in PostgreSQL with Prisma and in MySQL with Flyway migrations.',
      'Build production frontends with React, Next.js, and TypeScript, styled with Tailwind CSS and shadcn/ui.',
      'Implement authentication with Clerk and JWT, plus role-based access control, and build real-time telehealth features with Twilio.',
      'Integrate AI voice and avatar technologies (ElevenLabs, Vapi, HeyGen, Tavus) into production assistant and automation features.',
      'Deploy and maintain apps through CI/CD pipelines, using Docker for local backend environments.',
    ],
  },
  {
    role: 'Frontend Developer',
    company: 'Incode Group',
    period: 'Jul 2022 – Dec 2025',
    location: 'Kharkiv, Ukraine (Remote)',
    description: 'Built production web applications for healthcare, e-commerce, and enterprise brand clients.',
    highlights: [
      'Developed dashboards, admin panels, marketing sites, scheduling, and live chat features with React and TypeScript, styled with Material UI, Tailwind CSS, shadcn/ui, and Sass.',
      'Built animated interfaces and micro-interactions with Framer Motion, GSAP, and Lottie, keeping performance smooth across devices.',
      'Created and maintained shared Storybook component libraries used across projects.',
      'Integrated headless CMS and e-commerce platforms, added analytics tracking, and optimized Core Web Vitals on brand and marketing websites.',
      'Worked with designers and backend engineers to deliver features from design handoff to release.',
    ],
  },
  {
    role: 'Full-Stack Developer',
    company: 'Inetex LTD',
    period: 'Mar 2021 – Jul 2022',
    location: 'Rehovot, Israel (Hybrid)',
    description:
      'Worked on a real estate marketplace for rentals and home sales, focusing on the React frontend and test coverage.',
    highlights: [
      'Developed React and TypeScript frontend features and worked alongside the Java backend and MongoDB database.',
      'Built responsive map and search interfaces with the Google Maps API for desktop and mobile.',
      'Created a shared component library used across company products.',
      'Wrote React Testing Library and JUnit tests, refactored legacy code, and fixed bugs.',
    ],
  },
]
