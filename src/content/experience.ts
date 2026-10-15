import type { ExperienceEntry } from '@/types/content'

export const experience: ExperienceEntry[] = [
  {
    role: 'Full Stack Engineer',
    company: 'Incode Group',
    period: 'Dec 2025 — Present',
    location: 'Kharkiv, Ukraine (Remote)',
    description:
      'Own features end-to-end, from React/Next.js interfaces to the Node.js services, databases and deployment behind them.',
    highlights: [
      'Design and ship backend services in Node.js, Express, and NestJS, using PostgreSQL with Prisma and MongoDB, and exposing REST APIs for React/Next.js clients.',
      'Build production frontends with React, Next.js and TypeScript, styled with Tailwind CSS and Shadcn UI.',
      'Implement authentication with Clerk, plus role-based access control, and build real-time telehealth features with Twilio.',
      'Integrate AI voice and avatar technologies (ElevenLabs, Vapi, HeyGen, Tavus) into production assistant and automation features.',
      'Deploy and maintain apps through CI/CD pipelines, using Docker for local backend environments.',
    ],
  },
  {
    role: 'Frontend Developer',
    company: 'Incode Group',
    period: 'Jul 2022 — Dec 2025',
    location: 'Kharkiv, Ukraine (Remote)',
    description: 'Built production web applications for healthcare, legaltech, e-commerce, and enterprise brand clients.',
    highlights: [
      'Developed dashboards, admin panels, marketing sites, scheduling, and live chat features with React and TypeScript, styled with Material UI, Tailwind CSS, Shadcn UI, and Sass.',
      'Built animated interfaces and micro-interactions with Framer Motion, GSAP, and Lottie, from scroll-driven hero transitions to voice-assistant states, keeping performance smooth across devices.',
      'Created and maintained shared Storybook component libraries used across projects.',
      'Integrated headless CMS and e-commerce platforms, and optimized Core Web Vitals on marketing sites.',
      'Worked with designers and backend engineers to deliver features from design handoff to release.',
    ],
  },
  {
    role: 'Full Stack Developer',
    company: 'Inetex LTD',
    period: 'Mar 2021 — Jul 2022',
    location: 'Rehovot, Center District, Israel (Hybrid)',
    description:
      'Contributed to a map-based real estate marketplace connecting renters with landlords and homebuyers with sellers.',
    highlights: [
      'Built a responsive React web application with reusable layout templates, optimized for mobile and desktop in portrait and landscape orientations.',
      'Built interactive map views with property markers using the Google Maps API.',
      'Developed multi-criteria apartment search with combinable filters for price, location, property type, and amenities.',
      'Implemented light and dark themes.',
      'Created a shared component library used across company products.',
      'Wrote JUnit tests for the Java backend, refactored legacy code, and fixed bugs.',
    ],
  },
]
