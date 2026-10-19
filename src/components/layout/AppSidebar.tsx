import { Download, Mail, MapPin } from 'lucide-react'
import { profile } from '@/content/profile'
import { GithubIcon, LinkedinIcon } from '@/components/ui/brand-icons'
import { useActiveSection } from '@/hooks/useActiveSection'
import { track } from '@/lib/analytics'
import { Button } from '@/components/ui/button'
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarSeparator,
} from '@/components/ui/sidebar'
import { ThemeToggle } from '@/components/ui/theme-toggle'

export interface NavItem {
  id: string
  label: string
}

interface AppSidebarProps {
  navItems: NavItem[]
}

export function AppSidebar({ navItems }: AppSidebarProps) {
  const activeId = useActiveSection(navItems.map((item) => item.id))

  return (
    <Sidebar aria-label={`${profile.name} — profile and navigation`}>
      <SidebarHeader className="gap-4 p-4">
        <div className="aspect-square w-full overflow-hidden rounded-xl border border-sidebar-border bg-gradient-to-br from-primary/20 to-primary/5">
          {profile.photo ? (
            <img src={profile.photo} alt={profile.name} className="size-full object-cover" />
          ) : (
            <div className="flex size-full items-center justify-center font-heading text-3xl font-semibold text-primary">
              {profile.initials}
            </div>
          )}
        </div>

        <div>
          <p className="font-heading text-base font-semibold">{profile.name}</p>
          <p className="text-sm text-primary">{profile.role}</p>
        </div>

        <div className="space-y-1.5 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            {/* Same width as the pin icon so both labels line up. */}
            <span className="flex size-3.5 shrink-0 items-center justify-center">
              <span className="size-2 rounded-full bg-emerald-500" />
            </span>
            {profile.availability}
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="size-3.5 shrink-0" />
            {profile.location}
          </div>
        </div>
      </SidebarHeader>

      <SidebarSeparator className="mx-0" />

      <SidebarContent>
        <SidebarGroup>
          <nav aria-label="Sections">
            <SidebarMenu className="gap-1.5">
              {navItems.map((item) => (
                <SidebarMenuItem key={item.id}>
                  <SidebarMenuButton asChild isActive={activeId === item.id} className="gap-1.5 font-mono">
                    <a href={`#${item.id}`}>
                      {/* Decorative: without this it is announced as "slash slash about". */}
                      <span aria-hidden="true">//</span>
                      <span>{item.label.toLowerCase()}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </nav>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="gap-3 p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1">
            <Button variant="ghost" size="icon-sm" asChild>
              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                onClick={() => track('contact_link_clicked', { channel: 'github', location: 'sidebar' })}
              >
                <GithubIcon />
              </a>
            </Button>
            <Button variant="ghost" size="icon-sm" asChild>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                onClick={() => track('contact_link_clicked', { channel: 'linkedin', location: 'sidebar' })}
              >
                <LinkedinIcon />
              </a>
            </Button>
            <Button variant="ghost" size="icon-sm" asChild>
              <a
                href={`mailto:${profile.email}`}
                aria-label="Email"
                onClick={() => track('contact_link_clicked', { channel: 'email', location: 'sidebar' })}
              >
                <Mail />
              </a>
            </Button>
          </div>
          <ThemeToggle />
        </div>

        {profile.resumeUrl && (
          <Button variant="outline" className="w-full" asChild>
            <a href={profile.resumeUrl} download onClick={() => track('cv_downloaded')}>
              <Download /> Download CV
            </a>
          </Button>
        )}
      </SidebarFooter>
    </Sidebar>
  )
}
