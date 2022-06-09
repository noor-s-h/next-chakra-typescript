import { Container } from '@chakra-ui/react'

import type { ChildrenProps } from '@/types'
import Header from './Header'

function Layout({ children }: ChildrenProps) {
  return (
    <>
      <Header />
      <Container maxW="5xl" fontWeight="semibold" color="gray.500" pt={4}>
        {children}
      </Container>
    </>
  )
}

export default Layout
