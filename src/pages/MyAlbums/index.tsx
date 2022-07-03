import React, { useEffect } from 'react'
import { Typography } from '@mui/material'
import { useSelector } from 'react-redux'
import { Albums } from 'components'
import { getMyAlbums } from 'service'
import { selectors } from 'store/selectors'
import { useStyles, sx } from './styles'

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
      <Typography sx={sx.title} variant="h1">
        Mis albumes{' '}
        <Typography variant="h1" component="span" color="primary">
          guardados
        </Typography>
      </Typography>
      <Typography sx={sx.bodyText} variant="body1">
        Disfruta de tu música a un solo click y descube que discos has guardado
        dentro de “mis álbumes”
      </Typography>

      <Albums handleSearchMyAlbums={handleSearchMyAlbums} />
    </div>
  )
}

export default MyAlbums
