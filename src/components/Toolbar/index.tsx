import React from 'react'
import { SvgIcon, Theme, Typography, useMediaQuery } from '@mui/material'
import { makeStyles } from '@mui/styles'
import { useSelector } from 'react-redux'
import { selectors } from 'store/selectors'
import clsx from 'clsx'
import theme from 'theme'
import { generalIcons } from 'utils/icons'

const useStyles = makeStyles((theme: Theme) => ({
  toolbarContainer: {
    height: 87,
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  toolbarControlsContainer: {
    display: 'flex',
    alignItems: 'center',
    height: '100%',
    paddingRight: 80,
    [theme.breakpoints.down('md')]: {
      paddingRight: 42,
    },
  },
  toolbarControl: {
    cursor: 'pointer',
    display: 'flex',
  },
  mgl: {
    '&, &.self': {
      marginLeft: 42,
    },
    [theme.breakpoints.down('sm')]: {
      '&, &.self': {
        marginLeft: 12,
      },
    },
  },
  separator: {
    borderWidth: '0 0 0 1px',
    borderStyle: 'solid',
    borderColor: '#FFF',
    height: 25,
  },
  sunIcon: {
    width: 24,
    height: 24,
    color: '#FFF',
  },
  logoutIcon: {
    width: 24,
    height: 19,
    color: '#FFF',
  },
}))

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
            className={clsx('self', classes.toolbarControl, classes.mgl)}
            variant="body2"
            color="primary"
          >
            Buscar
          </Typography>
          <Typography
            className={clsx('self', classes.toolbarControl, classes.mgl)}
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
              className={clsx('self', classes.toolbarControl, classes.mgl)}
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
