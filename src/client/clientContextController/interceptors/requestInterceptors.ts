import { AxiosRequestConfig } from 'axios'
import { Buffer } from 'buffer'

export const getPartnerPublicKey = (token: string): string => {
  if (token) {
    try {
      return JSON.parse(Buffer.from(token.split('.')[1], 'base64').toString()).partnerPublicKey
    } catch (e) {
      return ''
    }
  }

  return ''
}

export const requestTokenInterceptor = (
  config: AxiosRequestConfig,
  // logError: (error: Error) => void,
  sessionToken: string | undefined
): AxiosRequestConfig => {
  if (sessionToken) {
    return {
      ...config,
      headers: {
        'donation-session-token': sessionToken,
        Authorization: getPartnerPublicKey(sessionToken),
        ...config.headers
      }
    }
  }

  return config
}
