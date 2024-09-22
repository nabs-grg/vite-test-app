/* eslint-disable */
import { useMemo } from 'react'
import Axios from 'axios'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

import { ClientContext } from '../clientContext/ClientContext'

import { responseFailureInterceptor, responseSuccessInterceptor } from './interceptors/responseInterceptors'
import { ClientProviderProps } from './ClientContextController.types'
import { requestTokenInterceptor } from './interceptors/requestInterceptors'
// import { useLogger } from '@percent/hosted-donation-gateway/hooks/useLogger/useLogger'
// import { useLogger } from '@/hooks/useLogger/useLogger'
import { useToken } from '@/hooks/useToken/useToken'

const axios = Axios.create({
  baseURL: 'https://staging-api.poweredbypercent.com/v1',
  headers: {
    'Content-Type': 'application/json'
  }
})

const queryClient = new QueryClient({})

export const ClientContextController = ({ children }: ClientProviderProps) => {
  // const { logError } = useLogger()
  const { sessionToken } = useToken()

  useMemo(() => {
    axios.interceptors.request.use(axiosRequestConfig => requestTokenInterceptor(axiosRequestConfig, sessionToken))
    axios.interceptors.response.use(responseSuccessInterceptor, responseFailureInterceptor)
  }, [sessionToken])

  return (
    <ClientContext.Provider value={axios}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </ClientContext.Provider>
  )
}
