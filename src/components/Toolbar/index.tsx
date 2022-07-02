import React from 'react'
import { SvgIcon, Typography, useMediaQuery } from '@mui/material'
import { useSelector } from 'react-redux'
import { selectors } from 'store/selectors'
import clsx from 'clsx'
import theme from 'theme'
import { generalIcons } from 'utils/icons'
import { useStyles } from './styles'

const Toolbar = () => {
  const classes = useStyles()
  const isTablet = useMediaQuery(theme.breakpoints.down('md'))
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'))
  const { isAuthenticated } = useSelector(selectors.authSelector)

  return (
    <div className={classes.toolbarContainer}>
      {isAuthenticated && (
        <div className={classes.toolbarControlsContainer}>
          <Typography
            className={clsx(classes.toolbarControl, classes.mgl)}
            variant="body2"
            color="primary"
          >
            Buscar
          </Typography>
          <Typography
            className={clsx(classes.toolbarControl, classes.mgl)}
            variant="body2"
          >
            My albums
          </Typography>
          <div className={clsx(classes.separator, classes.mgl)} />
          {isMobile ? (
            <span className={clsx(classes.toolbarControl, classes.mgl)}>
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
