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
