import { Project } from '@/entities'

export interface GetProjectsRepository {
  getAll: () => Promise<Project[]>
}
