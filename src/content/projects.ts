import data from '@/data/projects.json'
import type { Project } from '@/types/content'

// Annotated, not cast: `as Project[]` would silently accept malformed entries.
export const projects: Project[] = data
