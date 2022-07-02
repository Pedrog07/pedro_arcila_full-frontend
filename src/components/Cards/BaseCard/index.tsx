import React from 'react'
import { useStyles } from './styles'
import { Typography } from '@mui/material'

export type BaseCardProps = Partial<{
  imgUrl: string
  name: string
  highlightOnHover?: boolean
}>

const BaseCard = ({ imgUrl, name, highlightOnHover }: BaseCardProps) => {
  const classes = useStyles({ highlightOnHover })
  return (
    <div className={classes.cardContainer}>
      <img alt="card" src={imgUrl} />
      <Typography variant="h2" className={classes.cardTitle}>
        {name}
      </Typography>
    </div>
  )
}

export default BaseCard
