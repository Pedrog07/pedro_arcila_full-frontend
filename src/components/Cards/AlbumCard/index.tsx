import React from 'react'
import { useStyles } from './styles'
import BaseCard, { BaseCardProps } from '../BaseCard'

type AlbumCardProps = BaseCardProps &
  Partial<{
    publishDate: string
    footer: React.ReactNode
  }>
const AlbumCard = (props: AlbumCardProps) => {
  const classes = useStyles()
  return <BaseCard {...props} />
}

export default AlbumCard
