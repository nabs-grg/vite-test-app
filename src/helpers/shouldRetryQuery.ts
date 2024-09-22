import axios from 'axios'

export const shouldRetryQuery = (error: unknown): boolean => {
  if (axios.isAxiosError(error)) {
    return !!error.response?.status && error.response.status >= 500
  }

  return false
}
