import React from 'react'
import { ToastContainer } from 'react-toastify'
import { useSelector } from 'react-redux'
import { useLocation, Navigate } from 'react-router-dom'
import Toolbar from 'components/Toolbar'
import { selectors } from 'store/selectors'
import { getRoutes } from 'utils'
import { useStyles } from './styles'

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  const classes = useStyles()
  const location = useLocation()
  const { isAuthenticated } = useSelector(selectors.authSelector)

  const checkPathname = (
    isAuthenticated: boolean,
    pathname: string,
    children: React.ReactNode
  ) => {
    if (isAuthenticated) {
      if (pathname === '/') {
        return <Navigate to="/search" replace />
      }
    } else {
      if (getRoutes().includes(pathname) && pathname !== '/') {
        return <Navigate to="/" replace />
      }
    }
    return children
  }

  return (
    <div className={classes.rootContainer}>
      <Toolbar isAuthenticated={isAuthenticated} />
      <div className={classes.mainContainer}>
        {checkPathname(isAuthenticated, location.pathname, children)}
      </div>
      <ToastContainer
        toastClassName={classes.toast}
        hideProgressBar
        newestOnTop
        autoClose={2500}
        closeButton={false}
        icon={false}
        theme="colored"
      />
    </div>
  )
}

export default RootLayout
