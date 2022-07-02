import { Theme } from '@mui/material'
import { makeStyles } from '@mui/styles'

export const useStyles = makeStyles((theme: Theme) => ({
  homeContainer: {
    marginTop: 148,
    padding: '0 88px',
    display: 'flex',
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    [theme.breakpoints.down('md')]: {
      flexDirection: 'column',
      justifyContent: 'flex-start',
      marginTop: 103,
    },
    [theme.breakpoints.down('sm')]: {
      alignItems: 'flex-start',
      padding: '0 43px',
      marginTop: 62,
    },
  },
  diagonalArrowIcon: {
    '&[class$="-root"]': {
      width: 464,
      height: 465,
    },
    [theme.breakpoints.down('md')]: {
      '&[class$="-root"]': {
        width: 318,
        height: 318,
      },
    },
    [theme.breakpoints.down('sm')]: {
      '&[class$="-root"]': {
        width: 222,
        height: 222,
        marginLeft: 27,
      },
    },
  },
  leftSide: {
    display: 'flex',
    [theme.breakpoints.down('sm')]: {
      marginLeft: 0,
      marginTop: 74,
    },
  },
  rightSide: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    marginLeft: 79,
    paddingBottom: 30,
    [theme.breakpoints.down('md')]: {
      marginLeft: 0,
      marginTop: 74,
    },
    [theme.breakpoints.down('sm')]: {
      marginTop: 27,
    },
  },
  title: {
    maxWidth: 597,
  },
  bodyText: {
    '&[class$="-root"]': {
      fontWeight: 400,
      marginTop: 39,
      maxWidth: 347,
    },
  },
  rightArrowIcon: {
    marginLeft: 28,
  },
  loginLabel: {
    display: 'flex',
    alignItems: 'center',
    cursor: 'pointer',
    '&[class$="-root"]': {
      marginTop: 108,
    },
    [theme.breakpoints.down('sm')]: {
      '&[class$="-root"]': {
        marginTop: 40,
      },
    },
  },
}))
