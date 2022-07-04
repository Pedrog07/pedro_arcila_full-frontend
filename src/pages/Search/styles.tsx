import { Theme } from '@mui/material'
import { makeStyles } from '@mui/styles'

export const useStyles = makeStyles((theme: Theme) => ({
  searchContainer: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    height: 'fit-content',
    alignItems: 'center',
    padding: '0 120px 30px',
    [theme.breakpoints.down('md')]: {
      padding: '0 100px 30px',
    },
    [theme.breakpoints.down('sm')]: {
      padding: '0 26px 30px',
    },
  },
}))

export const sx = {
  title: {
    maxWidth: { xs: 329, sm: 458 },
    textAlign: { xs: 'left', sm: 'center' },
    marginTop: { xs: '45px', sm: '106px' },
  },
  bodyText: {
    maxWidth: { xs: 329, sm: 458 },
    textAlign: { xs: 'left', sm: 'center' },
    marginTop: '24px',
  },
  searchInput: {
    maxWidth: 664,
    marginTop: { xs: '34px', sm: '95px', md: '34px' },
  },
}
