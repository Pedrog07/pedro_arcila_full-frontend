import { createTheme } from '@mui/material/styles'

export const { breakpoints } = createTheme()

let theme = createTheme({
  typography: {
    fontFamily: 'Montserrat',
    h1: {
      fontSize: 64,
      fontWeight: 700,
      lineHeight: '78px',
      color: '#FFF',
      [breakpoints.down('sm')]: {
        fontSize: 40,
        lineHeight: '49px',
      },
    },
    h2: {
      fontSize: 36,
      fontWeight: 600,
      lineHeight: '44px',
      color: '#FFF',
      [breakpoints.down('sm')]: {
        fontSize: 24,
        lineHeight: '29px',
      },
    },
    body1: {
      fontSize: 16,
      fontWeight: 400,
      fontStyle: 'normal',
      lineHeight: '32px',
      color: '#FFF',
    },
    body2: {
      fontSize: 16,
      fontWeight: 600,
      fontStyle: 'normal',
      lineHeight: '20px',
      color: '#FFF',
    },
  },
  palette: {
    primary: {
      main: '#D6F379',
      dark: '#222222',
      light: '#FFF',
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
          fontSize: 16,
          lineHeight: '20px',
          fontWeight: 600,
          fontFamily: 'Montserrat',
          textTransform: 'none',
          '&:hover': {
            backgroundColor: theme.palette.primary.main,
            //boxShadow: 'unset',
          },
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: 24,
          padding: '8px 8px 8px 24px',
          height: 62,
          background: '#FFF',
          '& > input': {
            fontFamily: 'Montserrat',
            fontSize: 16,
            fontWeight: 600,
            lineHeight: '20px',
            padding: 0,
            color: '#000',
          },
          '& > fieldset': {
            border: 'none',
          },
        },
      },
    },
  },
})

export default theme
