import fetchService from 'service/fetchService'
import { AppDispatch, AppSelector } from 'store'
import { selectors } from 'store/selectors'
import { actions } from 'store/actions'

export const searchArtists = async (
  artistName: string,
  limit: number,
  offset: number
) => {
  const query = new URLSearchParams()
  query.set('type', 'artist')
  query.set('q', `artist:${encodeURIComponent(artistName)}`)
  query.set('limit', limit.toString())
  query.set('offset', offset.toString())

  const response = await fetchService({ path: `/search?${query.toString()}` })
  console.log(response)
  if (response) {
    // const { offset: currentOffset } = AppSelector(selectors.artistsSelector)
    // const isNext = offset > currentOffset
    true &&
      AppDispatch(
        actions.getArtistsCompleted({
          artists: {
            offset: limit + offset,
            limit,
            list: response.artists.items,
            total: response.artists.total,
          },
        })
      )
  }
}
