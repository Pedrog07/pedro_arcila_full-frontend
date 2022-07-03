import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import {
  Button,
  CircularProgress,
  Grid,
  Pagination,
  Typography,
  useMediaQuery,
} from '@mui/material'
import { BaseCard } from 'components'
import { removeAlbum } from 'service'
import theme from 'theme'
import { selectors } from 'store/selectors'
import { useStyles, sx } from './styles'

const Albums = ({
  handleSearchMyAlbums,
}: {
  handleSearchMyAlbums: (offset: number, skipLoader?: boolean) => void
}) => {
  const classes = useStyles()
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'))
  const navigate = useNavigate()
  const { list, limit, total, offset, fetching } = useSelector(
    selectors.myAlbumsSelector
  )

  const handleRemoveAlbum = async (albumId: string) => {
    await removeAlbum(albumId, () => {
      handleSearchMyAlbums(
        total - 1 === offset && total - 1 > 0 ? offset - limit : offset,
        true
      )
    })
  }

  return (
    <>
      {fetching ? (
        <Grid sx={sx.mgt} container justifyContent="center">
          <CircularProgress color="primary" size={60} />
        </Grid>
      ) : (
        <Grid sx={sx.mgt} container>
          {list.length ? (
            list.map((album: any, index: number) => (
              <Grid
                key={index}
                className={classes.albumCardWrapper}
                item
                xs={12}
                md={6}
                lg={3}
              >
                <BaseCard
                  name={album.name}
                  imgUrl={album.images[1]?.url}
                  footer={
                    <>
                      <Typography sx={sx.cardFooterText} variant="body2">
                        Publicado: {album.release_date}
                      </Typography>
                      <Button
                        sx={sx.cardFooterButton}
                        color="secondary"
                        variant="contained"
                        onClick={() => {
                          handleRemoveAlbum(album?.id)
                        }}
                      >
                        - Remove album
                      </Button>
                    </>
                  }
                />
              </Grid>
            ))
          ) : (
            <Typography variant="body1">
              No se han guardado albumes aun. No pierdas tiempo y comienza a{' '}
              <Typography
                onClick={() => {
                  navigate('/search')
                }}
                className={classes.searchLink}
                variant="body1"
                color="primary"
                component="span"
              >
                Buscar
              </Typography>{' '}
              los albumes de tus artistas favoritos
            </Typography>
          )}
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
            handleSearchMyAlbums((page - 1) * limit)
          }}
          classes={{ root: classes.paginationRoot }}
        />
      </Grid>
    </>
  )
}
export default Albums
