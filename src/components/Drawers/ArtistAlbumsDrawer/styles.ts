import { Theme } from '@mui/material'
import { makeStyles } from '@mui/styles'

export const useStyles = makeStyles((theme: Theme) => ({
  drawerPaper: {
    '&.MuiPaper-root': {
      height: '100%',
      backgroundColor: theme.palette.background.default,
      backgroundImage: 'unset',
      width: '100%',
      '&::-webkit-scrollbar': {
        width: 7,
      },
      '&::-webkit-scrollbar-track': {
        background: 'none',
      },
      '&::-webkit-scrollbar-thumb': {
        background: theme.palette.text.primary,
        borderRadius: 3,
      },
      '&::-webkit-scrollbar-thumb:hover': {
        background: theme.palette.primary.main,
      },
    },
  },
  drawerContent: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    height: 'calc(100% - 87px)',
    padding: '0 116px',
    [theme.breakpoints.down('md')]: {
      padding: '0 100px',
    },
    [theme.breakpoints.down('sm')]: {
      padding: '0 26px',
    },
  },
  artistInfoContainer: {
    display: 'flex',
    width: '100%',
    marginTop: 65,
    [theme.breakpoints.down(700)]: {
      marginTop: 75,
      flexDirection: 'column',
    },
    [theme.breakpoints.down('sm')]: {
      marginTop: 41,
    },
  },
  leftSide: {
    display: 'flex',
    marginLeft: 20,
    [theme.breakpoints.down(700)]: {
      marginLeft: 0,
    },
  },
  rightSide: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    marginLeft: 59,
    [theme.breakpoints.down(700)]: {
      marginLeft: 0,
      marginTop: 42,
    },
  },
  avatarWrapper: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hiden',
    borderRadius: '50%',
    width: 237,
    height: 237,
    background: '#00000080',
    [theme.breakpoints.down('sm')]: {
      width: 169,
      height: 169,
    },
  },
  avatar: {
    borderRadius: '50%',
    width: '100%',
  },
  paginationRoot: {
    margin: '20px 0',
    '& button, & div': {
      color: theme.palette.text.primary,
    },
    '& button.Mui-selected': {
      backgroundColor: 'transparent',
      color: theme.palette.primary.main,
    },
  },
}))

export const sx = {
  artistTitle: {
    marginTop: { xs: 0, sm: '33px' },
  },
  artistText: {
    marginTop: { xs: '61px', md: '32px' },
  },
  albumsContainer: {
    marginTop: { xs: '85px', sm: '44px', md: '119px' },
    flexDirection: 'column',
  },
  albumsText: {
    marginLeft: '20px',
  },
  cardFooterText: {
    marginTop: { xs: '11px', sm: '24px' },
  },
  cardFooterButton: {
    marginTop: '24px',
  },
}
