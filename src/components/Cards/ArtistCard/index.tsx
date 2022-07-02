import React from 'react'
import { useStyles } from './styles'
import BaseCard, { BaseCardProps } from '../BaseCard'

type ArtistCardProps = BaseCardProps &
  Partial<{
    followers: number
    footer: React.ReactNode
  }>
const ArtistCard = (props: ArtistCardProps) => {
  const classes = useStyles()
  return <BaseCard {...props} />
}

export default ArtistCard
