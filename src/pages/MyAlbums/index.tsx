import React, { useEffect } from 'react'
import { Typography } from '@mui/material'
import { Albums } from 'components'
import { getMyAlbums } from 'service'
import { useStyles } from './styles'
import { useSelector } from 'react-redux'
import { selectors } from 'store/selectors'

const MyAlbums = () => {
  const classes = useStyles()
  const { limit, offset } = useSelector(selectors.myAlbumsSelector)

  const handleSearchMyAlbums = async (
    offset: number = 0,
    skipLoader?: boolean
  ) => {
    await getMyAlbums(limit, offset, skipLoader)
  }

  useEffect(() => {
    handleSearchMyAlbums(offset)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className={classes.myAlbumsContainer}>
      <Typography className={classes.title} variant="h1">
        Mis albumes{' '}
        <Typography variant="h1" component="span" color="primary">
          guardados
        </Typography>
      </Typography>
      <Typography className={classes.bodyText} variant="body1">
        Disfruta de tu música a un solo click y descube que discos has guardado
        dentro de “mis álbumes”
      </Typography>

      <Albums handleSearchMyAlbums={handleSearchMyAlbums} />
    </div>
  )
}

export default MyAlbums
