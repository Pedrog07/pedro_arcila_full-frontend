import { Theme } from '@mui/material'
import { makeStyles } from '@mui/styles'

export const useStyles = makeStyles((theme: Theme) => ({
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

export const sx = {
  artistsContainer: {
    margin: { xs: '45px 0 15px', sm: '54px 0 10px 40px', lg: '76px 0 29px' },
  },
  cardFooterText: {
    marginTop: { xs: '11px', sm: '24px' },
  },
}
