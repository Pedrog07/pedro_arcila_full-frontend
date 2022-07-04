import { createSlice } from '@reduxjs/toolkit'
import * as applicationSelectors from './selectors'

const initialState = {
  themeMode: 'dark',
}

const applicationSlice = createSlice({
  name: 'application',
  initialState,
  reducers: {
    switchThemeMode: (state) => {
      if (state.themeMode === 'light') {
        state.themeMode = 'dark'
      } else {
        state.themeMode = 'light'
      }
    },
  },
})

const applicationActions = applicationSlice.actions

export { applicationActions, applicationSelectors }
export default applicationSlice.reducer
