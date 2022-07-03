import { Theme } from '@mui/material'
import { makeStyles } from '@mui/styles'

export const useStyles = makeStyles<Theme, { highlightOnHover?: boolean }>(
  (theme: Theme) => ({
    cardContainer: ({ highlightOnHover }) => ({
      cursor: highlightOnHover ? 'pointer' : undefined,
      display: 'flex',
      flexDirection: 'column',
      width: '100%',
      maxWidth: 320,
      borderRadius: 24,
      padding: 24,
      '&:hover': highlightOnHover
        ? {
            background: theme.palette.primary.main,
            '& > h2, & > p': {
              color: '#000',
            },
          }
        : undefined,
    }),
    cardImage: {
      width: '100%',
      borderRadius: 24,
    },
    imageWrapper: {
      display: 'flex',
      width: '100%',
      height: 241,
      borderRadius: 24,
      background: '#00000080',
      overflow: 'hidden',
      justifyContent: 'center',
      alignItems: 'center',
    },
  })
)

export const sx = {
  cardTitle: {
    textAlign: 'left',
    marginTop: '24px',
  },
}
