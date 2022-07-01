import React from 'react'
import { Theme } from '@mui/material'
import { makeStyles } from '@mui/styles'
import Toolbar from 'components/Toolbar'

const useStyles = makeStyles((theme: Theme) => ({
  rootContainer: {
    background: theme.palette.primary.dark,
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
}))

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  const classes = useStyles()
  return (
    <div className={classes.rootContainer}>
      <Toolbar />
      {children}
    </div>
  )
}

export default RootLayout
