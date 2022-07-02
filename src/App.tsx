import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { ThemeProvider } from '@mui/material'
import store from 'store'
import theme from 'theme'
import RootLayout from 'components/RootLayout'
import { Home, Search } from 'pages'
import { persistor } from 'store'

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <ThemeProvider theme={theme}>
            <RootLayout>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/search" element={<Search />} />
              </Routes>
            </RootLayout>
          </ThemeProvider>
        </PersistGate>
      </Provider>
    </BrowserRouter>
  )
}

export default App
