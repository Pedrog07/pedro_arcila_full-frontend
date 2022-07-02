import { createSlice } from '@reduxjs/toolkit'
import * as authSelectors from './selectors'

const initialState = {
  isAuthenticated: false,
  token: null,
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, { payload }) => {
      const { token } = payload
      state.isAuthenticated = true
      state.token = token
    },
    logout: (state) => {
      state.isAuthenticated = false
      state.token = null
    },
  },
})

const authActions = authSlice.actions

export { authActions, authSelectors }
export default authSlice.reducer
