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

export const AppSelector = (selector: (state: any) => any) =>
  selector(store.getState())
export const AppDispatch = store.dispatch

export const persistor = persistStore(store)
export default store
