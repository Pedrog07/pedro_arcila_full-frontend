import React from 'react'
import { Typography } from '@mui/material'
import { useStyles, sx } from './styles'

export type BaseCardProps = Partial<{
  imgUrl: string
  name: string
  highlightOnHover?: boolean
  footer?: React.ReactNode
  onClick?: (e: any) => void
}>

const BaseCard = ({
  imgUrl,
  name,
  highlightOnHover,
  footer,
  onClick,
}: BaseCardProps) => {
  const classes = useStyles({ highlightOnHover })
  return (
    <div onClick={onClick} className={classes.cardContainer}>
      <div className={classes.imageWrapper}>
        {imgUrl && (
          <img className={classes.cardImage} alt="card" src={imgUrl} />
        )}
      </div>
      <Typography variant="h2" sx={sx.cardTitle}>
        {name}
      </Typography>
      {footer}
    </div>
  )
}

export default BaseCard
