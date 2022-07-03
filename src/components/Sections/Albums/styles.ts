import { Theme } from '@mui/material'
import { makeStyles } from '@mui/styles'

export const useStyles = makeStyles((theme: Theme) => ({
  cardFooterText: {
    '&[class$="-root"]': {
      marginTop: 24,
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
  searchLink: {
    cursor: 'pointer',
  },
  mgt: {
    '&[class$="-root"]': {
      marginTop: 100,
    },
    [theme.breakpoints.down('md')]: {
      '&[class$="-root"]': {
        marginTop: 84,
      },
    },
  },
}))
