import { configureStore } from '@reduxjs/toolkit'
import * as reducer from './reducers'

const store = configureStore({
  reducer,
})
export default store
