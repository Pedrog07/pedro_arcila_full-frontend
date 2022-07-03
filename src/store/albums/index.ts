import { createSlice } from '@reduxjs/toolkit'
import * as albumsSelectors from './selectors'

const initialState = {
  myAlbums: {
    fetching: false,
    offset: 0,
    total: 0,
    limit: 8,
    list: [],
  },
}

const albumsSlice = createSlice({
  name: 'albums',
  initialState,
  reducers: {
    getMyAlbumsInit: (state) => {
      state.myAlbums.fetching = true
    },
    getMyAlbumsCompleted: (state, { payload }) => {
      const { myAlbums } = payload
      state.myAlbums = myAlbums
    },
  },
})

const albumsActions = albumsSlice.actions

export { albumsActions, albumsSelectors }
export default albumsSlice.reducer
