import { Project } from '@/entities'

export interface GetProjects {
  getAll: () => Promise<Project[]>
}
