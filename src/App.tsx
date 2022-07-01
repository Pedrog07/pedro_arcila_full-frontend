import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import { ThemeProvider } from '@mui/material'
import store from 'store'
import theme from 'theme'
import RootLayout from 'components/RootLayout'
import { Home } from 'pages'

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <RootLayout>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />} />
            </Routes>
          </BrowserRouter>
        </RootLayout>
      </ThemeProvider>
    </Provider>
  )
}

export default App
