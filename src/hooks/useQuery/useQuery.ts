import { QueryKey, useQuery as useReactQuery, UseQueryResult } from '@tanstack/react-query'

import { QueryFn, UseQueryOptions } from './useQuery.types'
import { useClient } from '../useClient/useClient'
import { shouldRetryQuery } from '@/helpers/shouldRetryQuery'

export const useQuery = <
  TQueryKey extends QueryKey = unknown[],
  TParams = unknown,
  TError = unknown,
  TResponse = TParams
>(
  queryKey: TQueryKey,
  query: QueryFn<TQueryKey, TResponse>,
  options?: UseQueryOptions<TQueryKey[1], TParams, TError, TResponse>
): UseQueryResult<TResponse, TError> => {
  const client = useClient()

  return useReactQuery<TQueryKey[1], TError, TResponse, TQueryKey>(
    queryKey,
    queryFn => query(client, queryFn.queryKey),
    {
      enabled: options?.enabled,
      refetchOnWindowFocus: !!options?.refetchOnWindowFocus,
      // retry: (failureCount, error) => shouldRetryQuery(error)
      retry: (_, error) => shouldRetryQuery(error)
    }
  )
}
