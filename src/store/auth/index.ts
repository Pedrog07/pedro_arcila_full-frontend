import { createSlice } from '@reduxjs/toolkit'
import * as authSelectors from './selectors'

const initialState = {
  isAuthenticated: true,
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    authenticate: (state, action) => {
      state.isAuthenticated = action.payload
    },
  },
})

const authActions = authSlice.actions

export { authActions, authSelectors }
export default authSlice.reducer
