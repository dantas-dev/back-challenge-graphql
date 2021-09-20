import { merge } from 'lodash'
import base from './base'
import project from './project'
import user from './user'

export default merge(base, project, user)
