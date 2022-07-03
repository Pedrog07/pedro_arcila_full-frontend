import { Theme } from '@mui/material'
import { makeStyles } from '@mui/styles'

export const useStyles = makeStyles((theme: Theme) => ({
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
  albumCardWrapper: {
    [theme.breakpoints.up('sm')]: {
      display: 'flex',
      justifyContent: 'center',
    },
  },
}))

export const sx = {
  cardFooterText: {
    marginTop: '24px',
  },
  cardFooterButton: {
    marginTop: '24px',
    maxWidth: 184,
  },
  mgt: {
    marginTop: { xs: '84px', md: '100px' },
  },
}
