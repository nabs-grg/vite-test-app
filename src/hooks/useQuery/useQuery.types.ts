import { QueryKey, UseQueryOptions as UseRQQueryOptions } from '@tanstack/react-query'
import { Axios } from 'axios'

export type Query<TArgs> = {
  endpoint: string
  args: TArgs
}

export type QueryFn<TArgs, TResponse> = (_: Axios, __: TArgs) => Promise<TResponse>

export type UseQueryConfigParameters<TArgs = unknown> = {
  args?: TArgs
}

export type UseQueryOptions<
  TQueryFnData = unknown,
  TParams = unknown,
  TError = unknown,
  TData = TParams,
  TQueryKey extends QueryKey = QueryKey
> = UseQueryConfigParameters<TQueryFnData> &
  Omit<UseRQQueryOptions<TQueryFnData, TError, TData, TQueryKey>, 'queryKey' | 'queryFn'>
