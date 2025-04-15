import React from 'react'
import * as PhosphorIcons from '@phosphor-icons/react'
import type { IconProps } from './Icon.types'

export type IconName = keyof typeof PhosphorIcons

export function Icon({ icon, size = 24 }: IconProps) {
  if (typeof icon === 'string') {
    const IconComponent = (PhosphorIcons[icon as IconName] as React.ComponentType<{ size: number }>)
    return IconComponent ? <IconComponent size={size} /> : null
  }
  
  return <>{icon}</>
} 