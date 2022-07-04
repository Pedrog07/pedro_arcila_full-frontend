import { Theme } from '@mui/material'
import { makeStyles } from '@mui/styles'

export const useStyles = makeStyles<Theme, { hasCloseIcon?: boolean }>(
  (theme: Theme) => ({
    toolbarContainer: ({ hasCloseIcon }) => ({
      height: 87,
      width: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: hasCloseIcon ? 'space-between' : 'flex-end',
    }),
    toolbarControlsContainer: {
      display: 'flex',
      alignItems: 'center',
      height: '100%',
      paddingRight: 80,
      [theme.breakpoints.down('md')]: {
        paddingRight: 42,
      },
    },
    toolbarControl: {
      cursor: 'pointer',
      display: 'flex',
    },
    mgl: {
      marginLeft: 42,
      [theme.breakpoints.down('sm')]: {
        marginLeft: 12,
      },
    },
    separator: {
      borderWidth: '0 0 0 1px',
      borderStyle: 'solid',
      borderColor: theme.palette.text.primary,
      height: 25,
    },
  })
)

export const sx = {
  mgl: {
    marginLeft: { xs: '12px', sm: '42px' },
  },
  sunIcon: (theme: Theme) => ({
    width: 24,
    height: 24,
    color: theme.palette.text.primary,
  }),
  logoutIcon: (theme: Theme) => ({
    width: 24,
    height: 19,
    color: theme.palette.text.primary,
  }),
  closeIcon: (theme: Theme) => ({
    width: 30,
    height: 30,
    color: theme.palette.text.primary,
    marginLeft: '30px',
  }),
}
