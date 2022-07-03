import React, { useState } from 'react'
import {
  CircularProgress,
  Grid,
  Typography,
  Pagination,
  useMediaQuery,
} from '@mui/material'
import { useSelector } from 'react-redux'
import { BaseCard, ArtistAlbumsDrawer } from 'components'
import { selectors } from 'store/selectors'
import theme from 'theme'
import { getSelectedArtistAlbums } from 'service'
import { useStyles } from './styles'

const Artists = ({
  handleSearchArtist,
  artistName,
}: {
  handleSearchArtist: (artistName: string, offset?: number) => void
  artistName: string
}) => {
  const [showAlbumsModal, setShowAlbumsModal] = useState(false)
  const classes = useStyles()
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'))
  const { list, total, limit, offset, fetching } = useSelector(
    selectors.artistsSelector
  )
  const selectedArtistAlbums = useSelector(
    selectors.selectedArtistAlbumsSelector
  )
  console.log(selectedArtistAlbums)
  return (
    <>
      <Grid
        className={classes.artistsContainer}
        container
        justifyContent="flex-start"
      >
        <Grid item xs={12}>
          <Typography variant="body1">
            Mostrando {list.length} resultados de {total}
          </Typography>
        </Grid>
      </Grid>

      {fetching ? (
        <Grid container justifyContent="center">
          <CircularProgress color="primary" size={60} />
        </Grid>
      ) : (
        <Grid container>
          {list.map((artist, index) => (
            <Grid key={index} item xs={12} md={6} lg={3}>
              <BaseCard
                onClick={async () => {
                  await getSelectedArtistAlbums(
                    artist,
                    selectedArtistAlbums.limit,
                    selectedArtistAlbums.offset
                  )
                  setShowAlbumsModal(true)
                }}
                name={artist.name}
                imgUrl={artist.images[1]?.url}
                highlightOnHover
                footer={
                  <Typography
                    className={classes.cardFooterText}
                    variant="body2"
                  >
                    Followers: {artist.followers.total}
                  </Typography>
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
            handleSearchArtist(artistName, (page - 1) * limit)
          }}
          classes={{ root: classes.paginationRoot }}
        />
      </Grid>
      <ArtistAlbumsDrawer
        open={showAlbumsModal}
        onClose={() => {
          setShowAlbumsModal(false)
        }}
      />
    </>
  )
}

export default Artists
