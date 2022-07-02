import React from 'react'
import { useStyles } from './styles'
import { SvgIcon, Typography } from '@mui/material'
import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded'
import { generalIcons } from 'utils/icons'

const Home = () => {
  const classes = useStyles()
  return (
    <div className={classes.homeContainer}>
      <div className={classes.leftSide}>
        <SvgIcon
          className={classes.diagonalArrowIcon}
          width="464"
          height="465"
          viewBox="0 0 464 465"
        >
          {generalIcons.diagonalArrow}
        </SvgIcon>
      </div>
      <div className={classes.rightSide}>
        <Typography variant="h1">
          Disfruta de la{' '}
          <Typography variant="h1" color="primary">
            mejor música
          </Typography>
        </Typography>
        <Typography className={classes.bodyText} variant="body2">
          Accede a tu cuenta para guardar tus albumes favoritos.
        </Typography>
        <Typography className={classes.loginLabel} variant="body2">
          Log in con Spotify{' '}
          <ArrowForwardRoundedIcon className={classes.rightArrowIcon} />
        </Typography>
      </div>
    </div>
  )
}

export default Home
