import React from 'react'
import { Provider } from 'react-redux'
import { ThemeProvider } from '@mui/material'
import store from 'store'
import theme from 'theme'
import RootLayout from 'components/RootLayout'

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <RootLayout>
          <div className="App">
            <header className="App-header">
              <p style={{ fontFamily: 'Montserrat' }}>
                Edit <code>src/App.js</code> and save to reload.
              </p>
              <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
              >
                Learn React
              </a>
            </header>
          </div>
        </RootLayout>
      </ThemeProvider>
    </Provider>
  )
}

export default App
