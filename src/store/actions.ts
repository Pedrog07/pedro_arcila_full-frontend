import { authActions } from './auth'
import { artistsActions } from './artists'
import { albumsActions } from './albums'

export const actions = {
  ...authActions,
  ...artistsActions,
  ...albumsActions,
}
