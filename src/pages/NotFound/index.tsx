import React from 'react'
import { Typography } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { useStyles } from './styles'

const NotFound = () => {
  const classes = useStyles()
  const navigate = useNavigate()
  return (
    <div className={classes.notFoundContainer}>
      <Typography variant="h1" color="primary">
        404
      </Typography>
      <Typography variant="h1">Not found!</Typography>
      <Typography
        sx={{ marginTop: '30px', textAlign: 'center' }}
        variant="body1"
      >
        Oops!, parece que la pagina que tratas de acceder no existe. Para ir a
        la pagina principal haz click{' '}
        <Typography
          onClick={() => {
            navigate('/')
          }}
          sx={{ cursor: 'pointer' }}
          variant="body1"
          color="primary"
          component="span"
        >
          aqui
        </Typography>
        .
      </Typography>
    </div>
  )
}

export default NotFound
