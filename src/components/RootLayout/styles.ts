import { Theme } from '@mui/material'
import { makeStyles } from '@mui/styles'

export const useStyles = makeStyles((theme: Theme) => ({
  rootContainer: {
    background: theme.palette.primary.dark,
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    overflowY: 'visible',
    '&::-webkit-scrollbar': {
      width: 3,
    },
    '&::-webkit-scrollbar-track': {
      background: 'none',
    },
    '&::-webkit-scrollbar-thumb': {
      background: 'blue',
      borderRadius: 5,
    },
    '&::-webkit-scrollbar-thumb:hover': {
      background: 'yellow',
    },
  },
  mainContainer: {
    display: 'flex',
    width: '100%',
    maxHeight: 'calc(100% - 87px)',
  },
}))
