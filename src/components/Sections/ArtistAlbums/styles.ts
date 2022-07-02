import { Theme } from '@mui/material'
import { makeStyles } from '@mui/styles'

export const useStyles = makeStyles((theme: Theme) => ({
  artistAlbumsContainer: {
    '&[class$="-root"]': {
      margin: '76px 0 29px',
    },
  },
}))
