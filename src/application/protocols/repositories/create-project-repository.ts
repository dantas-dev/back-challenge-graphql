import { CreateProjectDto } from '@/application/usecases'
import { Project } from '@/entities'

export interface CreateProjectRepository {
  create: (data: CreateProjectDto) => Promise<Project>
}
