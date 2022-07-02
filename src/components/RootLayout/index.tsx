import React from 'react'
import Toolbar from 'components/Toolbar'
import { useStyles } from './styles'

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  const classes = useStyles()
  return (
    <div className={classes.rootContainer}>
      <Toolbar />
      <div className={classes.mainContainer}>{children}</div>
    </div>
  )
}

export default RootLayout
