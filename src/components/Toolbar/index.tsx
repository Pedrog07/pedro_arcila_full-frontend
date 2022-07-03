import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { SvgIcon, Typography, useMediaQuery } from '@mui/material'
import { CloseRounded } from '@mui/icons-material'
import clsx from 'clsx'
import theme from 'theme'
import { generalIcons } from 'utils/icons'
import { useDispatch } from 'react-redux'
import { actions } from 'store/actions'
import { useStyles, sx } from './styles'

const Toolbar = ({
  isAuthenticated,
  onClose,
}: {
  isAuthenticated: boolean
  onClose?: (event?: any, reason?: any) => void
}) => {
  const classes = useStyles({ hasCloseIcon: !!onClose })
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
      {onClose && (
        <span
          onClick={() => {
            onClose()
          }}
          className={classes.toolbarControl}
        >
          <CloseRounded sx={sx.closeIcon} />
        </span>
      )}
      {isAuthenticated && (
        <div className={classes.toolbarControlsContainer}>
          <Typography
            className={clsx(classes.toolbarControl, classes.mgl)}
            variant="body2"
            color={location.pathname === '/search' ? 'primary' : undefined}
            onClick={() => {
              navigate('/search')
            }}
          >
            Buscar
          </Typography>
          <Typography
            className={clsx(classes.toolbarControl, classes.mgl)}
            variant="body2"
            color={location.pathname === '/my-albums' ? 'primary' : undefined}
            onClick={() => {
              navigate('/my-albums')
            }}
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
                sx={sx.logoutIcon}
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
                  sx={sx.sunIcon}
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
