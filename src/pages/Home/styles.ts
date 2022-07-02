import { Theme } from '@mui/material'
import { makeStyles } from '@mui/styles'

export const useStyles = makeStyles((theme: Theme) => ({
  homeContainer: {
    padding: '148px 88px 0',
    display: 'flex',
    width: '100%',
    justifyContent: 'center',
    [theme.breakpoints.down('md')]: {
      flexDirection: 'column',
      padding: '103px 88px 0',
    },
    [theme.breakpoints.down('sm')]: {
      alignItems: 'center',
      padding: '62px 43px 0',
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
      },
    },
  },
  leftSide: {
    display: 'flex',
  },
  rightSide: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    marginLeft: 79,
    [theme.breakpoints.down('md')]: {
      marginLeft: 0,
      marginTop: 74,
    },
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
