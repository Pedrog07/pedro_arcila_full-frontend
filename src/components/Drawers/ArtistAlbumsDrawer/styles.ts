import { Theme } from '@mui/material'
import { makeStyles } from '@mui/styles'

export const useStyles = makeStyles((theme: Theme) => ({
  drawerPaper: {
    '&.MuiPaper-root': {
      height: '100%',
      backgroundColor: theme.palette.primary.dark,
      width: '100%',
    },
  },
  drawerContent: {
    display: 'flex',
    width: '100%',
    height: 'calc(100% - 87px)',
  },
  artistInfoContainer: {
    marginTop: 65,
  },
  avatar: {
    borderRadius: '50%',
    width: '100%',
    maxWidth: 237,
    maxHeight: 237,
    [theme.breakpoints.down('sm')]: {
      maxWidth: 169,
      maxHeight: 169,
    },
  },
}))
