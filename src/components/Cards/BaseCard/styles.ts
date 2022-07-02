import { Theme } from '@mui/material'
import { makeStyles } from '@mui/styles'

export const useStyles = makeStyles<Theme, { highlightOnHover?: boolean }>(
  (theme: Theme) => ({
    cardContainer: ({ highlightOnHover }) => ({
      cursor: 'pointer',
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
    cardTitle: {
      textAlign: 'left',
      '&[class$="-root"]': {
        marginTop: 24,
      },
    },
  })
)
