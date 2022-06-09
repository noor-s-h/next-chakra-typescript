import { ReactNode, PropsWithChildren } from 'react'
import { LinkProps as ChakraLinkProps } from '@chakra-ui/react'

export interface ChildrenProps {
  children: ReactNode
}

export type OnClickType = {
  onClick: () => void
}

export type LinkProps = ChakraLinkProps &
  PropsWithChildren<{
    href: string
  }>

export interface NavMenuProps {
  label: string
  href?: string
  childrens?: NavMenuProps[]
  onClick?: () => void
  depthLevel?: number
}
