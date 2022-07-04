import React from 'react'
import { ThemeProvider, createTheme } from '@mui/material'
import { getThemePalette, getThemeConfig } from 'theme'
import { useSelector } from 'react-redux'
import { selectors } from 'store/selectors'

const Theme = ({ children }: { children: React.ReactNode }) => {
  const { themeMode } = useSelector(selectors.applicationSelector)
  let theme = getThemePalette(themeMode)
  theme = createTheme(theme, getThemeConfig(theme))
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}

export default Theme
