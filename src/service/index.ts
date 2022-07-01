import axios from 'axios'

const baseURL = process.env.REACT_APP_API_URL as string

const service = axios.create({
  baseURL,
  timeout: 30000,
})

service.interceptors.response.use(
  (response) => response,
  (error) => Promise.reject(error)
)

export default service
