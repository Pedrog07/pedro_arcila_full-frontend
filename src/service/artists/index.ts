import fetchService from 'service/fetchService'
import { AppDispatch } from 'store'
import { actions } from 'store/actions'

export const searchArtists = async (
  artistName: string,
  limit: number,
  offset: number
) => {
  AppDispatch(actions.getArtistsInit())
  const query = new URLSearchParams()
  query.set('type', 'artist')
  query.set('q', `artist:${encodeURIComponent(artistName)}`)
  query.set('limit', limit.toString())
  query.set('offset', offset.toString())

  const response = await fetchService({ path: `/search?${query.toString()}` })

  if (response) {
    AppDispatch(
      actions.getArtistsCompleted({
        artists: {
          offset,
          limit,
          list: response.artists.items.map((item) => {
            const { name, followers, images } = item
            return { name, followers, images }
          }),
          total: response.artists.total,
        },
      })
    )
  }
}
