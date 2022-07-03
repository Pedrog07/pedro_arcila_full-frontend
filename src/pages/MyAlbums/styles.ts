import { Theme } from '@mui/material'
import { makeStyles } from '@mui/styles'

export const useStyles = makeStyles((theme: Theme) => ({
  myAlbumsContainer: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    height: 'fit-content',
    alignItems: 'center',
    padding: '0 120px 30px',
    [theme.breakpoints.down('sm')]: {
      padding: '0 26px 30px',
    },
  },
  title: {
    maxWidth: 458,
    textAlign: 'center',
    '&[class$="-root"]': {
      marginTop: 106,
    },
    [theme.breakpoints.down('sm')]: {
      '&[class$="-root"]': {
        marginTop: 45,
      },
      maxWidth: 329,
      textAlign: 'left',
    },
  },
  bodyText: {
    maxWidth: 458,
    textAlign: 'center',
    '&[class$="-root"]': {
      marginTop: 24,
    },
    [theme.breakpoints.down('sm')]: {
      maxWidth: 329,
      textAlign: 'left',
    },
  },
}))