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
  selectedArtist: null,
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
    getSelectedArtistCompleted: (state, { payload }) => {
      const { selectedArtist } = payload
      state.selectedArtist = selectedArtist
    },
  },
})

const artistsActions = artistsSlice.actions

export { artistsActions, artistsSelectors }
export default artistsSlice.reducer
