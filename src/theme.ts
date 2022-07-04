import { createTheme } from '@mui/material/styles'
import { Theme } from '@mui/material'

let theme = createTheme()

export const getThemeConfig = (theme: Theme) => ({
  typography: {
    fontFamily: 'Montserrat',
    h1: {
      fontSize: 64,
      fontWeight: 700,
      lineHeight: '78px',
      color: theme.palette.text.primary,
      [theme.breakpoints.down('sm')]: {
        fontSize: 40,
        lineHeight: '49px',
      },
    },
    h2: {
      fontSize: 36,
      fontWeight: 600,
      lineHeight: '44px',
      color: theme.palette.text.primary,
      [theme.breakpoints.down('sm')]: {
        fontSize: 24,
        lineHeight: '29px',
      },
    },
    body1: {
      fontSize: 16,
      fontWeight: 400,
      fontStyle: 'normal',
      lineHeight: '32px',
      color: theme.palette.text.primary,
    },
    body2: {
      fontSize: 16,
      fontWeight: 600,
      fontStyle: 'normal',
      lineHeight: '20px',
      color: theme.palette.text.primary,
    },
  },
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
          whiteSpace: 'nowrap',
          '&:hover': {
            '&[class*="Secondary"]': {
              backgroundColor: theme.palette.secondary.main,
            },
            '&[class*="Primary"]': {
              backgroundColor: theme.palette.primary.main,
            },
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
          background: theme.palette.action.active,
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

export const getThemePalette = (mode: 'dark' | 'light') => {
  const palettes = {
    light: {
      primary: {
        main: '#D6F379',
        dark: '#222222',
        light: '#FFF',
      },
      secondary: {
        main: '#E3513D',
      },
      background: {
        default: '#FFFFFF',
      },
      text: {
        primary: '#222222',
        secondary: '#D6F379',
      },
      action: {
        disabledBackground: '#0000004D',
        disabled: '#000000BF',
        active: '#00000033',
      },
    },
    dark: {
      primary: {
        main: '#D6F379',
        dark: '#222222',
        light: '#FFF',
      },
      secondary: {
        main: '#E3513D',
      },
      background: {
        default: '#222222',
      },
      text: {
        primary: '#FFF',
        secondary: '#D6F379',
      },
      action: {
        disabledBackground: '#0000001A',
        disabled: '#00000080',
        active: '#FFF',
      },
    },
  }
  return createTheme({
    palette: { ...palettes[mode], mode },
  })
}
export default theme
