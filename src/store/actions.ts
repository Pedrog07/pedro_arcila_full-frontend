import { authActions } from './auth'
import { artistsActions } from './artists'
import { albumsActions } from './albums'
import { applicationActions } from './application'

export const actions = {
  ...authActions,
  ...artistsActions,
  ...albumsActions,
  ...applicationActions,
}
