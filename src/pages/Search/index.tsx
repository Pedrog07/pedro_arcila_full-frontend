import React, { useState, useEffect } from 'react'
import { TextField, Typography, Button } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { Artists } from 'components'
import { searchArtists } from 'service'
import { selectors } from 'store/selectors'
import { useStyles } from './styles'
import { actions } from 'store/actions'

const Search = () => {
  const [artistName, setArtistName] = useState('')
  const dispatch = useDispatch()
  const classes = useStyles()
  const { limit } = useSelector(selectors.artistsSelector)

  const handleChangeInput = (e: any) => {
    setArtistName(e.target.value)
  }
  const handleSearchArtist = async (artist: string, offset = 0) => {
    await searchArtists(artist, limit, offset)
  }

  useEffect(() => {
    return () => {
      dispatch(actions.resetArtists())
      dispatch(actions.resetSelectedArtistAlbums())
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className={classes.searchContainer}>
      <Typography className={classes.title} variant="h1">
        Busca tus{' '}
        <Typography variant="h1" component="span" color="primary">
          artistas
        </Typography>
      </Typography>
      <Typography className={classes.bodyText} variant="body1">
        Encuentra tus artistas favoritos gracias a nuestro buscador y guarda tus
        álbumes favoritos
      </Typography>
      <TextField
        onChange={handleChangeInput}
        value={artistName}
        name="artistName"
        placeholder="Buscar artista"
        className={classes.searchInput}
        fullWidth
        InputProps={{
          endAdornment: (
            <Button
              onClick={() => {
                handleSearchArtist(artistName)
              }}
              disabled={!artistName}
              variant="contained"
              color="primary"
            >
              Search
            </Button>
          ),
        }}
      />
      <Artists
        artistName={artistName}
        handleSearchArtist={handleSearchArtist}
      />
    </div>
  )
}

export default Search
