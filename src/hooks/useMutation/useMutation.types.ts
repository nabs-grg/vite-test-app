export type MutationHTTPMethod = 'DELETE' | 'POST' | 'PUT' | 'PATCH' | 'GET'

export type Mutation<TParams, TResponse = unknown, TError = unknown> = {
  endpoint: string
  params: TParams
  method: MutationHTTPMethod
  response?: TResponse // Optional TResponse for the mutation's expected response
  error?: TError // Optional TError for error handling
}
/**
 * TResponse is being used in order to properly infer type in useMutation from function returning mutation parameters
 * */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export type MutationFn<TParams = unknown, TResponse = unknown, TError = unknown> = (
  params: TParams
) => Mutation<TParams, TResponse, TError>
