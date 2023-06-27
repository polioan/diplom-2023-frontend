import { AnimatePresence, motion } from 'framer-motion'
import { lazy, Suspense } from 'react'
import {
  createBrowserRouter,
  RouterProvider as InternalRouterProvider,
  Link,
  useLocation,
  type LinkProps,
} from 'react-router-dom'
import { useCsrfToken } from '../hooks'

const Error404 = lazy(() => import('./Error404'))
const Root = lazy(() => import('./Root'))
const About = lazy(() => import('./About'))
const Contacts = lazy(() => import('./Contacts'))
const Faq = lazy(() => import('./Faq'))
const Register = lazy(() => import('./Register'))
const AdminLogin = lazy(() => import('./AdminLogin'))
const AdminRoot = lazy(() => import('./AdminRoot'))
const AdminFeedback = lazy(() => import('./AdminFeedback'))
const AdminApplications = lazy(() => import('./AdminApplications'))

export type Paths =
  | ''
  | 'about'
  | 'register'
  | 'faq'
  | 'contacts'
  | '_/admin/login'
  | '_/admin'
  | '_/admin/feedback'
  | '_/admin/applications'

export type Pathname = `/${Paths}`

export type Path =
  | Pathname
  | Partial<{
      pathname: Pathname
      search: string
      hash: string
    }>

export const TypedLink = Link as React.ForwardRefExoticComponent<
  Omit<LinkProps, 'to'> & { to: Path } & React.RefAttributes<HTMLAnchorElement>
>

const animationEnd = {
  transform: 'translateY(0px)',
  opacity: 1,
} satisfies React.ComponentProps<typeof motion.div>['animate']

const animationStart = window.matchMedia('(prefers-reduced-motion)').matches
  ? animationEnd
  : ({
      transform: 'translateY(-56px)',
      opacity: 0,
    } satisfies React.ComponentProps<typeof motion.div>['initial'])

function LinkBox({
  children,
  isAdmin,
}: {
  children: React.ReactNode
  isAdmin?: boolean | undefined
}) {
  const location = useLocation()
  const [csrfToken] = useCsrfToken()

  return (
    <AnimatePresence mode='wait' initial={false}>
      <motion.div
        id='root-box'
        initial={animationStart}
        animate={animationEnd}
        exit={animationStart}
        transition={{ duration: 0.15 }}
        key={location.pathname}
      >
        {isAdmin && typeof csrfToken !== 'string' ? <Error404 /> : children}
      </motion.div>
    </AnimatePresence>
  )
}

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <Suspense>
        <LinkBox>
          <Root />
        </LinkBox>
      </Suspense>
    ),
  },
  {
    path: '/about',
    element: (
      <Suspense>
        <LinkBox>
          <About />
        </LinkBox>
      </Suspense>
    ),
  },
  {
    path: '/faq',
    element: (
      <Suspense>
        <LinkBox>
          <Faq />
        </LinkBox>
      </Suspense>
    ),
  },
  {
    path: '/contacts',
    element: (
      <Suspense>
        <LinkBox>
          <Contacts />
        </LinkBox>
      </Suspense>
    ),
  },
  {
    path: '/register',
    element: (
      <Suspense>
        <LinkBox>
          <Register />
        </LinkBox>
      </Suspense>
    ),
  },
  {
    path: '/_/admin/login',
    element: (
      <Suspense>
        <LinkBox>
          <AdminLogin />
        </LinkBox>
      </Suspense>
    ),
  },
  {
    path: '/_/admin',
    element: (
      <Suspense>
        <LinkBox isAdmin>
          <AdminRoot />
        </LinkBox>
      </Suspense>
    ),
  },
  {
    path: '/_/admin/feedback',
    element: (
      <Suspense>
        <LinkBox isAdmin>
          <AdminFeedback />
        </LinkBox>
      </Suspense>
    ),
  },
  {
    path: '/_/admin/applications',
    element: (
      <Suspense>
        <LinkBox isAdmin>
          <AdminApplications />
        </LinkBox>
      </Suspense>
    ),
  },
  {
    path: '*',
    element: (
      <Suspense>
        <LinkBox>
          <Error404 />
        </LinkBox>
      </Suspense>
    ),
  },
] satisfies { path: Path | '*'; element: React.ReactNode }[])

export function RouterProvider() {
  return <InternalRouterProvider router={router} />
}
