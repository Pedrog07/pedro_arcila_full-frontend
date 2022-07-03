import { toast } from 'react-toastify'
import fetchService from 'service/fetchService'
import { AppDispatch } from 'store'
import { actions } from 'store/actions'

export const checkSavedAlbums = async (albumIds: string[]) => {
  const query = new URLSearchParams()
  query.set('ids', `${albumIds.join(',')}`)

  const response = await fetchService({
    path: `/me/albums/contains?${query.toString()}`,
  })

  if (response) {
    return response
  }
}

export const saveAlbum = async (
  albumId: string,
  callback?: () => void | Promise<any>
) => {
  const query = new URLSearchParams()
  query.set('ids', albumId)

  const response = await fetchService({
    path: `/me/albums?${query.toString()}`,
    method: 'put',
  })

  if (response) {
    callback && callback()
    toast.success('El album ha sido guardado exitosamente')
  }
}

export const removeAlbum = async (
  albumId: string,
  callback?: () => void | Promise<any>
) => {
  const query = new URLSearchParams()
  query.set('ids', albumId)

  const response = await fetchService({
    path: `/me/albums?${query.toString()}`,
    method: 'delete',
  })

  if (response) {
    callback && callback()
    toast.success('El album ha sido removido exitosamente')
  }
}

export const getMyAlbums = async (
  limit: number,
  offset: number,
  skipLoader?: boolean
) => {
  !skipLoader && AppDispatch(actions.getMyAlbumsInit())

  const query = new URLSearchParams()
  query.set('limit', limit.toString())
  query.set('offset', offset.toString())

  const response = await fetchService({
    path: `/me/albums?${query.toString()}`,
  })

  if (response) {
    let checks: boolean[] = []
    if (response.items.length) {
      checks = await checkSavedAlbums(
        response.items.map((item: any) => item.album.id)
      )
    }
    AppDispatch(
      actions.getMyAlbumsCompleted({
        myAlbums: {
          list: response.items.map((item: any, index: number) => {
            const { id, images, name, release_date } = item.album
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
