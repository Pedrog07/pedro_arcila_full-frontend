import React from 'react'
import { Drawer, DrawerProps, Grid } from '@mui/material'
import { useStyles } from './styles'
import { Toolbar } from 'components'
import { useSelector } from 'react-redux'
import { selectors } from 'store/selectors'

const ArtistAlbumsDrawer = (props: DrawerProps) => {
  const classes = useStyles()
  const { isAuthenticated } = useSelector(selectors.authSelector)
  const { selectedArtist } = useSelector(selectors.selectedArtistAlbumsSelector)
  return (
    <Drawer anchor="right" classes={{ paper: classes.drawerPaper }} {...props}>
      <Toolbar onClose={props.onClose} isAuthenticated={isAuthenticated} />
      <div className={classes.drawerContent}>
        <Grid className={classes.artistInfoContainer} container>
          <Grid item xs={12} sm={5} md={3}>
            <img
              className={classes.avatar}
              alt="artist"
              src={selectedArtist?.images[1]?.url}
            />
          </Grid>
          <Grid item xs={12} sm={7} md={9}></Grid>
        </Grid>
      </div>
    </Drawer>
  )
}

export default ArtistAlbumsDrawer
