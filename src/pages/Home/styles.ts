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
  rightArrowIcon: {
    marginLeft: 28,
  },
}))

export const sx = {
  diagonalArrowIcon: {
    width: { xs: 222, sm: 318, md: 464 },
    height: { xs: 222, sm: 318, md: 465 },
    marginLeft: { xs: '27px', sm: 0 },
  },
  bodyText: {
    fontWeight: 400,
    marginTop: '39px',
    maxWidth: 347,
  },
  loginLabel: {
    display: 'flex',
    alignItems: 'center',
    cursor: 'pointer',
    marginTop: { xs: '40px', sm: '108px' },
  },
}
