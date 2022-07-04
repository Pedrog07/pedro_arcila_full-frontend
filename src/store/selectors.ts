import { authSelectors } from './auth'
import { artistsSelectors } from './artists'
import { albumsSelectors } from './albums'
import { applicationSelectors } from './application'

export const selectors = {
  ...authSelectors,
  ...artistsSelectors,
  ...albumsSelectors,
  ...applicationSelectors,
}
