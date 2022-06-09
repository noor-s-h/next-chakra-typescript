import { ReactNode } from 'react'

export interface ChildrenProps {
  children: ReactNode
}

export type OnClickType = {
  onClick: () => void
}

export interface NavMenuProps {
  label: string
  href?: string
  childrens?: NavMenuProps[]
  onClick?: () => void
  depthLevel?: number
}
