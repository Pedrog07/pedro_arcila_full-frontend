import { authSelectors } from './auth'
import { artistsSelectors } from './artists'

export const selectors = {
  ...authSelectors,
  ...artistsSelectors,
}
