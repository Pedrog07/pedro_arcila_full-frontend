import React from 'react'
import {
  Button,
  CircularProgress,
  Drawer,
  DrawerProps,
  Grid,
  Pagination,
  Typography,
  useMediaQuery,
} from '@mui/material'
import { useStyles } from './styles'
import { Toolbar, BaseCard } from 'components'
import { useSelector } from 'react-redux'
import { selectors } from 'store/selectors'
import { getSelectedArtistAlbums, removeAlbum, saveAlbum } from 'service'
import theme from 'theme'

const ArtistAlbumsDrawer = (props: DrawerProps) => {
  const classes = useStyles()
  const isMobile = useMediaQuery(theme.breakpoints.down(700))
  const { isAuthenticated } = useSelector(selectors.authSelector)
  const { selectedArtist, list, limit, total, offset, fetching } = useSelector(
    selectors.selectedArtistAlbumsSelector
  )

  const handleSearchArtistAlbums = async (
    artist: any,
    offset: number = 0,
    skipLoader?: boolean
  ) => {
    await getSelectedArtistAlbums(artist, limit, offset, skipLoader)
  }

  const handleSaveAlbum = async (albumId: string) => {
    await saveAlbum(albumId, () => {
      handleSearchArtistAlbums(selectedArtist, offset, true)
    })
  }

  const handleRemoveAlbum = async (albumId: string) => {
    await removeAlbum(albumId, () => {
      handleSearchArtistAlbums(selectedArtist, offset, true)
    })
  }

  return (
    <Drawer anchor="right" classes={{ paper: classes.drawerPaper }} {...props}>
      <Toolbar onClose={props.onClose} isAuthenticated={isAuthenticated} />
      <div className={classes.drawerContent}>
        <div className={classes.artistInfoContainer}>
          <div className={classes.leftSide}>
            <div className={classes.avatarWrapper}>
              {selectedArtist?.images[1]?.url && (
                <img
                  className={classes.avatar}
                  alt="artist"
                  src={selectedArtist?.images[1]?.url}
                />
              )}
            </div>
          </div>
          <div className={classes.rightSide}>
            <Typography className={classes.artistTitle} variant="h1">
              {selectedArtist?.name}
            </Typography>
            <Typography className={classes.artistText} variant="body2">
              Followers: {selectedArtist?.followers?.total}
            </Typography>
          </div>
        </div>
        <Grid className={classes.albumsContainer} container>
          <Typography variant="body1">
            Guarda tus álbumes favoritos de {selectedArtist?.name}
          </Typography>
        </Grid>
        {fetching ? (
          <Grid container justifyContent="center">
            <CircularProgress color="primary" size={60} />
          </Grid>
        ) : (
          <Grid container>
            {list.map((album, index) => (
              <Grid key={index} item xs={12} md={6} lg={3}>
                <BaseCard
                  name={album.name}
                  imgUrl={album.images[1]?.url}
                  footer={
                    <>
                      <Typography
                        className={classes.cardFooterText}
                        variant="body2"
                      >
                        Publicado: {album.release_date}
                      </Typography>
                      <Button
                        className={classes.cardFooterButton}
                        style={{
                          maxWidth: album?.hasSavedAlbum ? 184 : undefined,
                        }}
                        color={album?.hasSavedAlbum ? 'secondary' : 'primary'}
                        variant="contained"
                        onClick={() => {
                          album?.hasSavedAlbum
                            ? handleRemoveAlbum(album?.id)
                            : handleSaveAlbum(album?.id)
                        }}
                      >
                        {album?.hasSavedAlbum
                          ? '- Remove album'
                          : '+ Add album'}
                      </Button>
                    </>
                  }
                />
              </Grid>
            ))}
          </Grid>
        )}
        <Grid container>
          <Pagination
            size={isMobile ? 'medium' : 'large'}
            count={Math.ceil(total / limit)}
            page={Math.ceil((offset + limit) / limit)}
            boundaryCount={1}
            siblingCount={1}
            onChange={(_, page) => {
              handleSearchArtistAlbums(selectedArtist, (page - 1) * limit)
            }}
            classes={{ root: classes.paginationRoot }}
          />
        </Grid>
      </div>
    </Drawer>
  )
}

export default ArtistAlbumsDrawer
