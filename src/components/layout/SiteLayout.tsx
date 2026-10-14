import type { ReactNode } from 'react'
import { profile } from '@/content/profile'
import { SidebarInset, SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar'
import { AppSidebar } from '@/components/layout/AppSidebar'
import type { NavItem } from '@/components/layout/AppSidebar'

interface SiteLayoutProps {
  navItems: NavItem[]
  children: ReactNode
}

export function SiteLayout({ navItems, children }: SiteLayoutProps) {
  return (
    <SidebarProvider>
      {/* Must stay the first focusable element in the DOM, ahead of the sidebar. */}
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:rounded-md focus:bg-primary focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-primary-foreground"
      >
        Skip to content
      </a>
      <AppSidebar navItems={navItems} />
      <SidebarInset id="main">
        <header className="sticky top-0 z-10 flex items-center justify-between border-b bg-background/80 px-4 py-3 backdrop-blur md:hidden">
          <span className="font-heading text-sm font-medium">{profile.name}</span>
          <SidebarTrigger />
        </header>
        {children}
      </SidebarInset>
    </SidebarProvider>
  )
}
