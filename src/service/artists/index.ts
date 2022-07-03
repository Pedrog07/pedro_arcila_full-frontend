import fetchService from 'service/fetchService'
import { AppDispatch } from 'store'
import { actions } from 'store/actions'
import { checkSavedAlbums } from 'service/albums'

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
            const { name, followers, images, id } = item
            return { name, followers, images, id }
          }),
          total: response.artists.total,
          fetching: false,
        },
      })
    )
  }
}

export const getSelectedArtistAlbums = async (
  artist: any,
  limit: number,
  offset: number,
  skipLoader?: boolean
) => {
  !skipLoader && AppDispatch(actions.getSelectedArtistAlbumsInit())
  const query = new URLSearchParams()
  query.set('limit', limit.toString())
  query.set('offset', offset.toString())

  const response = await fetchService({
    path: `/artists/${artist.id}/albums?${query.toString()}`,
  })

  if (response) {
    const checks = await checkSavedAlbums(
      response.items.map((item: any) => item.id)
    )
    AppDispatch(
      actions.getSelectedArtistAlbumsCompleted({
        selectedArtistAlbums: {
          selectedArtist: artist,
          list: response.items.map((item: any, index: number) => {
            const { id, images, name, release_date } = item
            return {
              id,
              images,
              name,
              release_date,
              hasSavedAlbum: checks[index],
            }
          }),
          offset,
          limit,
          total: response.total,
          fetching: false,
        },
      })
    )
  }
}
