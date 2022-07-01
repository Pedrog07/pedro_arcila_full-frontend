import React from 'react'
import { Theme } from '@mui/material'
import { makeStyles } from '@mui/styles'

const useStyles = makeStyles((theme: Theme) => ({
  rootContainer: {
    background: theme.palette.primary.dark,
    width: '100%',
  },
}))
const RootLayout = ({ children }: { children: React.ReactNode }) => {
  const classes = useStyles()
  return <div className={classes.rootContainer}>{children}</div>
}

export default RootLayout
