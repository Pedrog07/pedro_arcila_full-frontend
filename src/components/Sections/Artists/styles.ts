import { Theme } from '@mui/material'
import { makeStyles } from '@mui/styles'

export const useStyles = makeStyles((theme: Theme) => ({
  artistsContainer: {
    '&[class$="-root"]': {
      margin: '76px 0 29px',
    },
  },
  cardFooterText: {
    '&[class$="-root"]': {
      marginTop: 24,
    },
  },
  paginationRoot: {
    marginTop: 20,
    '& button, & div': {
      color: '#fff',
    },
    '& button.Mui-selected': {
      backgroundColor: 'transparent',
      color: theme.palette.primary.main,
    },
  },
}))
