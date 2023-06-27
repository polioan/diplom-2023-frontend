import {
  Flex,
  Link,
  Stack,
  Icon,
  type FlexProps,
  Text,
  Box,
} from '@chakra-ui/react'
import { TypedLink, type Path } from '../pages'
import { BsArrowLeftCircleFill as ArrowIcon } from 'react-icons/bs'

function NavLink({ children, to }: { children?: React.ReactNode; to: Path }) {
  return (
    <Link
      as={TypedLink}
      to={to}
      textTransform='uppercase'
      fontWeight='medium'
      color='white'
    >
      {children}
    </Link>
  )
}

function HeaderText({ children }: { children?: React.ReactNode }) {
  return (
    <Text textTransform='uppercase' fontWeight='medium' color='white'>
      {children}
    </Text>
  )
}

const prepared = {
  root: {
    to: '/',
    element: 'На главную',
  },
  about: {
    to: '/about',
    element: 'О мероприятии',
  },
  faq: {
    to: '/faq',
    element: (
      <abbr
        title='Часто задаваемые вопросы'
        aria-label='FAQ - часто задаваемые вопросы'
        style={{ textDecoration: 'none' }}
      >
        FAQ
      </abbr>
    ),
  },
  contacts: {
    to: '/contacts',
    element: 'Контакты',
  },
  register: {
    to: '/register',
    element: 'Регистрация',
  },
} as const satisfies Record<string, { to: Path; element: React.ReactNode }>

type Prepared = keyof typeof prepared

type MainHeaderLink =
  | {
      to: Path
      children?: React.ReactNode
      key?: React.Key | undefined
    }
  | Prepared

function isPrepared(payload: MainHeaderLink): payload is Prepared {
  return typeof payload === 'string' && prepared[payload] !== undefined
}

interface MainHeaderProps extends FlexProps {
  links?: MainHeaderLink[]
  backToButton?: boolean | Path | undefined
  rightMenu?: React.ReactNode
}

export function MainHeader({
  children,
  links,
  backToButton,
  rightMenu,
  ...otherProps
}: MainHeaderProps) {
  return (
    <Flex
      as='header'
      align='center'
      justify='center'
      p='4'
      bg='purple.700'
      position='relative'
      h='var(--header-height)'
      {...otherProps}
    >
      {backToButton ? (
        <Link
          as={TypedLink}
          to={typeof backToButton === 'boolean' ? '/' : backToButton}
          aria-label='Назад'
          title='Назад'
          position='absolute'
          left='4'
          top='50%'
          transform='translateY(-50%)'
          _hover={{
            opacity: 0.8,
          }}
          display='flex'
          alignItems='center'
          justifyContent='center'
        >
          <Icon as={ArrowIcon} color='white' aria-hidden />
        </Link>
      ) : null}
      {children === undefined ? (
        <Stack as='nav' direction='row' spacing='6'>
          {links?.map(link => {
            if (isPrepared(link)) {
              const toRender = prepared[link]
              return (
                <NavLink key={toRender.to} to={toRender.to}>
                  {toRender.element}
                </NavLink>
              )
            }
            return (
              <NavLink
                key={
                  link.key
                    ? link.key
                    : typeof link.to === 'string'
                    ? link.to
                    : link.to.pathname
                }
                to={link.to}
              >
                {link.children}
              </NavLink>
            )
          })}
        </Stack>
      ) : (
        <HeaderText>{children}</HeaderText>
      )}
      {rightMenu ? (
        <Box position='absolute' right='4'>
          {rightMenu}
        </Box>
      ) : null}
    </Flex>
  )
}
