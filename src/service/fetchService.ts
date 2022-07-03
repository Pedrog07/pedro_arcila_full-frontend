import axios, { Method } from 'axios'
import { toast } from 'react-toastify'
import { AppSelector, AppDispatch } from 'store'
import { actions } from 'store/actions'

const baseURL = process.env.REACT_APP_API_URL as string

const service = axios.create({
  baseURL,
  timeout: 30000,
})

service.interceptors.response.use(
  (response) => response.data,
  (error) => Promise.reject(error.response.data)
)

interface ServiceParams {
  path: string
  method?: Method
  data?: any
  token?: string
  baseURL?: string
}

const fetchService = async ({
  path,
  method = 'GET',
  data = null,
  baseURL,
}: ServiceParams): Promise<any> => {
  try {
    const headers: any = {
      'Content-Type': 'application/json',
    }
    const token = AppSelector((state) => state.auth.token)
    if (token) headers['Authorization'] = `Bearer ${token}`

    const response = await service({
      url: path,
      method,
      data,
      baseURL,
      headers,
    })

    return response
  } catch (error: any) {
    if (
      error.error.status === 401 &&
      error.error.message === 'The access token expired'
    ) {
      setTimeout(() => {
        AppDispatch(actions.logout())
        window.location.reload()
      }, 2000)
    }
    toast.error(error.error.message, { style: { background: '#E3513D' } })
  }
}

export default fetchService
