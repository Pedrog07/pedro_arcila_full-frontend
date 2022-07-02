import React from 'react'
import { Grid, Typography } from '@mui/material'
import { useSelector } from 'react-redux'
import { ArtistCard } from 'components/Cards'
import { selectors } from 'store/selectors'
import { useStyles } from './styles'

const ArtistAlbums = () => {
  const classes = useStyles()
  const { list, total } = useSelector(selectors.artistsSelector)
  return (
    <Grid
      className={classes.artistAlbumsContainer}
      container
      justifyContent="flex-start"
    >
      <Grid item xs={12}>
        <Typography variant="body1">Mostrando 4 resultados de TOTAL</Typography>
      </Grid>
    </Grid>
  )
}

export default ArtistAlbums
