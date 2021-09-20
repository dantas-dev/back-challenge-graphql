import { CreateProjectDto } from '@/application/usecases'
import { Project } from '@/entities'

export interface CreateProject {
  create: (data: CreateProjectDto) => Promise<Project>
}
