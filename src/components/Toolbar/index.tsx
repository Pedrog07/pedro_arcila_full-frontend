import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { SvgIcon, Typography, useMediaQuery } from '@mui/material'
import clsx from 'clsx'
import theme from 'theme'
import { generalIcons } from 'utils/icons'
import { useStyles } from './styles'
import { useDispatch } from 'react-redux'
import { actions } from 'store/actions'

const Toolbar = ({ isAuthenticated }: { isAuthenticated: boolean }) => {
  const classes = useStyles()
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const location = useLocation()
  const isTablet = useMediaQuery(theme.breakpoints.down('md'))
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'))

  const handleLogout = () => {
    dispatch(actions.logout())
    navigate('/')
  }
  return (
    <div className={classes.toolbarContainer}>
      {isAuthenticated && (
        <div className={classes.toolbarControlsContainer}>
          <Typography
            className={clsx(classes.toolbarControl, classes.mgl)}
            variant="body2"
            color={location.pathname === '/search' ? 'primary' : undefined}
          >
            Buscar
          </Typography>
          <Typography
            className={clsx(classes.toolbarControl, classes.mgl)}
            variant="body2"
            color={location.pathname === '/my-albums' ? 'primary' : undefined}
          >
            Mis albumes
          </Typography>
          <div className={clsx(classes.separator, classes.mgl)} />
          {isMobile ? (
            <span
              onClick={handleLogout}
              className={clsx(classes.toolbarControl, classes.mgl)}
            >
              <SvgIcon
                className={classes.logoutIcon}
                width="24"
                height="19"
                viewBox="0 0 24 19"
              >
                {generalIcons.logout}
              </SvgIcon>
            </span>
          ) : (
            <Typography
              className={clsx(classes.toolbarControl, classes.mgl)}
              variant="body2"
              component="span"
              onClick={handleLogout}
            >
              Cerrar sesión
            </Typography>
          )}
          {isTablet && (
            <>
              <div className={clsx(classes.separator, classes.mgl)} />
              <span className={clsx(classes.toolbarControl, classes.mgl)}>
                <SvgIcon
                  className={classes.sunIcon}
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  {generalIcons.sun}
                </SvgIcon>
              </span>
            </>
          )}
        </div>
      )}
    </div>
  )
}

export default Toolbar
