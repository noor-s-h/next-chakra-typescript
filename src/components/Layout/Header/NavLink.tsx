import NextLink from 'next/link'
import { Link, LinkProps } from '@chakra-ui/react'

export default function NavLink({ children, href, ...rest }: LinkProps) {
  return (
    <NextLink href={href ?? '#'} passHref>
      <Link display="block" px={{ base: '0', md: '1rem' }} py=".5rem" {...rest}>
        {children}
      </Link>
    </NextLink>
  )
}
