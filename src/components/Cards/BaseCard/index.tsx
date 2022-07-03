import React from 'react'
import { useStyles } from './styles'
import { Typography } from '@mui/material'

export type BaseCardProps = Partial<{
  imgUrl: string
  name: string
  highlightOnHover?: boolean
  footer?: React.ReactNode
}>

const BaseCard = ({
  imgUrl,
  name,
  highlightOnHover,
  footer,
}: BaseCardProps) => {
  const classes = useStyles({ highlightOnHover })
  return (
    <div className={classes.cardContainer}>
      <div className={classes.imageWrapper}>
        {imgUrl && (
          <img className={classes.cardImage} alt="card" src={imgUrl} />
        )}
      </div>
      <Typography variant="h2" className={classes.cardTitle}>
        {name}
      </Typography>
      {footer}
    </div>
  )
}

export default BaseCard
