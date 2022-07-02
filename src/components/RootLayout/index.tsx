import React, { useEffect } from 'react'
import { ToastContainer } from 'react-toastify'
import { useSelector } from 'react-redux'
import { useLocation, useNavigate } from 'react-router-dom'
import Toolbar from 'components/Toolbar'
import { selectors } from 'store/selectors'
import { useStyles } from './styles'

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  const classes = useStyles()
  const navigate = useNavigate()
  const location = useLocation()
  const { isAuthenticated } = useSelector(selectors.authSelector)

  useEffect(() => {
    if (isAuthenticated) {
      location.pathname === '/' && navigate('/search')
    } else {
      location.pathname !== '/' && navigate('/')
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return (
    <div className={classes.rootContainer}>
      <Toolbar isAuthenticated={isAuthenticated} />
      <div className={classes.mainContainer}>{children}</div>
      <ToastContainer
        hideProgressBar
        newestOnTop
        autoClose={10000}
        closeButton={false}
        icon={false}
        theme="colored"
      />
    </div>
  )
}

export default RootLayout
