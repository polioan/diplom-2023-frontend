import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from './pages'
import { ChakraProvider } from '@chakra-ui/react'
import { TRPCQueryProvider } from './lib/trpc'
import './styles/main.css'

ReactDOM.createRoot(document.querySelector('#root')!).render(
  <React.StrictMode>
    <TRPCQueryProvider>
      <ChakraProvider>
        <RouterProvider />
      </ChakraProvider>
    </TRPCQueryProvider>
  </React.StrictMode>
)
