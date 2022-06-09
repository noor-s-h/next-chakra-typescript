import { OnClickType } from '@/types'
import NavLink from './NavLink'

export default function Logo({ onClick }: OnClickType) {
  return (
    <NavLink href="/" onClick={onClick} px="0">
      Logo
    </NavLink>
  )
}
