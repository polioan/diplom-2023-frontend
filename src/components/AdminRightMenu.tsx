import {
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from '@chakra-ui/react'
import { GiHamburgerMenu as HamburgerIcon } from 'react-icons/gi'
import { query } from '../lib/trpc'
import { useNavigate } from 'react-router-dom'
import type { Pathname } from '../pages'
import { useCsrfToken } from '../hooks'

export function AdminRightMenu() {
  const navigate = useNavigate()

  const [csrfToken, setCsrfToken] = useCsrfToken()

  const logout = query.admin.logout.useMutation({
    retry: 10,
    onSuccess: () => {
      setCsrfToken(undefined)
      navigate('/_/admin/login' satisfies Pathname)
    },
  })

  async function onLogout() {
    await logout.mutateAsync({ csrfToken })
  }

  return (
    <Menu>
      <MenuButton
        bg='white'
        as={IconButton}
        title='Меню'
        aria-label='Меню'
        icon={<HamburgerIcon />}
      />
      <MenuList>
        <MenuItem onClick={onLogout}>Выйти</MenuItem>
      </MenuList>
    </Menu>
  )
}
