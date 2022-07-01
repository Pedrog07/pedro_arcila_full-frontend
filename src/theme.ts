import { createTheme } from '@mui/material/styles'

export const { breakpoints } = createTheme()

let theme = createTheme({
  typography: {
    fontFamily: 'Montserrat',
    h1: {
      fontSize: 64,
      fontWeight: 700,
      lineHeight: 78,
      color: '#FFF',
      [breakpoints.down('sm')]: {
        fontSize: 40,
        lineHeight: 49,
      },
    },
    h2: {
      fontSize: 36,
      fontWeight: 600,
      lineHeight: 44,
      color: '#FFF',
      [breakpoints.down('sm')]: {
        fontSize: 24,
        lineHeight: 29,
      },
    },
    body1: {
      fontSize: 16,
      fontWeight: 400,
      fontStyle: 'normal',
      lineHeight: 32,
      color: '#FFF',
    },
    body2: {
      fontSize: 16,
      fontWeight: 600,
      fontStyle: 'normal',
      lineHeight: 20,
      color: '#FFF',
    },
  },
  palette: {
    primary: {
      main: '#D6F379',
      dark: '#222',
    },
    secondary: {
      main: '#E3513D',
    },
  },
})

theme = createTheme(theme, {
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          width: '100%',
          maxWidth: 154,
          height: 44,
          borderRadius: 24,
          padding: 24,
        },
      },
    },
  },
})

export default theme
