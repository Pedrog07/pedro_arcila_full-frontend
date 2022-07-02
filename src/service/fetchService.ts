import axios, { Method } from 'axios'
import { toast } from 'react-toastify'

const baseURL = process.env.REACT_APP_API_URL as string

const service = axios.create({
  baseURL,
  timeout: 30000,
})

service.interceptors.response.use(
  (response) => response,
  (error) => Promise.reject(error)
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
  token,
  baseURL,
}: ServiceParams) => {
  try {
    const headers: any = {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    }
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
    // here should handle when the token is expired to update states
    toast.error(error.message, { style: { background: '#E3513D' } })
  }
}

export default fetchService
