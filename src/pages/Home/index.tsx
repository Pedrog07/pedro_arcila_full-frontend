import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { SvgIcon, Typography } from '@mui/material'
import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded'
import { generalIcons } from 'utils/icons'
import { getAccessToken } from 'utils'
import { useStyles } from './styles'
import { actions } from 'store/actions'

const Home = () => {
  const classes = useStyles()
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleLogin = () => {
    const baseURL = process.env.REACT_APP_AUTH_URL as string
    const clientId = process.env.REACT_APP_CLIENT_ID as string
    const scope = process.env.REACT_APP_TOKEN_SCOPES as string
    const redirectUri = process.env.REACT_APP_REDIRECT_URL as string

    const query = new URLSearchParams()
    query.set('response_type', 'token')
    query.set('client_id', encodeURIComponent(clientId))
    query.set('scope', encodeURIComponent(scope.split(',').join(' ')))
    query.set('redirect_uri', redirectUri)

    window.location.assign(`${baseURL}/authorize?${query.toString()}`)
  }

  useEffect(() => {
    const token = getAccessToken(window.location.href)
    if (token) {
      dispatch(actions.login({ token }))
      navigate('/search')
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return (
    <div className={classes.homeContainer}>
      <div className={classes.leftSide}>
        <SvgIcon
          sx={{
            width: { md: 464, sm: 318, xs: 222 },
            height: { md: 465, sm: 318, xs: 222 },
            marginLeft: { xs: '27px', sm: 0 },
          }}
          //className={classes.diagonalArrowIcon}
          width="464"
          height="465"
          viewBox="0 0 464 465"
        >
          {generalIcons.diagonalArrow}
        </SvgIcon>
      </div>
      <div className={classes.rightSide}>
        <Typography className={classes.title} variant="h1">
          Disfruta de la{' '}
          <Typography component="span" variant="h1" color="primary">
            mejor música
          </Typography>
        </Typography>
        <Typography className={classes.bodyText} variant="body2">
          Accede a tu cuenta para guardar tus albumes favoritos.
        </Typography>
        <Typography
          component="label"
          onClick={handleLogin}
          className={classes.loginLabel}
          variant="body2"
        >
          Log in con Spotify{' '}
          <ArrowForwardRoundedIcon className={classes.rightArrowIcon} />
        </Typography>
      </div>
    </div>
  )
}

export default Home
