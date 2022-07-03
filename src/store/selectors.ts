import { authSelectors } from './auth'
import { artistsSelectors } from './artists'
import { albumsSelectors } from './albums'

export const selectors = {
  ...authSelectors,
  ...artistsSelectors,
  ...albumsSelectors,
}
