import { ReactNode } from 'react'
import type { IconName } from './Icon'

export type IconProps = {
  icon: ReactNode | IconName
  size?: number
} 