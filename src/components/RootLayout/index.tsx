import React, { useLayoutEffect } from 'react'
import { ToastContainer } from 'react-toastify'
import { useSelector } from 'react-redux'
import { useLocation, useNavigate } from 'react-router-dom'
import Toolbar from 'components/Toolbar'
import { selectors } from 'store/selectors'
import { getRoutes } from 'utils'
import { useStyles } from './styles'

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  const classes = useStyles()
  const navigate = useNavigate()
  const location = useLocation()
  const { isAuthenticated } = useSelector(selectors.authSelector)

  useLayoutEffect(() => {
    if (isAuthenticated) {
      location.pathname === '/' && navigate('/search')
    } else {
      getRoutes().includes(location.pathname) &&
        location.pathname !== '/' &&
        navigate('/')
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname])
  return (
    <div className={classes.rootContainer}>
      <Toolbar isAuthenticated={isAuthenticated} />
      <div className={classes.mainContainer}>{children}</div>
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
