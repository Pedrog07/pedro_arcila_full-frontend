import { Theme } from '@mui/material'
import { makeStyles } from '@mui/styles'

export const useStyles = makeStyles((theme: Theme) => ({
  drawerPaper: {
    '&.MuiPaper-root': {
      height: '100%',
      backgroundColor: theme.palette.primary.dark,
      width: '100%',
      '&::-webkit-scrollbar': {
        width: 7,
      },
      '&::-webkit-scrollbar-track': {
        background: 'none',
      },
      '&::-webkit-scrollbar-thumb': {
        background: theme.palette.primary.light,
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
  artistTitle: {
    '&[class$="-root"]': {
      marginTop: 33,
    },
    [theme.breakpoints.down(700)]: {
      '&[class$="-root"]': {
        marginTop: 0,
      },
    },
  },
  artistText: {
    '&[class$="-root"]': {
      marginTop: 32,
    },
    [theme.breakpoints.down('md')]: {
      '&[class$="-root"]': {
        marginTop: 61,
      },
    },
  },
  albumsContainer: {
    marginTop: 119,
    flexDirection: 'column',
    [theme.breakpoints.down('md')]: {
      '&[class$="-root"]': {
        marginTop: 44,
      },
    },
    [theme.breakpoints.down(700)]: {
      '&[class$="-root"]': {
        marginTop: 85,
      },
    },
  },
  albumsText: {
    '&[class$="-root"]': {
      marginLeft: 20,
    },
  },
  cardFooterText: {
    '&[class$="-root"]': {
      marginTop: 24,
    },
    [theme.breakpoints.down(700)]: {
      '&[class$="-root"]': {
        marginTop: 11,
      },
    },
  },
  cardFooterButton: {
    '&[class$="-root"]': {
      marginTop: 24,
    },
  },
  paginationRoot: {
    margin: '20px 0',
    '& button, & div': {
      color: '#fff',
    },
    '& button.Mui-selected': {
      backgroundColor: 'transparent',
      color: theme.palette.primary.main,
    },
  },
}))
