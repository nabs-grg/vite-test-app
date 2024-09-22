/* eslint-disable no-console */
// import { init, captureException, captureMessage, browserTracingIntegration, replayIntegration } from '@sentry/react'
import { useCallback } from 'react'

import { LoggerContext } from '../LoggerContext/LoggerContext'
import { LoggerContextProps } from '../LoggerContext/LoggerContext.types'

const useSentryLogger = ['sandbox', 'staging', 'production'].includes('Staging' as string)

// if (useSentryLogger) {
//   init({
//     dsn: 'https://34030c141b004e09ba78134e70e71327@o128854.ingest.sentry.io/6565363',
//     integrations: [
//       browserTracingIntegration({
//         tracingOrigins: [
//           'donate.poweredbypercent.com',
//           'sandbox-donate.poweredbypercent.com',
//           'staging-donate.poweredbypercent.com',
//           /^\//
//         ]
//       }),
//       replayIntegration()
//     ],
//     environment: process.env.NX_REACT_APP_ENV,
//     autoSessionTracking: true,
//     tracesSampleRate: 0.33,
//     replaysSessionSampleRate: 0.01,
//     replaysOnErrorSampleRate: 1
//   })
// }

export function LoggerContextController({ children }: LoggerContextProps) {
  const logError = useCallback((error: unknown) => {
    if (useSentryLogger) {
      // captureException(error)
    } else {
      console.log(error)
    }
  }, [])

  const logMessage = useCallback((message: string) => {
    if (useSentryLogger) {
      // captureMessage(message)
    } else {
      console.log(message)
    }
  }, [])

  // eslint-disable-next-line react/jsx-no-constructed-context-values
  return <LoggerContext.Provider value={{ logError, logMessage }}>{children}</LoggerContext.Provider>
}
