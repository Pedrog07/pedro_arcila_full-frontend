import { Theme } from '@mui/material'
import { makeStyles } from '@mui/styles'

export const useStyles = makeStyles((theme: Theme) => ({
  toolbarContainer: {
    height: 87,
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  toolbarControlsContainer: {
    display: 'flex',
    alignItems: 'center',
    height: '100%',
    paddingRight: 80,
    [theme.breakpoints.down('md')]: {
      paddingRight: 42,
    },
  },
  toolbarControl: {
    cursor: 'pointer',
    display: 'flex',
  },
  mgl: {
    '&, &[class$="-root"]': {
      marginLeft: 42,
    },
    [theme.breakpoints.down('sm')]: {
      '&, &[class$="-root"]': {
        marginLeft: 12,
      },
    },
  },
  separator: {
    borderWidth: '0 0 0 1px',
    borderStyle: 'solid',
    borderColor: '#FFF',
    height: 25,
  },
  sunIcon: {
    '&[class$="-root"]': {
      width: 24,
      height: 24,
      color: '#FFF',
    },
  },
  logoutIcon: {
    '&[class$="-root"]': {
      width: 24,
      height: 19,
      color: '#FFF',
    },
  },
}))