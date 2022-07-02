import { authActions } from './auth'
import { artistsActions } from './artists'

export const actions = {
  ...authActions,
  ...artistsActions,
}
