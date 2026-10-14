import { SiteLayout } from '@/components/layout/SiteLayout'
import { About } from '@/components/sections/About'
import { Skills } from '@/components/sections/Skills'
import { Projects } from '@/components/sections/Projects'
import { Experience } from '@/components/sections/Experience'
import { Education } from '@/components/sections/Education'
import { Contact } from '@/components/sections/Contact'

const navItems = [
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'education', label: 'Education' },
  { id: 'contact', label: 'Contact' },
]

function App() {
  return (
    <SiteLayout navItems={navItems}>
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Education />
      <Contact />
    </SiteLayout>
  )
}

export default App
