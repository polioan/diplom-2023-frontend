import { createTRPCReact } from '@trpc/react-query'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import superjson from 'superjson'
import { httpBatchLink, loggerLink } from '@trpc/client'
import { useState } from 'react'
import type { Pathname } from '../../pages'
import type { AppRouter } from './trpc-codegen'

export const query = createTRPCReact<AppRouter>()

function getBaseUrl() {
  return import.meta.env.VITE_BASE_URL as string
}

export function TRPCQueryProvider({
  children,
}: {
  children?: React.ReactNode
}) {
  const [queryClient] = useState(() => new QueryClient({}))
  const [trpcClient] = useState(() =>
    query.createClient({
      transformer: superjson,
      links: [
        loggerLink({
          enabled: opts => {
            if (opts.direction === 'down' && opts.result instanceof Error) {
              if (opts.result.data?.meta.adminUnauthorized) {
                window.localStorage.removeItem('csrfToken')
                window.location.pathname = '/_/admin/login' satisfies Pathname
                return false
              }
              return true
            }
            return false
          },
        }),
        httpBatchLink({
          url: `${getBaseUrl()}/api/trpc`,
          headers: () => {
            if (import.meta.env.DEV) {
              return {
                'x-dev-token': `${window.localStorage.getItem('dev-token')}`,
              }
            }
            return {
              'x-client-trpc': 'true',
            }
          },
        }),
      ],
    })
  )

  return (
    <query.Provider client={trpcClient} queryClient={queryClient}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </query.Provider>
  )
}
