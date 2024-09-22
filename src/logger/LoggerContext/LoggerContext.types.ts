import { ReactNode } from 'react'

export type LoggerContextType = {
  logError: (error: unknown) => void
  logMessage: (message: string) => void
}

export type LoggerContextProps = {
  children: ReactNode
}
