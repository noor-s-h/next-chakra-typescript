import {
  Button,
  List,
  ListItem,
  Collapse,
  Icon,
  useDisclosure,
} from '@chakra-ui/react'

import { ChevronDownIcon } from '@chakra-ui/icons'

import { NavMenuProps } from '@/types'
import NavLink from './NavLink'

export default function MobileMenu({
  label,
  href,
  childrens,
  onClick,
}: NavMenuProps) {
  const { isOpen, onToggle } = useDisclosure()

  return (
    <ListItem>
      {childrens ? (
        <>
          <Button
            w="100%"
            py=".5rem"
            my=".5rem"
            variant="link"
            onClick={onToggle}
          >
            {label}
            <Icon
              as={ChevronDownIcon}
              transition="all .25s ease-in-out"
              transform={isOpen ? 'rotate(180deg)' : ''}
              w={6}
              h={6}
              ml="auto"
            />
          </Button>
          <Collapse in={isOpen} unmountOnExit>
            <List pl="1rem" borderLeft="1px" borderColor="gray.200">
              {childrens.map((data) => (
                <MobileMenu key={data.label} {...data} onClick={onClick} />
              ))}
            </List>
          </Collapse>
        </>
      ) : (
        <NavLink href={href ?? '#'} onClick={onClick} my=".5rem">
          {label}
        </NavLink>
      )}
    </ListItem>
  )
}
