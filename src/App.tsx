import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import store from 'store'
import { RootLayout, Theme } from 'components'
import { Home, Search, MyAlbums, NotFound } from 'pages'
import { persistor } from 'store'

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Theme>
            <RootLayout>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/search" element={<Search />} />
                <Route path="/my-albums" element={<MyAlbums />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </RootLayout>
          </Theme>
        </PersistGate>
      </Provider>
    </BrowserRouter>
  )
}

export default App
