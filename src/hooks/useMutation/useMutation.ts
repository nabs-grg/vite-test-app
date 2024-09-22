import {
  UseMutationResult,
  useMutation as useRQMutation,
  UseMutationOptions,
  MutationFunction,
  MutationKey
} from '@tanstack/react-query'
import { AxiosRequestConfig } from 'axios'
import { useCallback } from 'react'

import { MutationFn } from './useMutation.types'
import { useClient } from '../useClient/useClient'

export const useMutation = <TData = unknown, TError = unknown, TParams = unknown, TContext = unknown>(
  mutationKey: MutationKey,
  mutation: MutationFn<TParams, TData, TError>,
  options?: UseMutationOptions<TData, TError, TParams, TContext>,
  config: { withCredentials?: boolean } = {}
): UseMutationResult<TData, TError, TParams, TContext> => {
  const client = useClient()

  const mutationFn: MutationFunction<TData, TParams> = useCallback(
    async variables => {
      const { endpoint, params, method } = mutation(variables)

      const axiosConfig: AxiosRequestConfig = {
        url: endpoint,
        data: params ? JSON.stringify(params) : undefined,
        method: method || 'POST',
        ...config
      }

      return client.request(axiosConfig)
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [client, mutation]
  )

  return useRQMutation<TData, TError, TParams, TContext>(mutationKey, mutationFn, options)
}
