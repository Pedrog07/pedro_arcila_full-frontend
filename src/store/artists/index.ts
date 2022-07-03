import { createSlice } from '@reduxjs/toolkit'
import * as artistsSelectors from './selectors'

const initialState = {
  artists: {
    fetching: false,
    list: [],
    limit: 4,
    offset: 0,
    total: 0,
  },
  selectedArtistAlbums: {
    fetching: false,
    offset: 0,
    total: 0,
    limit: 8,
    list: [],
  },
}

const artistsSlice = createSlice({
  name: 'artists',
  initialState,
  reducers: {
    getArtistsInit: (state) => {
      state.artists.fetching = true
    },
    getArtistsCompleted: (state, { payload }) => {
      const { artists } = payload
      state.artists = artists
    },
    getSelectedArtistAlbumsInit: (state) => {
      state.selectedArtistAlbums.fetching = true
    },
    getSelectedArtistAlbumsCompleted: (state, { payload }) => {
      const { selectedArtistAlbums } = payload
      state.selectedArtistAlbums = selectedArtistAlbums
    },
    resetSelectedArtistAlbums: (state) => {
      state.selectedArtistAlbums = initialState.selectedArtistAlbums
    },
  },
})

const artistsActions = artistsSlice.actions

export { artistsActions, artistsSelectors }
export default artistsSlice.reducer
