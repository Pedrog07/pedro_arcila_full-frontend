export const getAccessToken = (url: string) => {
  let token = url.split('#')[1]?.split('&')[0]?.split('access_token=')[1]
  if (!token) return null
  return token
}
