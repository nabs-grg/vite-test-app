import { AxiosResponse } from 'axios'

export type MutationHTTPMethod = 'DELETE' | 'POST' | 'PUT' | 'PATCH' | 'GET'

export type ClientResponse<TResponse = unknown> = AxiosResponse<TResponse>

export type AxiosError = {
  response?: {
    status: number
    data: {
      error: {
        reasons?: string[]
        code: string
      }
    }
  }
}

export const isAxiosError = (err: any): err is AxiosError => err.response !== undefined
