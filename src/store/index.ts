import { configureStore, combineReducers } from '@reduxjs/toolkit'
import localforage from 'localforage'
import { persistStore, persistReducer } from 'redux-persist'
import { reducer } from './reducers'

const persistConfig = {
  key: 'pa_full-frontend',
  storage: localforage,
  whitelist: ['auth'],
}

const persistedReducer = persistReducer(persistConfig, combineReducers(reducer))

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
})

export const persistor = persistStore(store)
export default store
